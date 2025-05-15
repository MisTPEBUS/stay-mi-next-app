// app/dashboard/page.tsx
import { Info, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div className="p-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold">系統總覽</CardTitle>
          <Settings className="text-muted-foreground h-5 w-5" />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">請從左側選單選擇模組，例如品牌管理、飯店管理或銷售管理。</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            管理模組
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold">使用說明</CardTitle>
          <Info className="text-muted-foreground h-5 w-5" />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">需要幫助？前往文件中心查詢模組操作方式與常見問題。</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" size="sm">
            查看文件
          </Button>
        </CardFooter>
      </Card>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>歡迎使用後台系統 - 我是首頁</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">請從左側選單選擇您要管理的模組，例如品牌管理、飯店管理或銷售管理。</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>其他說明模組</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">支援多模組管理與切換，請善用上方功能列快速操作。</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
