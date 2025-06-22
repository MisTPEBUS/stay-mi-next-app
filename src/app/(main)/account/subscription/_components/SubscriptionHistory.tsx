"use client";

type SubscriptionRecord = {
  plan: string;
  endDate: string;
  amount: number;
};

const SubscriptionRecords: SubscriptionRecord[] = [
  { plan: "Staymi Plus", endDate: "2025/5/1", amount: 1500 },
  { plan: "Staymi Plus", endDate: "2025/4/1", amount: 1500 },
];

const SubscriptionHistory = () => {
  return (
    <div className="bg-white-pure rounded-2xl p-4 md:p-6">
      <div className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">訂閱紀錄</div>
      <div>
        {SubscriptionRecords.map((item, index) => (
          <div
            key={index}
            className="border-gray-light/50 flex flex-col justify-between gap-2 border-b py-4 first:pt-0 last:border-none last:pb-0 md:flex-row md:items-center md:py-6"
          >
            <div>
              <p className="text-xl font-bold">{item.plan}</p>
              <p className="text-black-sub">訂閱方案到期日至 {item.endDate}</p>
            </div>
            <p className="text-right text-xl font-bold">NT ${item.amount.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SubscriptionHistory;
