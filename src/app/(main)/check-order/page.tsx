"use client";
import { BedDouble, CircleX, ShoppingBag } from "lucide-react";
import React from "react";

import { useOrderStore } from "@/store/useOrderStore";

const CheckoutOrderPage = () => {
  const order = useOrderStore((state) => state.data);

  if (!order) {
    return <div className="text-destructive">找不到訂單資料，請重新下單</div>;
  }
  return (
    <section className="container mx-auto space-y-8 rounded-lg bg-white p-6 shadow">
      <div>
        <h2 className="mb-4 flex items-center font-semibold">
          <BedDouble className="mr-1" />
          訂房資訊
        </h2>
        <div className="overflow-x-auto rounded border">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-cap">
              <tr className="text-left">
                <th className="px-4 py-2">ID代碼</th>
                <th className="px-4 py-2">飯店名稱</th>
                <th className="px-4 py-2">訂房時間</th>
                <th className="px-4 py-2">退房時間</th>
                <th className="px-4 py-2">人數數量</th>
                <th className="px-4 py-2">天數</th>
                <th className="px-4 py-2">單價</th>
                <th className="px-4 py-2">金額</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">33d76c79-9c27-4720-aea8-7b4160bb0c91</td>
                <td className="px-4 py-2">雅兔大飯店</td>
                <td className="px-4 py-2">2025-06-21</td>
                <td className="px-4 py-2">2025-06-28</td>
                <td className="px-4 py-2">7</td>
                <td className="px-4 py-2">2,560</td>
                <td className="px-4 py-2">{7 * 2560}</td>
                <td className="text-primary px-4 py-2">
                  <CircleX />{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 商品明細 */}
      <div>
        <h2 className="mb-4 flex items-center font-semibold">
          <ShoppingBag className="mr-1" />
          伴手禮
        </h2>
        <div className="overflow-x-auto rounded border">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-cap">
              <tr className="text-left">
                <th className="px-4 py-2">ID代碼</th>
                <th className="px-4 py-2">產品名稱</th>
                <th className="px-4 py-2">產品描述</th>
                <th className="px-4 py-2">數量</th>
                <th className="px-4 py-2">單價</th>
                <th className="px-4 py-2">金額</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">{/* d76c7933-9c27-4720-aea8-7b410c9160bb */}</td>
                <td className="px-4 py-2">{/* 雅兔伴手裡套餐 */}</td>
                <td className="px-4 py-2">{/* 一直卡皮巴拉 */}</td>
                <td className="px-4 py-2">{/* 1 */}</td>
                <td className="px-4 py-2">{/* 2000 */}</td>
                <td className="px-4 py-2">{/* 2,000 */}</td>
                <td className="text-primary px-4 py-2">
                  <CircleX />{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 點數與結算 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 結帳區塊 */}
        <div className="space-y-2 rounded border p-4">
          <h3 className="font-semibold">購買結算</h3>

          <div className="text-primary flex justify-between border-t pt-2 text-base font-bold">
            <span>總計</span>
            <span>19,920</span>
          </div>
        </div>
      </div>

      {/* 購買資訊表單 */}
      <div className="rounded border border-gray-300 p-4 text-sm">
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
          {/* 訂購人資訊 */}
          <div>
            <p className="text-gray-500">訂購人：</p>
            <p className="font-medium">Lobinda</p>
          </div>
          <div>
            <p className="text-gray-500">Email：</p>
            <p className="font-medium">Lobinda@gmail.com</p>
          </div>
          {/* 聯絡人資訊 */}
          <div>
            <p className="text-gray-500">聯絡人姓名：</p>
            <p className="font-medium">Lobinda</p>
          </div>
          <div>
            <p className="text-gray-500">電話：</p>
            <p className="font-medium">0987987987</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-500">地址：</p>
            <p className="font-medium">台北市內湖區內湖路一段737巷62號</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutOrderPage;
