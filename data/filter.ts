import { StaticImageData } from "next/image";
import Image1 from "../public/filter-images/filter-1.jpg"; // To'g'ri path ekanligiga ishonch hosil qiling
import Poster1 from "../public/filter-images/filter-poster-1.jpg"; // To'g'ri path ekanligiga ishonch hosil qiling

export type Filter = {
  id: string;
  image: StaticImageData;
  poster: StaticImageData;
  name: string;
  made_in: string;
  for_text: string;
  price: string;
  description: string;
  info: string;
};

export const filterData: Filter[] = [
  {
    id: "1",
    image: Image1,
    poster: Poster1,
    name: "AquaPure Filter",
    made_in: "Germany",
    for_text: "5 people",
    price: "200$",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, minus eaque? Tempora deserunt at sapiente aliquid sit autem corrupti enim rerum reprehenderit est cupiditate dolore impedit eum nobis quas, quisquam voluptates a illo expedita rem ipsam tenetur omnis molestiae inventore? Repellat, magnam placeat tempora error aperiam ab velit culpa reiciendis!",
    info: `Производитель: Германия <br/>
    Степеней очистки: 6 <br/>
    Производительность: 12 л/час (288 л/сутки) <br/>
    Минерализация: 60-80 мг/л <br/>
    Уровень фильтрации: 95-99% <br/>
    Объем накопительного бака: 5 л <br/>
    Встроенная помпа: Есть <br/>
    Давление воды: 2,5-6,0 бар <br/>
    Рабочая температура: 4-38°С <br/>
    Количество мембран: 1 <br/>
    Габариты: Высота: 350 мм, Ширина: 260 мм, Глубина: 260 мм`,
  },
  {
    id: "2",
    image: Image1,
    poster: Poster1,
    name: "HydroMax Pro",
    made_in: "USA",
    for_text: "8 people",
    price: "350$",
    description: "Professional water filter with advanced technology.",
    info: `Производитель: США <br/>
    Степеней очистки: 5 <br/>
    Производительность: 14 л/час (336 л/сутки) <br/>
    Минерализация: 50-70 мг/л <br/>
    Уровень фильтрации: 96-99% <br/>
    Объем накопительного бака: 6 л <br/>
    Встроенная помпа: Нет <br/>
    Давление воды: 3,0-7,0 бар <br/>
    Рабочая температура: 5-35°С <br/>
    Количество мембран: 1 <br/>
    Габариты: Высота: 370 мм, Ширина: 280 мм, Глубина: 280 мм`,
  },
  {
    id: "3",
    image: Image1,
    poster: Poster1,
    name: "EcoWater Plus",
    made_in: "Canada",
    for_text: "6 people",
    price: "180$",
    description: "Eco-friendly water filter with 3-stage purification.",
    info: `Производитель: Канада <br/>
    Степеней очистки: 3 <br/>
    Производительность: 10 л/час (240 л/сутки) <br/>
    Минерализация: 40-60 мг/л <br/>
    Уровень фильтрации: 90-95% <br/>
    Объем накопительного бака: 4 л <br/>
    Встроенная помпа: Нет <br/>
    Давление воды: 2,0-5,5 бар <br/>
    Рабочая температура: 4-35°С <br/>
    Количество мембран: 1 <br/>
    Габариты: Высота: 340 мм, Ширина: 260 мм, Глубина: 260 мм`,
  },
  {
    id: "4",
    image: Image1,
    poster: Poster1,
    name: "NanoPure 5000",
    made_in: "Japan",
    for_text: "10 people",
    price: "450$",
    description: "Nanotechnology-based water filter for large families.",
    info: `Производитель: Япония <br/>
    Степеней очистки: 7 <br/>
    Производительность: 16 л/час (384 л/сутки) <br/>
    Минерализация: 70-90 мг/л <br/>
    Уровень фильтрации: 98-99% <br/>
    Объем накопительного бака: 8 л <br/>
    Встроенная помпа: Есть <br/>
    Давление воды: 3,5-7,5 бар <br/>
    Рабочая температура: 5-40°С <br/>
    Количество мембран: 2 <br/>
    Габариты: Высота: 390 мм, Ширина: 300 мм, Глубина: 300 мм`,
  },
  {
    id: "5",
    image: Image1,
    poster: Poster1,
    name: "Crystal Clear",
    made_in: "UK",
    for_text: "4 people",
    price: "220$",
    description: "Compact and efficient water filter for apartments.",
    info: `Производитель: Великобритания <br/>
    Степеней очистки: 4 <br/>
    Производительность: 9 л/час (216 л/сутки) <br/>
    Минерализация: 50-65 мг/л <br/>
    Уровень фильтрации: 94-98% <br/>
    Объем накопительного бака: 4,5 л <br/>
    Встроенная помпа: Нет <br/>
    Давление воды: 2,0-6,0 бар <br/>
    Рабочая температура: 4-36°С <br/>
    Количество мембран: 1 <br/>
    Габариты: Высота: 320 мм, Ширина: 250 мм, Глубина: 250 мм`,
  },
  {
    id: "6",
    image: Image1,
    poster: Poster1,
    name: "BlueWave Ultra",
    made_in: "Italy",
    for_text: "7 people",
    price: "310$",
    description: "Designed for homes and small businesses.",
    info: `Производитель: Италия <br/>
    Степеней очистки: 6 <br/>
    Производительность: 11 л/час (264 л/сутки) <br/>
    Минерализация: 55-75 мг/л <br/>
    Уровень фильтрации: 95-98% <br/>
    Объем накопительного бака: 6 л <br/>
    Встроенная помпа: Есть <br/>
    Давление воды: 2,5-6,5 бар <br/>
    Рабочая температура: 4-38°С <br/>
    Количество мембран: 1 <br/>
    Габариты: Высота: 350 мм, Ширина: 270 мм, Глубина: 270 мм`,
  },
];


