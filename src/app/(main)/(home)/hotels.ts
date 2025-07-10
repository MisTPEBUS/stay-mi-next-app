import { HotelType, RoomType, Country } from "./types";

export const sectionHotels: HotelType[] = [
  {
    title: "晨曦旅居",
    room_type: "經典雙人房",
    region: "台北大安區",
    price: 3600,
    sub_price: 2880,
    stars: 4.7,
    imageUrl:
      "https://res.cloudinary.com/dwq2ehew4/image/upload/v1752074668/stay-mi/image/2d91e447-ad68-4709-a819-c46e2c42d5f7/pexels-fotios-photos-16104977.jpg",
  },
  {
    title: "漣島慢旅",
    room_type: "海景陽台房",
    region: "花蓮壽豐",
    price: 4000,
    sub_price: 3100,
    stars: 4.2,
    imageUrl:
      "https://res.cloudinary.com/dwq2ehew4/image/upload/v1752075958/stay-mi/image/2d91e447-ad68-4709-a819-c46e2c42d5f7/pexels-chetanvlad-2957461.jpg",
  },
  {
    title: "木光山宿",
    room_type: "溫泉家庭房",
    region: "南投埔里",
    price: 5200,
    sub_price: 4280,
    stars: 4.6,
    imageUrl:
      "https://res.cloudinary.com/dwq2ehew4/image/upload/v1752076000/stay-mi/image/2d91e447-ad68-4709-a819-c46e2c42d5f7/pexels-jodaarba-2204880.jpg",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl:
      "https://res.cloudinary.com/dwq2ehew4/image/upload/v1752076050/stay-mi/image/2d91e447-ad68-4709-a819-c46e2c42d5f7/pexels-leah-newhouse-50725-2090651.jpg",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl:
      "https://res.cloudinary.com/dwq2ehew4/image/upload/v1752076072/stay-mi/image/2d91e447-ad68-4709-a819-c46e2c42d5f7/pexels-rachel-claire-6127022.jpg",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl:
      "https://res.cloudinary.com/dwq2ehew4/image/upload/v1752076108/stay-mi/image/2d91e447-ad68-4709-a819-c46e2c42d5f7/pexels-rachel-claire-6127330.jpg",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl:
      "https://res.cloudinary.com/dwq2ehew4/image/upload/v1752076135/stay-mi/image/2d91e447-ad68-4709-a819-c46e2c42d5f7/pexels-studio-1441058.jpg",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl:
      "https://res.cloudinary.com/dwq2ehew4/image/upload/v1752076162/stay-mi/image/2d91e447-ad68-4709-a819-c46e2c42d5f7/pexels-vince-2227787.jpg",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl:
      "https://res.cloudinary.com/dwq2ehew4/image/upload/v1752076182/stay-mi/image/2d91e447-ad68-4709-a819-c46e2c42d5f7/pexels-zachtheshoota-1861153.jpg",
  },
];
export const roomData: RoomType[] = [
  {
    name: "單人房",
    description: "單身狗主題房",
    room_service: ["陪睡服務", "叫床服務"],
  },
  {
    name: "雙人房",
    description: "情侶愛情房",
    room_service: ["WiFi", "TV"],
  },
  {
    name: "三人房",
    description: "經典親子房",
    room_service: ["空調", "保險箱", "陽台"],
  },
  {
    name: "四人房",
    description: "豪華四人房",
    room_service: ["房間清潔", "床單更換", "洗衣服務", "早餐服務"],
  },
];

export const countryData: Country[] = [
  { name: "台北市" },
  { name: "新北市" },
  { name: "桃園市" },
  { name: "新竹縣" },
  { name: "新竹市" },
];
