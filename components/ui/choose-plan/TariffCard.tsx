import React from "react";
import { Typography } from "../../typography/Typography";
import { Check } from "../../icons/icons";

const TariffCard = ({
  className,
  descArray,
  title,
  tariffPlan,
  price,
  secondaryText,
  animation = "zoom-in",
}: {
  className?: string;
  descArray: string[];
  title: string;
  tariffPlan: "basic" | "pro";
  price: string;
  secondaryText: string;
  animation: string;
}) => {
  return (
    <div
      data-aos={animation}
      className={`p-8 ${
        tariffPlan === "basic" ? "bg-white" : "bg-informativePrimary"
      } ${className} sm:max-w-[400px] w-full rounded-[24px]`}
    >
      <h1
        className={`${
          tariffPlan === "basic" ? "text-textPrimary" : "text-white"
        } text-4xl font-bold mb-6`}
      >
        {title}
      </h1>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          {descArray.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check fill={tariffPlan === "basic" ? "#171717" : "#fff"} />
              <Typography
                variant="body"
                size="sm"
                className={
                  tariffPlan === "basic" ? "text-textPrimary" : "text-white"
                }
              >
                {item}
              </Typography>
            </div>
          ))}
        </div>

        <div className="flex-end">
          <h1
            className={`${
              tariffPlan === "basic" ? "text-textPrimary" : "text-white"
            } text-4xl font-bold mb-2 ${
              tariffPlan === "basic" ? "mt-[139px]" : "mt-[72px]"
            }`}
          >
            {price}
          </h1>
          <Typography
            variant="body"
            size="sm"
            className={`${
              tariffPlan === "basic"
                ? "text-[#303030A3]"
                : "text-white opacity-65"
            } mb-6`}
          >
            {secondaryText}
          </Typography>
          <button
            // href="/"
            className={`${
              tariffPlan === "basic"
                ? "bg-informativePrimary text-white"
                : "bg-white text-textPrimary"
            } py-2.5 text-center w-full rounded-full hover:opacity-90`}
          >
            Get Sort UI Kit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TariffCard;
