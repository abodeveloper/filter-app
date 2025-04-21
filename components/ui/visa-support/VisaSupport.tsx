import Image from "next/image";
import Container from "../../container/Container";
import { BeachIcon, Graduation } from "../../icons/icons";
import ItemCard from "../../item-card/ItemCard";
import { Typography } from "../../typography/Typography";

const VisaSupport = () => {
  return (
    <Container>
      <div className="my-20 flex justify-center items-center">
        <div className="max-w-[540px] w-full text-center ">
          <Typography
            variant="body"
            size="sm"
            className="text-textBrand"
            weight="medium"
          >
            Automation
          </Typography>
          <Typography
            variant="headline"
            size="md"
            weight="semi-bold"
            className="text-[36px] lg:text-[48px]"
          >
            Eng yaxshi suv filtrini topish oson!
          </Typography>
          <Typography
            variant="body"
            size="md"
            as="p"
            className="text-textSecondary mt-4"
          >
            Dunyodagi yetakchi brendlarning suv filtrlari bir joyda! Bizning
            do‘konimizda sifatli va ishonchli filtrlardan tanlang, o‘z
            ehtiyojingizga mosini toping va xavfsiz suvdan bahramand bo‘ling.
          </Typography>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <ItemCard
          icon={<BeachIcon />}
          title="Sifatli suv, sog‘lom hayot!"
          desc="Step-by-step guidance for preparing, submitting, and optimizing your visa application, ensuring accuracy and compliance."
          className="border border-gray-200 rounded-3xl bg-[#F4F9FF]"
          titleClassName="text-[#32629C]"
          animation="fade-right"
        />
        <ItemCard
          icon={<Graduation />}
          title="Student Visa"
          desc="Stay informed with instant updates on your application status, giving you peace of mind at every stage."
          className="border border-gray-200 rounded-3xl bg-[#F7FFF4]"
          titleClassName="text-[#3A9A16]"
          animation="zoom-in-up"
        />
        <ItemCard
          icon={
            <Image
              src="/images/business_visa.png"
              alt="business-visa"
              width={64}
              height={61}
              unoptimized
            />
          }
          title="Business Visa"
          desc="Get personalized advice and reliable support from professionals dedicated to making your visa journey seamless."
          className="border border-gray-200 rounded-3xl bg-[#FBF4FF]"
          titleClassName="text-[#7D39A5]"
          animation="fade-left"
        />
      </div>
    </Container>
  );
};

export default VisaSupport;
