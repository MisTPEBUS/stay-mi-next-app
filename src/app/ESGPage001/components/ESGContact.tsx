"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const ESGContact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gradient-to-bl from-emerald-100 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gradient-to-tr from-blue-100 to-transparent opacity-50" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative z-10 lg:order-2">
              <div className="absolute top-0 -left-4 h-24 w-2 rounded-full bg-gradient-to-b from-emerald-500 to-blue-500" />
              <h2 className="mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                聯絡我們
              </h2>
              <div className="mb-8 rounded-lg border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                <p className="text-xl text-gray-700">對我們的ESG倡議有疑問嗎？我們很樂意聽取您的意見。</p>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-emerald-500 text-emerald-600 shadow-lg transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-xl"
              >
                聯絡ESG團隊
              </Button>
            </div>
            <div className="lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop&crop=center"
                alt="聯絡我們"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ESGContact;
