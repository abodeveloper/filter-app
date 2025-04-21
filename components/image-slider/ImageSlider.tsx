import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ArrowLeftSlider, ArrowRightSlider } from "../icons/icons";

const ImageSlider = ({
  logos,
  collectionId,
  recordId,
}: {
  logos: string[];
  className?: string;
  collectionId: string;
  recordId: string;
}) => {
  return (
    <div className="mb-8 w-full relative">
      <Swiper
        modules={[Navigation]}
        navigation
        // navigation={{
        //   prevEl: `.swiper-button-prev`,
        //   nextEl: `.swiper-button-next`,
        // }}
        slidesPerView={1}
        loop={true}
        className="relative"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <Image
              width={480}
              height={176}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-w-full w-full h-[468px] rounded-xl object-cover"
            />
          </SwiperSlide>
        ))}
        <div className="absolute bottom-7 right-8 flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button
                 onClick={() => swiper.slidePrev()}
              type="button"
              className={`swiper-button-prev bg-white rounded-l-lg !static after:!text-base`}
            >
              <ArrowLeftSlider />
            </button>
            <button
                 onClick={() => swiper.slideNext()}
              type="button"
              className={`swiper-button-next bg-white rounded-r-lg !static after:!text-base`}
            >
              <ArrowRightSlider />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
