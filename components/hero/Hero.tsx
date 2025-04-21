"use client";
import Container from "../container/Container";
import { YCombinatorLogo } from "../icons/icons";
import { Typography } from "../typography/Typography";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-heroBg py-[60px] lg:py-[144px] relative rounded-bl-[33px] rounded-br-[33px]">
      <Container>
        <div className="flex flex-col items-center align-center w-full lg:flex-row justify-center gap-12 lg:gap-4">
          <div className="flex-col items-center justify-center w-full lg:w-2/3">
            {/* <div
              data-aos="fade-right"
              className="flex items-center text-center justify-center gap-1.5 bg-secondaryGreen rounded-full w-fit py-1.5 px-3 border mx-auto lg:mx-0"
            >
              <Typography
                className="text-primaryGreen text-center"
                weight="bold"
                variant="body"
                size="xs"
              >
                Backed by
              </Typography>
              <YCombinatorLogo />

              <Typography
                className="text-primaryGreen"
                weight="bold"
                variant="body"
                size="xs"
              >
                botM
              </Typography>
            </div> */}
            <Typography
              as="h1"
              variant="headline"
              size="lg"
              weight="bold"
              data-aos="fade-right"
              className="max-w-[570px] mx-auto lg:mx-0 text-[40px] lg:text-[48px] text-center lg:text-left w-full mt-8 text-textPrimary"
            >
              Toza suv – sog‘lom hayot! 💧
            </Typography>
            <Typography
              variant="body"
              size="md"
              data-aos="fade-right"
              className="max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left w-full text-textSecondary mt-4"
            >
              Suvingiz yetarlicha toza ekanligiga ishonchingiz komilmi? Bizning
              ilg‘or filtrlash texnologiyamiz bilan xavfsiz va tiniq ichimlik
              suviga ega bo‘ling!
            </Typography>
            <button
              data-aos="zoom-in"
              className="mx-auto lg:mx-0 flex text-center bg-informativePrimary py-2 px-3 rounded-full shadow-informativePrimaryBtn mt-8"
            >
              <Typography variant="body" size="sm" className="text-white">
                Bepul konsultatsiya olish
              </Typography>
            </button>
          </div>
          <iframe
            width="622"
            height="352"
            src="https://www.youtube.com/embed/c-hKSbzooAg"
            title="My Biggest Tutorial Ever (Build A FULL Google Drive Clone with React, Next, TypeScript and more)"
            // frameborder="0"
            className="w-full lg:w-1/2"
            data-aos="zoom-in-up"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
        </div>
      </Container>
      <Image
        src="/images/hero-bottom.png"
        alt="pattern"
        width={1000}
        height={1000}
        className="w-full absolute bottom-0"
      />
    </div>
  );
};

export default Hero;
