import { z } from "zod";

import { OrderContactSchemaType } from "./components/customerInfoForm/schemas";

/** 訂單商品項目 */
export type OrderItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
};

/** 飯店資料 */
export type HotelData = {
  name: string;
  image: string;
  pricePerNight: number;
  address: string;
  phone: string;
};

/** 訂房資料 */
export type BookingData = {
  checkInDate: string;
  checkOutDate: string;
  roomType: string;
  hotel: HotelData;
  nights: number; // 住宿晚數
};
/** 伴手禮商品 */
export type GiftItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

/** 已選擇的伴手禮 */
export type SelectedGift = {
  item: GiftItem;
  quantity: number;
};

/** 訂單資料 */
export type OrderData = {
  id: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  room_plan_id: string;
  hotel_id: string;
  total: number; // 總金額（飯店 + 伴手禮）
  item: OrderItem;
  shippingMethod: string;
  paymentMethod: string;
  trackingNumber?: string;
  bookingInfo?: BookingData;
};

/** 客戶資料 */
export type CustomerData = {
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  contactPhone: string;
  notes?: string;
};

/** 表單驗證錯誤 */
export type ValidationErrors = {
  [key: string]: string;
};

/** 主組件 Props */
export type OrderInformationPageProps = {
  initialOrderData?: OrderData;
  initialCustomerData?: CustomerData;
  isLoading?: boolean;
  onSave?: (customerData: CustomerData, selectedGift?: SelectedGift, orderItemQuantity?: number) => Promise<void>;
};

export type OrderDetailsCardProps = {
  selectedGift: SelectedGift | null;
  handleGiftQuantityChange: (type: "increase" | "decrease") => void;
  finalTotal: number;
};

/** 伴手禮輪播 Props */
export type ProductCarouselProps = {
  giftItems: GiftItem[];
  selectedGift: SelectedGift | null;
  handleSelectGift: (gift: GiftItem) => void;
  handleGiftQuantityChange: (type: "increase" | "decrease") => void;
};
/** 客戶資訊表單 Props */
export type CustomerInfoFormProps = {
  handleFormSubmit: (formData: OrderContactSchemaType) => Promise<void>;
  isSaving: boolean;
};

/** 訂房資訊卡片 Props */
export type BookingInfoCardProps = {
  bookingInfo: BookingData;
  hotelBookingTotal: number;
};

export type RoomPlanOrderRaw = {
  hotel_id: string;
  hotel_name: string;
  hotel_region: string;
  hotel_address: string;
  hotel_phone: string;
  hotel_facilities: string[];
  hotel_policies: string;
  hotel_cover_image: string;
  transportation: string;
  latitude: string;
  longitude: string;
  room_plan_id: string;
  subscription_price: number;
  price: number;
  start_time: string;
  end_time: string;
  plan_images: string[];
  hotel_room_id: string;
  hotel_room_description: string;
  hotel_room_images: string[];
  base_price: number;
  room_type_id: string;
  room_type_name: string;
  room_type_description: string;
  room_services: string[];
  brand_description: string;
  check_in_date: string;
  check_out_date: string;
};

// Schema 定義
export const SubmitOrderSchema = z.object({
  hotel_id: z.string().uuid(),
  room_plans_id: z.string().uuid(),
  check_in_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "入住日期格式錯誤",
  }),
  check_out_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "退房日期格式錯誤",
  }),
  payment_name: z.string().min(1, { message: "付款人姓名為必填" }),
  payment_phone: z.string().min(1, { message: "付款人電話為必填" }),
  payment_email: z.string().email({ message: "付款人 Email 格式錯誤" }),
  contact_name: z.string().min(1, { message: "聯絡人姓名為必填" }),
  contact_phone: z.string().min(1, { message: "聯絡人電話為必填" }),
  contact_email: z.string().email({ message: "聯絡人 Email 格式錯誤" }),
  product_plans_id: z.string().optional(),
  quantity: z.number().optional(),
});

// TypeScript 類型
export type SubmitOrderSchemaType = z.infer<typeof SubmitOrderSchema>;
