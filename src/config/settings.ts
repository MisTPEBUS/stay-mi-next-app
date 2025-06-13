import {
  Dumbbell,
  Waves,
  ChefHat,
  ParkingSquare,
  MoveVertical,
  Accessibility,
  Briefcase,
  Presentation,
  TreePine,
  Martini,
  Cigarette,
  CreditCard,
  Baby,
  BookOpen,
  Flame,
  Hand,
  Bike,
  Bus,
  Clock,
  PawPrint,
  Luggage,
  Croissant,
  Bell,
  Printer,
  Library,
  PlugZap,
  Wifi,
  Tv,
  AirVent,
  CupSoda,
  Wind,
  ShowerHead,
  Lock,
  PenLine,
  Sofa,
  Sun,
  Shirt,
  AlarmClock,
} from "lucide-react";

export const hotelFacilitiesHot = [
  { value: "健身房", icon: "dumbbell" },
  { value: "游泳池", icon: "Waves" },
  { value: "早餐供應", icon: "croissant" },
  { value: "停車場", icon: "parkingSquare" },
  { value: "自助洗衣", icon: "washer" },
];
export const hotelFacilities: IconConfigItem[] = [
  { value: "健身房", icon: "dumbbell" },

  { value: "餐廳", icon: "chefHat" },

  { value: "停車場", icon: "parkingSquare" },
  { value: "電梯", icon: "moveVertical" },
  { value: "無障礙設施", icon: "accessibility" },
  { value: "商務中心", icon: "briefcase" },
  { value: "會議室", icon: "presentation" },
  { value: "戶外花園", icon: "treePine" },
  { value: "酒吧", icon: "martini" },
  { value: "吸菸區", icon: "cigarette" },
  { value: "ATM", icon: "creditCard" },
  { value: "兒童遊戲區", icon: "baby" },
  { value: "閱覽室", icon: "bookOpen" },
  { value: "桑拿室", icon: "flame" },
  { value: "按摩服務", icon: "hand" },
  { value: "腳踏車租借", icon: "bike" },
  { value: "接駁服務", icon: "bus" },
  { value: "24小時櫃台", icon: "clock" },
  { value: "寵物友善", icon: "pawPrint" },
  { value: "行李寄放", icon: "luggage" },
  { value: "早餐供應", icon: "croissant" },
  { value: "叫醒服務", icon: "bell" },
  { value: "影印/傳真", icon: "printer" },
  { value: "圖書室", icon: "library" },
  { value: "屋頂露台", icon: "sun" },
  { value: "電動車充電站", icon: "plugZap" },
  { value: "洗衣代送", icon: "shirt" },
];

export const roomServices: IconConfigItem[] = [
  { value: "WiFi", icon: "wifi" },
  { value: "電視", icon: "tv" },
  { value: "空調", icon: "airVent" },

  { value: "熱水壺", icon: "cupSoda" },
  { value: "吹風機", icon: "wind" },

  { value: "淋浴設備", icon: "showerHead" },
  { value: "保險箱", icon: "lock" },
  { value: "書桌", icon: "penLine" },
  { value: "沙發", icon: "sofa" },
  { value: "陽台", icon: "sun" },
  { value: "衣櫃", icon: "shirt" },

  { value: "叫醒服務", icon: "alarmClock" },
];

export const IconMap = {
  dumbbell: Dumbbell,
  swimming: Waves,
  chefHat: ChefHat,

  parkingSquare: ParkingSquare,
  moveVertical: MoveVertical,
  accessibility: Accessibility,
  briefcase: Briefcase,
  presentation: Presentation,
  treePine: TreePine,
  martini: Martini,
  cigarette: Cigarette,
  creditCard: CreditCard,
  baby: Baby,
  bookOpen: BookOpen,

  flame: Flame,
  hand: Hand,
  bike: Bike,
  bus: Bus,
  clock: Clock,
  pawPrint: PawPrint,
  luggage: Luggage,
  croissant: Croissant,
  bell: Bell,
  printer: Printer,
  library: Library,
  sun: Sun,
  plugZap: PlugZap,
  shirt: Shirt,
  wifi: Wifi,
  tv: Tv,
  airVent: AirVent,

  cupSoda: CupSoda,
  wind: Wind,

  showerHead: ShowerHead,
  lock: Lock,
  penLine: PenLine,
  sofa: Sofa,

  alarmClock: AlarmClock,
} as const;

export type IconKey = keyof typeof IconMap;

export type IconConfigItem = {
  value: string;
  icon: IconKey;
};
