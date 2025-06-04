const DashboardPage = () => {
  return (
    <section className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-2xl font-bold">飯店基本資料</h1>

      <form className="space-y-6">
        {/* 區塊一：基本資訊 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">飯店名稱</label>
            <input type="text" className="mt-1 w-full rounded border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">統一編號</label>
            <input type="text" className="mt-1 w-full rounded border px-3 py-2" />
          </div>
        </div>

        {/* 區塊二：聯絡方式 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">電話</label>
            <input type="tel" className="mt-1 w-full rounded border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">電子郵件</label>
            <input type="email" className="mt-1 w-full rounded border px-3 py-2" />
          </div>
        </div>

        {/* 區塊三：地址 */}
        <div>
          <label className="block text-sm font-medium">地址</label>
          <input type="text" className="mt-1 w-full rounded border px-3 py-2" />
        </div>

        {/* 區塊四：送出按鈕 */}
        <div className="text-right">
          <button type="submit" className="rounded bg-black px-4 py-2 text-white">
            儲存變更
          </button>
        </div>
      </form>
    </section>
  );
};

export default DashboardPage;
