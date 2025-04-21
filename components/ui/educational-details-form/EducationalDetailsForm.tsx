"use client";
import React from "react";
import { Typography } from "../../typography/Typography";
import BaseInput from "../../base-input/BaseInput";
import Button from "../../base-button/Button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import DateInput from "../../date-input/DateInput";
import { AddIcon } from "../../icons/icons";
import FileUpload from "../../file-upload/FileUpload";

const EducationalDetailsForm = () => {
  const router = useRouter();

  return (
    <div className="py-10">
      <Typography
        variant="body"
        size="md"
        weight="medium"
        className="text-textPrimary"
      >
        Educational details <span className="text-red-500">*</span>
      </Typography>
      <Typography
        variant="body"
        size="sm"
        className="text-checkedRadio opacity-70"
      >
        Fill in your personal information.
      </Typography>
      <div className="mt-6">
        <div className="flex  flex-col items-center gap-6">
          <BaseInput
            label="Enter school & University"
            placeholder="Enter school & University..."
          />
          <div className="flex gap-6 w-full">
            <DateInput placeholder="dd/mm/yyyy" label="Start date" />
            <DateInput placeholder="dd/mm/yyyy" label="End date" />
          </div>
        </div>
        <button className="flex items-center gap-2 my-6">
          <AddIcon />
          <Typography variant="body" size="sm" className="text-secondaryText">
            Add another institution
          </Typography>
        </button>
        <FileUpload label="Upload diploma" filesLabel="Certificates" />
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="bg-inputBg py-1.5 px-3 rounded-md hover:bg-inputBg/10">
          <Typography
            variant="body"
            size="sm"
            weight="medium"
            className="text-primary"
          >
            Cancel
          </Typography>
        </button>
        <div className="flex items-center gap-3">
          <button className="border border-borderColor py-1.5 px-3 rounded-md">
            <Typography
              variant="body"
              size="sm"
              weight="medium"
              className="text-primary"
            >
              Skip
            </Typography>
          </button>
          <Button
            className="flex gap-2 items-center px-3 !py-1.5 !w-fit"
            onClick={() => {
              router.push("/dashboard/universities");
            }}
          >
            <Typography
              variant="body"
              size="sm"
              weight="medium"
              className="text-white"
            >
              Save changes & next
            </Typography>
            <ArrowRight width={18} height={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EducationalDetailsForm;
