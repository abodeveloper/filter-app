"use client";
import React, { useState } from "react";
import { faqData } from "./Faq.utils";
import FAQItem from "./FaqItem";

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex items-center justify-center p-4" data-aos="fade-up">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className=" flex flex-col gap-3">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
