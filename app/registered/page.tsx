import { VerifiedIcon } from "@/components/icons/icons";
import Link from "next/link";
import React from "react";

const Registered = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen align-middle">
      <div className="w-[370px] flex justify-center items-center flex-col">
        <VerifiedIcon />
        <h1 className="text-2xl font-bold mt-6 mb-2 text-dark text-center">
          Your account has been created. You can now log in.
        </h1>
      </div>
      <Link href="/login" className="text-checkedRadio underline">
        Go to login
      </Link>
    </div>
  );
};

export default Registered;
