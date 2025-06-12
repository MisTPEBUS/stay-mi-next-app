type subscriptionData = {
  title: string;
  description: string;
  price: string;
  type: "monthly" | "yearly" | null;
  note: string[];
};

export const title: string = "訂閱方案";

export const subscriptionItems: subscriptionData[] = [
  {
    title: "Staymi Standard",
    description: "適合所有註冊用戶，提供基本的訂房與收藏功能",
    price: "0",
    type: null,
    note: ["免費註冊即可使用", "使用網站訂房服務", "收藏飯店並儲存為個人清單", "接收訂房成功通知及入住提醒"],
  },
  {
    title: "Staymi Plus",
    description: "提供訂房折扣、會員專屬優惠與進階功能",
    price: "1500",
    type: "monthly",
    note: [
      "所有 Standard 方案功能",
      "訂房可享有固定折扣優惠",
      "可預訂會員專屬方案",
      "折扣推播及Email提醒",
      "獲得專屬客服支援",
    ],
  },
  {
    title: "Staymi Pro",
    description: "年度付費會員，享有完整體驗與尊榮服務",
    price: "9999",
    type: "yearly",
    note: [
      "所有 Plus 方案功能",
      "支援 QR Code 智慧入住",
      "入住可享會員體驗禮",
      "獨享 Pro 合作飯店商務服務",
      "不定期 Pro 專屬優惠",
      "優先參與平台新功能測試或活動活動邀請",
    ],
  },
];
