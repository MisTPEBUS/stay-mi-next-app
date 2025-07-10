import { motion } from "framer-motion";
import { Award, Globe, Target } from "lucide-react";
import React, { ReactNode } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type overviewItemType = {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: string;

  accentColor: string;
};

const overviewItems: overviewItemType[] = [
  {
    icon: <Target className="h-12 w-12 text-emerald-600" />,
    title: "策略聚焦",
    description: "與聯合國永續發展目標和行業最佳實踐保持一致",
    bgColor: "from-emerald-500 to-emerald-600",
    accentColor: "bg-emerald-100",
  },
  {
    icon: <Globe className="h-12 w-12 text-blue-600" />,
    title: "全球影響",
    description: "在全球社區和生態系統中創造正面改變",
    bgColor: "from-blue-500 to-blue-600",
    accentColor: "bg-blue-100",
  },
  {
    icon: <Award className="h-12 w-12 text-purple-600" />,
    title: "業界認可",
    description: "業界領先的ESG評級和永續發展認證",
    bgColor: "from-purple-500 to-purple-600",
    accentColor: "bg-purple-100",
  },
];

const ESGOverview = () => {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-purple-50/50 py-20"
    >
      {/* 背景色塊 */}
      <div className="absolute top-0 right-0 h-64 w-64 translate-x-32 -translate-y-32 rounded-full bg-emerald-200/20"></div>
      <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-24 translate-y-24 rounded-full bg-blue-200/20"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute top-0 -left-8 h-32 w-2 rounded-full bg-gradient-to-b from-emerald-500 to-blue-500" />
              <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">我們的ESG承諾</h2>
              <div className="rounded-lg border border-emerald-100 bg-white/60 p-6 backdrop-blur-sm">
                <p className="mb-8 text-xl text-gray-700">
                  我們相信永續經營實踐是長期成功的關鍵。我們的全面ESG策略將環境管理、社會責任和道德治理融入營運的每個層面。
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop&crop=center"
                alt="永續發展概念圖"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {overviewItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full overflow-hidden border-0 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-r ${item.bgColor}`}></div>
                <CardHeader className="relative text-center">
                  <div className={`mx-auto mb-4 rounded-full p-4 ${item.accentColor}`}>{item.icon}</div>
                  <CardTitle className="text-gray-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">{item.description}</CardDescription>
                </CardContent>
                <div
                  className={`absolute right-0 bottom-0 h-16 w-16 bg-gradient-to-tl ${item.bgColor} rounded-tl-full opacity-10`}
                ></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGOverview;
