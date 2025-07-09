"use client";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useProductsQuery } from "@/hooks/react-query/useProduct";
import { QuerySchemaType } from "@/schema/common/pagination";
import { useProductDialogStore } from "@/store/Dialog/useProductStore";

import Pagination from "./Pagination";
import { columns, defaultProduct } from "./columns";

export const ProductTable = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [page, setPage] = useState(1);
  const queryParams = useMemo<QuerySchemaType>(
    () => ({
      currentPage: page,
      perPage: 10,
    }),
    [page]
  );

  const { openDialog } = useProductDialogStore();
  const { data } = useProductsQuery(queryParams);

  const tableData = data?.products ?? [];
  const currentPage = data?.pagination.totalPages ?? 1;
  const perPage = data?.pagination.perPage ?? 0;
  const totalPages = data?.pagination.totalPages ?? 1;
  const totalItems = data?.pagination.totalItems ?? 0;
  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="flex h-[calc(100vh-140px)] flex-col space-y-4 overflow-auto rounded-md border p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <Button className="rounded" size={"sm"} onClick={() => openDialog(defaultProduct)}>
          + 新增伴手禮
        </Button>
        <Input
          variant="dashboardDefault"
          placeholder="搜尋伴手禮..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-xs"
        />
      </div>
      <Table className="border border-gray-50">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-muted/30 transition">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="bg-muted text-muted-foreground font-semibold uppercase">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="text-muted-foreground mt-auto flex flex-col gap-2 px-2 py-6 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          總筆數 {totalItems} 筆｜每頁 {perPage} 筆｜第 {currentPage} / {totalPages} 頁
        </p>
        <Pagination currentPage={currentPage} totalPages={totalPages} onChange={(page) => setPage(page)} />
      </div>
    </div>
  );
};
