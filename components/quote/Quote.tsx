import { Fraunces } from "next/font/google";
import Image from "next/image";

const fraunces = Fraunces({ subsets: ["latin"] });

const Quote = () => {
  return (
    <div className="bg-[#161F53] py-36" data-aos="zoom-in">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col gap-10 max-w-[540px] text-center">
          <Image
            src="/images/Avatar.png"
            width={48}
            height={48}
            alt="avatar"
            className="mx-auto"
          />
          <p className={`${fraunces.className} text-white text-2xl`}>
            Ishonchli brendlar filtrlari, tez yetkazib berish va mukammal
            maslahat xizmati! Nima kerakligini bilmayotgan edim, mutaxassislar
            menga eng to‘g‘ri filtrni tanlashga yordam berishdi.
          </p>
          <div>
            <p className="text-sm text-white">Nigora A.</p>
            <p className="text-xs text-white opacity-65 mt-1">Toshkent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
