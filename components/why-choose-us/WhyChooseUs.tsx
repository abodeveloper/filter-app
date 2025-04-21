import React from "react";
import Container from "../container/Container";
import { Typography } from "../typography/Typography";
import { ArrowRight } from "../icons/icons";
import Link from "next/link";
import ItemCard from "../item-card/ItemCard";
import Image from "next/image";

const items = [
  {
    icon: (
      <Image
        src="/images/bar_chart.png"
        alt="StreamlinedAppsIcon"
        width={48}
        height={48}
        className="w-12 h-12"
        unoptimized
      />
    ),
    title: " Suv sifati har doim yuqori emas",
    desc: "Ko‘p joylarda suv tarkibida xlor, og‘ir metallar va bakteriyalar uchraydi. Suv filtrimiz bilan ularni bartaraf qiling!",
    className: "border border-gray-200 rounded-3xl bg-[#F7FFF4]",
    titleClassName: "text-[#3A9A16]",
    animation: "fade-right",
  },
  {
    icon: (
      <Image
        src="/images/expert_guidance.png"
        alt="guidance"
        width={48}
        height={48}
        className="w-12 h-12"
        unoptimized
      />
    ),
    title: "Tabiiy va mazali ichimlik suvi",
    desc: "Filtrlangan suv tabiiy ta’mini saqlaydi va tanangizga zararli moddalarsiz yetib boradi.",
    className: "border border-gray-200 rounded-3xl bg-[#FBF4FF]",
    titleClassName: "text-[#7D39A5]",
    animation: "zoom-in-up",
  },

  {
    icon: (
      <Image
        src="/images/target.png"
        alt="target"
        width={48}
        height={48}
        className="w-12 h-12"
        unoptimized
      />
    ),
    title: "Sog‘lig‘ingizni himoya qiling",
    desc: "Toza suv iste’mol qilish immunitetingizni mustahkamlaydi va kasalliklarning oldini oladi.",
    className: "border border-gray-200 rounded-3xl bg-[#F4F9FF]",
    titleClassName: "text-[#32629C]",
    animation: "fade-left",
  },
  {
    icon: (
      <Image
        src="/images/smiley.png"
        alt="target"
        width={48}
        height={48}
        className="w-12 h-12"
        unoptimized
      />
    ),
    title: "Shishadagi suvga pul sarflamang!",
    desc: "Filtrlash tizimi uzoq muddatda ancha tejamkor – doimiy xarajatlarni kamaytiradi.",
    className: "border border-gray-200 rounded-3xl bg-[#F4F9FF]",
    titleClassName: "text-[#32629C]",
    animation: "fade-right",
  },
  {
    icon: (
      <Image
        src="/images/chinese.png"
        alt="real-time"
        width={48}
        height={48}
        className="w-12 h-12"
        unoptimized
      />
    ),
    title: "Atrof-muhitni himoya qiling",
    desc: "Plastik butilkalardan voz kechib, tabiatni asrang va ekologik toza hayot tarziga o‘ting.",
    className: "border border-gray-200 rounded-3xl bg-[#F7FFF4]",
    titleClassName: "text-[#3A9A16]",
    animation: "zoom-in-down",
  },
  {
    icon: (
      <Image
        src="/images/visa.png"
        alt="target"
        width={48}
        height={48}
        className="w-12 h-12"
        unoptimized
      />
    ),
    title: "Uy va ofis uchun qulay yechim",
    desc: "Suv filtrimiz istalgan joyga mos keladi va sizga ham, oila a’zolaringizga ham foyda keltiradi!",
    className: "border border-gray-200 rounded-3xl bg-[#FBF4FF]",
    titleClassName: "text-[#7D39A5]",
    animation: "fade-left",
  },
];

const WhyChooseUs = () => {
  return (
    <Container>
      <div className="my-20 flex justify-center items-center" id="features">
        <div className="max-w-[540px] w-full text-center ">
          <Typography
            variant="body"
            size="sm"
            className="text-textBrand"
            weight="medium"
          >
            Automation
          </Typography>
          <Typography
            variant="headline"
            size="md"
            weight="semi-bold"
            className="text-[36px] lg:text-[48px]"
          >
            Toza suv – sog‘lom hayot garovi!
          </Typography>
          <Typography
            variant="body"
            size="md"
            as="p"
            className="text-textSecondary mt-4"
          >
            Suv sifati sog‘lig‘ingizga bevosita ta’sir qiladi. Suv filtrlari
            bakteriyalar, kimyoviy moddalardan himoya qiladi va ichimlik
            suvingizni yanada xavfsiz va mazali qiladi. Oilangiz salomatligi
            uchun filtrlangan suvdan foydalaning!
          </Typography>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            titleClassName={item.titleClassName}
            className={item.className}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            animation={item.animation}
          />
        ))}
      </div>
    </Container>
  );
};

export default WhyChooseUs;
