// app/dashboard/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>歡迎使用後台系統-我是首頁</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">請從左側選單選擇您要管理的模組，例如品牌管理、飯店管理或銷售管理。</p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>歡迎使用後台系統-我是首頁</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">請從左側選單選擇您要管理的模組，例如品牌管理、飯店管理或銷售管理。</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>歡迎使用後台系統-我是首頁</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">請從左側選單選擇您要管理的模組，例如品牌管理、飯店管理或銷售管理。</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
