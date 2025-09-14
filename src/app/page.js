import Banner from "@/components/Banner";
import CarouselOne from "@/components/Carousel";
import CaseStudies from "@/components/CaseStudies";
import OurPlan from "@/components/OurPlan";
import RealCustomers from "@/components/RealCustomers";
import TrustUs from "@/components/TrustUs";



export default function Home() {
  return (
    <div>
      <Banner/>
      <CarouselOne/>
      <TrustUs/>
      <CaseStudies/>
      <OurPlan/>
      <RealCustomers/>

    </div>
  );
}
