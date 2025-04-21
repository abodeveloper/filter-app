import Button from "@/components/base-button/Button";
import { VoyagerLogo } from "@/components/icons/icons";
import UserTypeRadio from "@/components/user-type-radio/UserTypeRadio";
import Image from "next/image";
import Link from "next/link";

const UserType = () => {
  return (
    <div className="flex items-center justify-center h-screen align-middle">
      <div className="w-1/2 xl:w-5/12 flex flex-col justify-center items-center">
        <div className="max-w-96 w-full">
          <div className="mb-16">
            <VoyagerLogo />
            <h1 className="text-3xl font-bold mt-6 mb-2 text-dark">
              Welcome to Voyager
            </h1>
            <p className="w-4/5 text-secondaryText text-sm">
              Please, complete a few steps before submitting your application.
            </p>
          </div>
          <UserTypeRadio />
          <Link href="/login">
            <Button className="mt-6">Continue</Button>
          </Link>

          <div className="mt-6">
            <span className="text-checkedRadio opacity-45 mr-2">
              Already registered?
            </span>
            <a
              href="/login"
              className="text-checkedRadio opacity-75 border-b-2 border-b-borderColor"
            >
              Sign in here
            </a>
          </div>
        </div>
      </div>
      <Image
        src="/images/students.jpg"
        alt="user-type"
        // layout="object-fit"
        className="hidden lg:flex w-1/2 xl:w-7/12 h-screen object-cover"
        width={6000}
        height={4000}
      />
    </div>
  );
};

export default UserType;
