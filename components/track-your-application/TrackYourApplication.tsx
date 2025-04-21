"use client";
import Link from "next/link";
import Container from "../container/Container";
import { Typography } from "../typography/Typography";
import Image from "next/image";
import useWindowSize from "@/public/hooks/useWindowSize";

const TrackYourApplication = () => {
  const { width } = useWindowSize();
  return (
    <div>
      <div className="xl:py-[239px] relative">
        <Container>
          <div className="flex flex-col items-center text-center gap-12 xl:flex-row xl:items-start">
            <div>
              <Typography
                variant="body"
                size="sm"
                className="text-textBrand mb-4 text-center xl:text-left"
                weight="medium"
                data-aos="fade-right"
              >
                Automation
              </Typography>
              <Typography
                as="h1"
                variant="headline"
                size="md"
                weight="bold"
                className="max-w-[570px] text-[36px] lg:text-[48px] w-full mt-8 text-textPrimary text-center xl:text-left"
                data-aos="fade-right"
              >
                Track Your Application Journey
              </Typography>
              <Typography
                variant="body"
                size="md"
                as="p"
                className="max-w-[400px] w-full text-textSecondary mt-4 text-center xl:text-left"
                data-aos="fade-right"
              >
                Stay updated at every step of your study abroad process. From
                profile creation to visa approval, we&apos;ve got you covered.
              </Typography>
              <div
                data-aos="zoom-in-up"
                className="hidden lg:flex items-center justify-center xl:justify-normal gap-2 pt-8"
              >
                <Link
                  href="/get-started"
                  className="bg-primaryBlue text-white py-2 px-3 rounded-full"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="bg-white rounded-full border border-borderGray py-1.5 px-4"
                >
                  Contact
                </Link>
              </div>
            </div>

            <Image
              src={
                width >= 1280
                  ? "/images/2ndBrowser.png"
                  : "/images/BrowserXL.png"
              }
              width={683}
              height={700}
              alt="browser"
              className={
                width >= 1280
                  ? "absolute top-1/2 right-0  transform -translate-y-1/2"
                  : "w-full"
              }
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TrackYourApplication;
