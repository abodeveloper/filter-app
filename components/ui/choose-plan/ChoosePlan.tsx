import React from "react";
import Container from "../../container/Container";
import { Typography } from "../../typography/Typography";
import TariffCard from "./TariffCard";

const ChoosePlan = () => {
  return (
    <div className="bg-[#EEF6FF] py-20">
      <Container>
        <div className="my-20 flex justify-center items-center">
          <div className="max-w-[540px] w-full text-center ">
            <Typography
              variant="body"
              size="sm"
              className="text-textBrand"
              weight="medium"
            >
              Pricing
            </Typography>
            <Typography
              variant="headline"
              size="md"
              weight="semi-bold"
              className="text-[36px] lg:text-[48px]"
            >
              Choose Your Plan
            </Typography>
            <Typography
              variant="body"
              size="md"
              as="p"
              className="text-textSecondary mt-4"
            >
              Our plans are designed to fit your needs, providing the perfect
              balance of value and support.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 justify-center h-full">
          <TariffCard
            title="Basic"
            descArray={[
              "Basic Visa Application Assistance",
              "Transparent Progress Tracking",
              "Personalized Notifications",
              "Email Support",
            ]}
            tariffPlan="basic"
            price="$99"
            secondaryText="Get Started with Basic"
            animation="fade-right"
          />
          <TariffCard
            title="Pro"
            descArray={[
              "Full Visa Application Guidance",
              "Transparent Progress Tracking",
              "Personalized Notifications",
              "24/7 Priority Support Access",
              "Direct Consultation with Experts",
              "Exclusive Resource Library",
            ]}
            tariffPlan="pro"
            price="$199"
            secondaryText="Unlock Premium Support"
            animation="fade-left"
          />
        </div>
      </Container>
    </div>
  );
};

export default ChoosePlan;
