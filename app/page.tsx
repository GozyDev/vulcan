import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Feautures from "@/components/Feautures";
import HomepageHero from "@/components/HomepageHero";
import ImageSlide from "@/components/ImageSlide";
import Insite from "@/components/Insite";
import Support from "@/components/Support";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <HomepageHero />
      <ImageSlide />
      <Feautures />
      <Support />
      <Insite />
      <Testimonial />
      <Faq />
      <CTA />
    </>
  );
}
