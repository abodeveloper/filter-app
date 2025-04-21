import Footer from "@/components/ui/footer/Footer";
import Hero from "@/components/hero/Hero";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
// import TrackYourApplication from "@/components/track-your-application/TrackYourApplication";
import Quote from "@/components/quote/Quote";
import Contact from "@/components/contact/Contact";
import Header from "./ui/header/Header";
import CompanyLogos from "./ui/company-logos/CompanyLogos";
import VisaSupport from "./ui/visa-support/VisaSupport";
// import ChoosePlan from "./ui/choose-plan/ChoosePlan";
import ExploreUniversities from "./ui/explore-universitites/ExploreUniversities";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CompanyLogos />
      <ExploreUniversities />
      {/* <VisaSupport /> */}
      <WhyChooseUs />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
