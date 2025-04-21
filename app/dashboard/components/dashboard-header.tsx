"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/container/Container";
import { KopruBlack } from "@/components/icons/icons";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    Cookies.remove("authToken");
    router.push("/");
  };

  return (
    <div className="bg-heroBg border border-b-headerBorderB relative">
      <Container>
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-2 lg:gap-6">
            <Link href="/">
              <KopruBlack />
            </Link>
          </div>

          {/* Desktop CTA */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/dashboard/profile"
              className={`${
                pathname === "/dashbord/profile"
                  ? "bg-inputBg text-primary"
                  : ""
              }text-textSecondary font-medium hover:text-primary transition-color`}
            >
              Profile
            </Link>
            <Link
              href="/dashboard/educational-details"
              className={`${
                pathname === "/dashbord/profile"
                  ? "bg-inputBg text-primary"
                  : ""
              }text-textSecondary font-medium hover:text-primary transition-color`}
            >
              Application
            </Link>
            <Link
              href="/dashboard/universities"
              className={`${
                pathname === "/dashbord/profile"
                  ? "bg-inputBg text-primary"
                  : ""
              }text-textSecondary font-medium hover:text-primary transition-color`}
            >
              Universities
            </Link>
            <button
              className={`${
                pathname === "/dashbord/profile"
                  ? "bg-inputBg text-primary"
                  : ""
              }text-textSecondary font-medium hover:text-primary transition-colors`}
              onClick={handleLogout}
            >
              Log out
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[73px] bg-white lg:hidden transition-all duration-300 ease-in-out z-50",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <Container>
          <nav className="flex flex-col py-4 space-y-4">
            <Link
              href="/dashboard/profile"
              className="text-textSecondary font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/dashboard/educational-details"
              className="text-textSecondary font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Application
            </Link>
            <Link
              href="/dashboard/universities"
              className="text-textSecondary font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Universities
            </Link>
            <div className=" pt-4 px-4">
              <div className="flex flex-col space-y-4">
                <button
                  className={`text-left text-textSecondary font-medium hover:text-primary transition-colors`}
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default DashboardHeader;
