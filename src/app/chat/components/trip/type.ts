export interface TripActivity {
  time: string;
  location: string;
  description: string;
  image: string;
}

export interface TripDay {
  day: number;
  title: string;
  weather: string;
  weatherIcon: "sun" | "cloud" | "rain";
  temperature: string;
  activities: TripActivity[];
}

export interface TripHotel {
  id: string;
  name: string;
  rating: number;
  price: string;
  image: string;
}

export interface TripPlanCard {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  days: number;
  nights: number;
  location: string;
  price: string;
  schedule: TripDay[];
  hotels: TripHotel[];
}
export interface ChatTripReplyProps {
  trips?: TripPlanCard[];
}
export const trips: TripPlanCard[] = [
  {
    id: "1",
    title: "台北101觀光之旅",
    description: "探索台北最著名的地標，享受城市美景和購物體驗",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400&h=250&fit=crop",
    duration: "2天1夜",
    days: 2,
    nights: 1,
    location: "台北",
    price: "NT$ 3,500",
    schedule: [
      {
        day: 1,
        title: "台北市區探索",
        weather: "晴朗",
        weatherIcon: "sun",
        temperature: "24°C",
        activities: [
          {
            time: "09:00",
            location: "台北101",
            description: "登上台北最高樓，俯瞰城市全景",
            image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=120&h=80&fit=crop",
          },
          {
            time: "14:00",
            location: "信義商圈",
            description: "購物血拼，品嚐美食",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=120&h=80&fit=crop",
          },
        ],
      },
      {
        day: 2,
        title: "歷史文化巡禮",
        weather: "多雲",
        weatherIcon: "cloud",
        temperature: "22°C",
        activities: [
          {
            time: "10:00",
            location: "故宮博物院",
            description: "欣賞中華文物珍品",
            image: "https://images.unsplash.com/photo-1580414215542-2e1e607f2b6a?w=120&h=80&fit=crop",
          },
          {
            time: "15:00",
            location: "士林夜市",
            description: "體驗台灣夜市文化",
            image: "https://images.unsplash.com/photo-1414438992182-69e404e66ee8?w=120&h=80&fit=crop",
          },
        ],
      },
    ],
    hotels: [
      {
        id: "h1",
        name: "台北君悅酒店",
        rating: 4.8,
        price: "NT$ 4,500/晚",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=150&h=100&fit=crop",
      },
      {
        id: "h2",
        name: "寒舍艾美酒店",
        rating: 4.7,
        price: "NT$ 3,800/晚",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=150&h=100&fit=crop",
      },
      {
        id: "h3",
        name: "台北晶華酒店",
        rating: 4.6,
        price: "NT$ 4,200/晚",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=150&h=100&fit=crop",
      },
    ],
  },
  {
    id: "2",
    title: "日月潭湖光山色",
    description: "體驗台灣最美麗的湖泊風光，搭乘纜車欣賞絕美景色",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    duration: "3天2夜",
    days: 3,
    nights: 2,
    location: "南投",
    price: "NT$ 5,800",
    schedule: [
      {
        day: 1,
        title: "日月潭環湖之旅",
        weather: "晴朗",
        weatherIcon: "sun",
        temperature: "26°C",
        activities: [
          {
            time: "10:00",
            location: "水社碼頭",
            description: "搭乘遊船環湖欣賞美景",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&h=80&fit=crop",
          },
          {
            time: "15:00",
            location: "向山遊客中心",
            description: "觀賞湖光山色建築美學",
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=120&h=80&fit=crop",
          },
        ],
      },
      {
        day: 2,
        title: "纜車文化體驗",
        weather: "多雲",
        weatherIcon: "cloud",
        temperature: "24°C",
        activities: [
          {
            time: "09:00",
            location: "日月潭纜車",
            description: "空中俯瞰日月潭全景",
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=120&h=80&fit=crop",
          },
          {
            time: "14:00",
            location: "九族文化村",
            description: "體驗原住民文化",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=120&h=80&fit=crop",
          },
        ],
      },
      {
        day: 3,
        title: "自然生態探索",
        weather: "晴朗",
        weatherIcon: "sun",
        temperature: "25°C",
        activities: [
          {
            time: "08:00",
            location: "文武廟",
            description: "祈福參拜賞湖景",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=120&h=80&fit=crop",
          },
          {
            time: "11:00",
            location: "伊達邵老街",
            description: "品嚐邵族美食",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=120&h=80&fit=crop",
          },
        ],
      },
    ],
    hotels: [
      {
        id: "h4",
        name: "雲品溫泉酒店",
        rating: 4.9,
        price: "NT$ 6,800/晚",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=150&h=100&fit=crop",
      },
      {
        id: "h5",
        name: "日月潭大飯店",
        rating: 4.5,
        price: "NT$ 3,200/晚",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=150&h=100&fit=crop",
      },
      {
        id: "h6",
        name: "涵碧樓酒店",
        rating: 4.8,
        price: "NT$ 8,500/晚",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=150&h=100&fit=crop",
      },
    ],
  },
  {
    id: "3",
    title: "墾丁陽光海灘",
    description: "享受南台灣的陽光沙灘，體驗熱帶風情和水上活動",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
    duration: "4天3夜",
    days: 4,
    nights: 3,
    location: "屏東",
    price: "NT$ 7,200",
    schedule: [
      {
        day: 1,
        title: "抵達墾丁放鬆",
        weather: "晴朗",
        weatherIcon: "sun",
        temperature: "28°C",
        activities: [
          {
            time: "14:00",
            location: "南灣海灘",
            description: "享受陽光沙灘戲水",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=120&h=80&fit=crop",
          },
          {
            time: "18:00",
            location: "墾丁大街",
            description: "品嚐在地美食小吃",
            image: "https://images.unsplash.com/photo-1414438992182-69e404e66ee8?w=120&h=80&fit=crop",
          },
        ],
      },
      {
        day: 2,
        title: "海洋生態之旅",
        weather: "晴朗",
        weatherIcon: "sun",
        temperature: "30°C",
        activities: [
          {
            time: "09:00",
            location: "海洋生物博物館",
            description: "探索海洋生物奧秘",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=120&h=80&fit=crop",
          },
          {
            time: "15:00",
            location: "白沙灣海灘",
            description: "水上活動體驗",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=80&fit=crop",
          },
        ],
      },
      {
        day: 3,
        title: "自然景觀探索",
        weather: "小雨",
        weatherIcon: "rain",
        temperature: "26°C",
        activities: [
          {
            time: "10:00",
            location: "鵝鑾鼻燈塔",
            description: "台灣最南端地標",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=120&h=80&fit=crop",
          },
          {
            time: "14:00",
            location: "龍磐公園",
            description: "草原懸崖海景",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=80&fit=crop",
          },
        ],
      },
      {
        day: 4,
        title: "告別墾丁",
        weather: "晴朗",
        weatherIcon: "sun",
        temperature: "29°C",
        activities: [
          {
            time: "09:00",
            location: "貓鼻頭公園",
            description: "珊瑚礁海岸風光",
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=120&h=80&fit=crop",
          },
          {
            time: "12:00",
            location: "恆春古城",
            description: "歷史古蹟巡禮",
            image: "https://images.unsplash.com/photo-1580414215542-2e1e607f2b6a?w=120&h=80&fit=crop",
          },
        ],
      },
    ],
    hotels: [
      {
        id: "h7",
        name: "墾丁凱撒大飯店",
        rating: 4.7,
        price: "NT$ 5,500/晚",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=150&h=100&fit=crop",
      },
      {
        id: "h8",
        name: "墾丁福華渡假飯店",
        rating: 4.4,
        price: "NT$ 4,200/晚",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=150&h=100&fit=crop",
      },
      {
        id: "h9",
        name: "墾丁夏都沙灘酒店",
        rating: 4.6,
        price: "NT$ 4,800/晚",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=150&h=100&fit=crop",
      },
    ],
  },
];
