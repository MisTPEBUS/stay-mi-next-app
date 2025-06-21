import { OrderDetailType } from "@/schema/dashboard/order.dto";

import { HotelBooking, OrderDetails, Souvenir } from "../type";

type TransformOrderDataProps = {
  order?: OrderDetailType | null;
};

const DEFAULT_ORDER: OrderDetailType = {
  id: "9952b3e8-2dd0-4277-bc66-265810d68661",
  user_id: "00000000-0000-0000-0000-000000000000",
  hotel_id: "00000000-0000-0000-0000-000000000000",
  room_plans_id: "00000000-0000-0000-0000-000000000000",
  product_plans_id: "00000000-0000-0000-0000-000000000000",
  check_in_date: "2025-07-09",
  check_out_date: "2025-07-12",
  total_price: 51000,
  status: "pending",
  payment_name: "兔子",
  payment_phone: "0912345678",
  payment_email: "payment_email1747532011086@example.com",
  contact_name: "兔子",
  contact_phone: "0912345678",
  contact_email: "contact_email1747532011086@example.com",
  created_at: "2025-05-18 09:33:31",
  updated_at: "2025-05-18 09:33:31",
  hotel_name: "雅兔大飯店",
  hotel_region: "台北",
  hotel_address: "台北市信義區信義路五段 7 號",
  hotel_phone: "0912123123",
  room_name: "豪華海景標準雙人房套房",
  product_name: "雅兔鳳梨酥",
  product_price: 888,
  product_quantity: 7,
};

export const transformOrderData = ({ order }: TransformOrderDataProps) => {
  const safeOrder = order ?? DEFAULT_ORDER;
  const checkInDate = new Date(safeOrder.check_in_date ?? "2025-07-12");
  const checkOutDate = new Date(safeOrder.check_out_date ?? "2025-07-15");
  const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));

  const hotelBooking: HotelBooking = {
    hotelName: safeOrder.hotel_name,
    roomType: safeOrder.room_name,
    checkIn: safeOrder.check_in_date ?? "2025-07-12",
    checkOut: safeOrder.check_out_date ?? "2025-07-12",
    nights,
    address: safeOrder.hotel_address,
    region: safeOrder.hotel_region,
    phone: safeOrder.hotel_phone,
    price: safeOrder.total_price ?? 0,
  };

  const souvenirs: Souvenir[] = [];
  if (safeOrder.product_name !== null && safeOrder.product_price !== null && safeOrder.product_quantity !== null) {
    souvenirs.push({
      id: safeOrder.id,
      name: safeOrder.product_name,
      quantity: safeOrder.product_quantity,
      price: safeOrder.product_price,
    });
  }

  return {
    orderId: safeOrder.id,
    bookingDate: safeOrder.created_at ?? "",
    paymentName: safeOrder.payment_name,
    paymentEmail: safeOrder.payment_email,
    paymentPhone: safeOrder.payment_phone,
    contactName: safeOrder.contact_name,
    contactEmail: safeOrder.contact_email,
    contactPhone: safeOrder.contact_phone,
    hotelBooking,
    souvenirs,
    total: safeOrder.total_price ?? 0,
    status: safeOrder.status,
  };
};

export const getFinalTotal = (order: OrderDetails): number => {
  const souvenirTotal = order.souvenirs.reduce((sum, s) => sum + s.price * s.quantity, 0);
  return order.total + souvenirTotal;
};
