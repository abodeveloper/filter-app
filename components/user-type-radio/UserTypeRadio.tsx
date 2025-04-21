"use client";
import { useState } from "react";
import { Checked, Unchecked } from "../icons/icons";

const UserTypeRadio = () => {
  const [userType, setUserType] = useState<"student" | "visa">("student");
  return (
    <div className="border border-borderColor rounded-lg ">
      <button
        onClick={() => setUserType("student")}
        className={`flex gap-3 w-full py-3 px-4 rounded-t-lg ${
          userType === "student"
            ? "bg-gray-100 border-2 border-checkedRadio"
            : ""
        }`}
      >
        {userType === "student" ? <Checked /> : <Unchecked />}

        <div>
          <p className="font-medium text-dark text-left">I&apos;m a student</p>
          <p className="text-secondaryText opacity-70 mt-1 text-left">
            I&apos;m looking at universities.
          </p>
        </div>
      </button>
      <button
        onClick={() => setUserType("visa")}
        className={`flex gap-3 w-full py-3 px-4 rounded-b-lg ${
          userType === "visa" ? "bg-gray-100 border-2 border-checkedRadio" : ""
        }`}
      >
        {userType === "visa" ? <Checked /> : <Unchecked />}

        <div>
          <p className="font-medium text-dark text-left">I need Visa</p>
          <p className="text-secondaryText opacity-70 mt-1 text-left">
            I need a visa for work.
          </p>
        </div>
      </button>
    </div>
  );
};

export default UserTypeRadio;
