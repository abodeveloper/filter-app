import React from "react";
import { BlackDotIcon, CheckIcon } from "../icons/icons";
import { Typography } from "../typography/Typography";

interface Step {
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

interface StepperProps {
  steps: Step[];
}

export function Stepper({ steps }: StepperProps) {
  return (
    <div className="w-full mx-auto py-6">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step.title} className="flex-1">
            <div
              className={`relative flex flex-col ${
                index === 0
                  ? "items-start"
                  : index === 1
                  ? "items-center"
                  : "items-end"
              }`}
            >
              {index === 0 ? (
                <div
                  className={`absolute left-[10%] top-[15px] h-[2px] w-[135%] bg-gray-200`}
                />
              ) : null}
              {index === 2 ? (
                <div
                  className={`absolute right-[10%] top-[15px] h-[2px] w-[135%] bg-gray-200`}
                />
              ) : null}

              <div
                className={`relative z-10 flex h-8 w-8 items-center justify-center`}
              >
                {step.status === "completed" ? (
                  <CheckIcon />
                ) : step.status === "current" ? (
                  <BlackDotIcon />
                ) : (
                  <BlackDotIcon fill="#D4D4D4" />
                )}
              </div>

              <div
                className={`mt-4 ${
                  index === 0
                    ? "text-left"
                    : index === 1
                    ? "text-center"
                    : "text-right"
                } justify-start`}
              >
                <Typography
                  variant="body"
                  size="md"
                  weight="medium"
                  className="text-dark"
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body"
                  size="sm"
                  weight="regular"
                  className="text-secondaryText"
                >
                  {step.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
