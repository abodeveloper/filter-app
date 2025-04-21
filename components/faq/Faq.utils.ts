export interface FAQItemI {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQItemI[] = [
  {
    id: 1,
    question: "Suv filtri qanday ishlaydi va qaysi turini tanlash kerak?",
    answer:
      "Suv filtrlari suvdagi zararli moddalarni tozalash uchun ishlatiladi. Har bir filtr turli maqsadga xizmat qiladi: uglerod filtrlari hid va ta’mni yaxshilaydi, teskari osmos filtrlari esa eng chuqur tozalashni ta’minlaydi. Bizning mutaxassislar sizga mos filtrni tanlashda yordam berishadi.",
  },
  {
    id: 2,
    question: "Suv filtrlarini o‘rnatish xizmati ham mavjudmi?",
    answer:
      "Ha, bizning mutaxassislarimiz suv filtringizni uy yoki ofisingizga o‘rnatib berishadi. Batafsil ma’lumot olish uchun biz bilan bog‘laning.",
  },
  {
    id: 3,
    question: "Suv filtrimni qanchalik tez-tez almashtirish kerak?",
    answer:
      "Bu filtr turiga bog‘liq. Odatda har 3-6 oyda filtrlash kartrijini almashtirish tavsiya etiladi. Teskari osmos filtrlari esa yilda 1-2 marta almashtiriladi.",
  },
  {
    id: 4,
    question: "Yetkazib berish qancha vaqt oladi?",
    answer:
      "Buyurtmalar odatda bir ish kuni ichida yetkazib beriladi. Hududingizga qarab, yetkazib berish muddati farqlanishi mumkin.",
  },
  {
    id: 5,
    question: "Suv filtrlari uchun kafolat bormi?",
    answer:
      "Ha, biz sotadigan barcha filtrlarga rasmiy kafolat taqdim etiladi. Kafolat muddati brend va modelga qarab 6 oydan 2 yilgacha bo‘lishi mumkin.",
  }
];
