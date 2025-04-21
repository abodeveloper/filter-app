"use client";
import React, { useState } from "react";
import { Typography } from "../typography/Typography";

const FaculitiesCard = () => {
  const [degree, setDegree] = useState<string>("Bachelor");

  return (
    <div className="bg-[#F7F7F7] p-4 w-full rounded-lg h-fit">
      <Typography variant="body" size="md" weight="semi-bold">
        Faculities
      </Typography>
      <div className="flex bg-[#0A0A0A0A] w-full rounded-md mt-4">
        <button
          onClick={() => setDegree("Bachelor")}
          className={`py-1 ${
            degree === "Bachelor" ? "bg-white" : ""
          } rounded-md border border-borderColor w-full`}
        >
          <Typography variant="body" size="sm" weight="medium">
            Bachelor
          </Typography>
        </button>
        <button
          onClick={() => setDegree("Master")}
          className={`py-1 ${
            degree === "Master" ? "bg-white" : ""
          } rounded-md border border-borderColor w-full`}
        >
          <Typography variant="body" size="sm" weight="medium">
            Master
          </Typography>
        </button>
      </div>
      <div className="bg-white mt-3 p-4 rouned-lg">
        <Typography variant="body" size="sm" weight="medium" className="mb-3">
          Requirements
        </Typography>
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-1 border-b border-dashed border-[#0A0A0A] border-opacity-15 pb-3">
            <div>
              <Typography variant="body" size="sm" weight="medium">
                Faculty name
              </Typography>
              <Typography variant="body" size="sm" weight="light">
                Some description text.
              </Typography>
            </div>
            <button className="hover:opacity-80 border border-borderGray rounded-full py-1 px-3">
              <Typography variant="body" size="sm">
                Apply for review
              </Typography>
            </button>
          </div>

          <div className="flex items-baseline justify-between gap-1 border-b border-dashed border-[#0A0A0A] border-opacity-15 pb-3">
            <div>
              <Typography variant="body" size="sm" weight="medium">
                Faculty name
              </Typography>
              <Typography variant="body" size="sm" weight="light">
                Some description text.
              </Typography>
            </div>
            <button className="hover:opacity-80 border border-borderGray rounded-full py-1 px-3">
              <Typography variant="body" size="sm">
                Apply for review
              </Typography>
            </button>
          </div>

          <div className="flex items-baseline justify-between gap-1 border-b border-dashed border-[#0A0A0A] border-opacity-15 pb-3">
            <div>
              <Typography variant="body" size="sm" weight="medium">
                Faculty name
              </Typography>
              <Typography variant="body" size="sm" weight="light">
                Some description text.
              </Typography>
            </div>
            <button className="hover:opacity-80 border border-borderGray rounded-full py-1 px-3">
              <Typography variant="body" size="sm">
                Apply for review
              </Typography>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaculitiesCard;
