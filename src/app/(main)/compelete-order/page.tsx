import React from "react";

const CheckoutOrderPage = () => {
  return (
    <section className="mx-auto max-w-5xl space-y-8 rounded-lg bg-white p-6 shadow">
      {/* 商品明細 */}
      <div>
        <h2 className="mb-4 font-semibold">訂購商品</h2>
        <div className="overflow-x-auto rounded border">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-cap">
              <tr className="text-left">
                <th className="px-4 py-2">料品代碼</th>
                <th className="px-4 py-2">廠牌</th>
                <th className="px-4 py-2">產品型號</th>
                <th className="px-4 py-2">產品名稱</th>
                <th className="px-4 py-2">數量</th>
                <th className="px-4 py-2">單價</th>
                <th className="px-4 py-2">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">DT00028744</td>
                <td className="px-4 py-2">ASUS</td>
                <td className="px-4 py-2">A31 PLUS TG ARGB WHITE</td>
                <td className="px-4 py-2">A31 PLUS White Edition 全景透視</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">2,111</td>
                <td className="px-4 py-2 text-red-500">2,111</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 點數與結算 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 點數使用 */}
        <div className="rounded border p-4">
          <p className="mb-2 text-sm text-gray-600">
            * 本次下單可得 <span className="text-red-600">0</span> 點
          </p>
          <div className="flex items-center space-x-2">
            <label htmlFor="points" className="text-sm">
              使用點數：
            </label>
            <input id="points" type="number" placeholder="0" className="w-24 rounded border px-2 py-1" />
            <span className="text-sm text-gray-500">（可使用點數：633點）</span>
          </div>
        </div>

        {/* 結帳區塊 */}
        <div className="space-y-2 rounded border p-4">
          <h3 className="font-semibold">購買結算</h3>

          <div className="text-primary flex justify-between border-t pt-2 text-base font-bold">
            <span>總計</span>
            <span>2,317</span>
          </div>
        </div>
      </div>

      {/* 購買資訊表單 */}
      <div className="space-y-4 rounded border p-4">
        <h3 className="text-lg font-semibold">購買資訊</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm">Po No.</label>
            <input className="w-full rounded border px-2 py-1" type="text" />
          </div>
          <div>
            <label className="text-sm">下單人</label>
            <input className="w-full rounded border px-2 py-1" type="text" value="首都客運股份有限公司" readOnly />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Email</label>
            <input className="w-full rounded border px-2 py-1" type="email" value="52484@capital-bus.com.tw" readOnly />
            <p className="mt-1 text-xs text-gray-500">（訂單完成出貨會自動寄送通知）</p>
          </div>
          <div>
            <label className="text-sm">收件人</label>
            <input className="w-full rounded border px-2 py-1" type="text" value="首都客運股份有限公司" />
          </div>
          <div>
            <label className="text-sm">電話</label>
            <input className="w-full rounded border px-2 py-1" type="tel" value="02-89721999" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">地址</label>
            <input className="w-full rounded border px-2 py-1" type="text" value="新北市三重區重新路三段78號8樓" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutOrderPage;
