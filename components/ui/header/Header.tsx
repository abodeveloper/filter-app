"use client";

import { cn } from "@/lib/utils";
import Cookies from "js-cookie";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../../container/Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-heroBg border border-b-headerBorderB relative">
      <Container>
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-2 lg:gap-6">
            <Link href="/">
              <img src="/images/the-filter.svg" alt="logo" className="w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="#product"
                className="text-textSecondary font-medium hover:text-primary transition-colors"
              >
                Mahsulot
              </Link>
              <Link
                href="#faq"
                className="text-textSecondary font-medium hover:text-primary transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Desktop CTA */}
          {/* <div className="hidden lg:flex items-center gap-3.5">
            <Link
              href="/downloads"
              className="text-textSecondary font-medium border-r border-r-borderGray pr-3.5 hover:text-primary transition-colors"
            >
              Downloads
            </Link>
            {isClient && window !== undefined && !Cookies.get("authToken") ? (
              <>
                <Link
                  href="/login"
                  className="text-textSecondary font-medium hover:text-primary transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="bg-white px-4 py-2 rounded-md border border-borderGray hover:bg-gray-50 transition-colors"
                >
                  Register
                </Link>
              </>
            ) : (
              <Link href="/dashboard/create-account">Dashboard</Link>
            )}
          </div> */}

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
          "fixed inset-x-0 top-[73px] bg-white border-b border-b-headerBorderB lg:hidden transition-all duration-300 ease-in-out z-50",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <Container>
          <nav className="flex flex-col py-4 space-y-4">
            <Link
              href="/"
              className="text-textSecondary font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="#pricing"
              className="text-textSecondary font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#integrations"
              className="text-textSecondary font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link
              href="#company"
              className="text-textSecondary font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Company
            </Link>
            <Link
              href="#blog"
              className="text-textSecondary font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="border-t border-gray-200 pt-4 px-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/downloads"
                  className="text-textSecondary font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Downloads
                </Link>
                <Link
                  href="/login"
                  className="text-textSecondary font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="bg-white px-4 py-2 rounded-md border border-borderGray hover:bg-gray-50 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default Header;
