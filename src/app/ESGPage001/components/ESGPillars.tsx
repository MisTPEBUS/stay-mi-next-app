"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export type ESGPillar = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  stats: Array<{ value: string; label: string }>;
  initiatives: string[];
};

type Props = {
  pillars: ESGPillar[];
};

const ESGPillars = ({ pillars }: Props) => {
  return (
    <section id="pillars" className="relative bg-gradient-to-b from-white via-gray-50/50 to-white py-20">
      <div className="absolute top-20 left-1/4 h-40 w-3 rounded-full bg-gradient-to-b from-emerald-400 to-transparent opacity-30"></div>
      <div className="absolute right-1/4 bottom-20 h-40 w-3 rounded-full bg-gradient-to-t from-purple-400 to-transparent opacity-30"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative lg:order-2">
              <h2 className="mb-6 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                ESG三大支柱
              </h2>
              <div className="rounded-xl border border-gray-100 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
                <p className="mb-8 text-xl text-gray-700">我們的全面永續發展方針建立在三個基本支柱之上</p>
              </div>
            </div>
            <div className="lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop&crop=center"
                alt="ESG三大支柱概念圖"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              <div className="flex-1">
                <Card className="relative h-full overflow-hidden border-0 bg-white/90 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
                  <div className={`absolute top-0 left-0 h-2 w-full ${pillar.color}`} />
                  <div className={`absolute right-0 bottom-0 h-32 w-32 ${pillar.color} rounded-tl-full opacity-5`} />
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-4">
                      <div className={`relative rounded-xl p-4 ${pillar.color} text-white shadow-lg`}>
                        {pillar.icon}
                        <div className={`absolute inset-0 ${pillar.color} -z-10 rounded-xl opacity-50 blur`} />
                      </div>
                      <CardTitle className="text-3xl text-gray-800">{pillar.title}</CardTitle>
                    </div>
                    <CardDescription className="rounded-lg bg-gray-50/50 p-4 text-lg text-gray-600">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 grid grid-cols-3 gap-4">
                      {pillar.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="relative text-center">
                          <div className={`absolute inset-0 ${pillar.color} rounded-lg opacity-10`} />
                          <div className="relative p-3">
                            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Separator className="mb-6" />
                    <div>
                      <h4 className="mb-3 font-semibold">重點倡議：</h4>
                      <div className="flex flex-wrap gap-2">
                        {pillar.initiatives.map((initiative, initIndex) => (
                          <Badge
                            key={initIndex}
                            variant="secondary"
                            className={`${pillar.color} text-white transition-opacity hover:opacity-80`}
                          >
                            {initiative}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="relative">
                  <img
                    src={
                      pillar.id === "environmental"
                        ? "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop&crop=center"
                        : pillar.id === "social"
                          ? "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop&crop=center"
                          : "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop&crop=center"
                    }
                    alt={`${pillar.title}相關圖片`}
                    className="h-64 w-64 rounded-full object-cover shadow-lg"
                  />
                  <div className={`absolute inset-0 h-64 w-64 rounded-full ${pillar.color} opacity-20`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGPillars;
