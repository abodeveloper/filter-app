import React from "react";

const CompanyLogos = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays using backdrop-filter for a pure fade effect */}
        <div className="absolute left-1 top-0 bottom-0 w-36 bg-gradient-to-r from-white via-white to-transparent z-10 mix-blend-overlay opacity-90"></div>
        <div className="absolute right-1 top-0 bottom-0 w-36 bg-gradient-to-l from-white via-white to-transparent z-10 mix-blend-overlay opacity-90"></div>

        {/* Logo container */}
        <div className="overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap  flex items-center justify-between py-16 px-4 space-x-8">
            <img src="/images/logo-1.png" alt="logo" className="w-auto h-12" />
            <img src="/images/logo-2.png" alt="logo" className="w-auto h-12" />
            <img src="/images/logo-3.png" alt="logo" className="w-auto h-12" />
            <img src="/images/logo-4.png" alt="logo" className="w-auto h-12" />
            <img src="/images/logo-5.png" alt="logo" className="w-auto h-12" />
            <img src="/images/logo-1.png" alt="logo" className="w-auto h-12" />
            <img src="/images/logo-2.png" alt="logo" className="w-auto h-12" />
            <img src="/images/logo-3.png" alt="logo" className="w-auto h-12" />
            <img src="/images/logo-4.png" alt="logo" className="w-auto h-12" />
            <img src="/images/logo-5.png" alt="logo" className="w-auto h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
