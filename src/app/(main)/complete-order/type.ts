export type HotelBooking = {
  hotelName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  address: string;
  region: string;
  phone: string;
  price: number;
};

export type Souvenir = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
};

export type OrderDetails = {
  orderId: string;
  bookingDate: string;
  paymentName: string;
  paymentEmail: string;
  paymentPhone: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  hotelBooking: HotelBooking;
  souvenirs: Souvenir[];
  total: number;
  status: string;
};
