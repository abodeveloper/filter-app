"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { filterData } from "../../../data/filter"; // Ma'lumotlarni import qilish
import Container from "../../container/Container";
import { Typography } from "../../typography/Typography";
import UniversityCard from "../../university-card/UniversityCard";

const ExploreUniversities = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Mobil uchun default 4 ta

  // Ekran kengligini tekshirib, `visibleCount` ni moslashtiramiz
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3); // Desktopda 3 ta bo‘lsin
      } else {
        setVisibleCount(4); // Mobilda 4 ta bo‘lsin
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const showMore = () => {
    setVisibleCount(filterData.length);
  };

  return (
    <Container>
      <div id="product">
        {/* Header */}
        <div className="my-20 flex justify-center items-center">
          <div className="max-w-[540px] w-full text-center">
            <Typography
              variant="body"
              size="sm"
              className="text-textBrand"
              weight="medium"
            >
              Mahsulotlar
            </Typography>
            <Typography
              variant="headline"
              size="md"
              weight="semi-bold"
              className="text-[40px] lg:text-[48px]"
            >
              Ichimlik suvingiz qanchalik toza? Sinab ko‘ring!
            </Typography>
            <Typography
              variant="body"
              size="md"
              as="p"
              className="text-textSecondary mt-4"
            >
              Suv sifati haqida hech o‘ylab ko‘rganmisiz? Biz sizga toza va
              xavfsiz ichimlik suvi ta’minlashda yordam beramiz!
            </Typography>
          </div>
        </div>

        {/* Grid: mobilda 2x2, desktopda 3xN */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterData.slice(0, visibleCount).map((university) => (
            <Link
              key={university.id}
              href={`/dashboard/filters/${university.id}`}
            >
              <UniversityCard
                key={university.id}
                name={university.name}
                price={university.price}
                for_text={university.for_text}
                image={university.image}
                made_in={university.made_in}
                animation="zoom-in-up"
              />
            </Link>
          ))}
        </div>

        {/* "More" tugmasi */}
        {visibleCount < filterData.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={showMore}
              data-aos="zoom-in"
              className="mx-auto lg:mx-0 flex text-center bg-informativePrimary py-2 px-3 rounded-full shadow-informativePrimaryBtn mt-8"
            >
              <Typography variant="body" size="sm" className="text-white">
                Barcha mahsulotlarni ko‘rish
              </Typography>
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ExploreUniversities;
