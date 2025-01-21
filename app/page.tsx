import AboutUs from "../components/aboutus";
import Speaker from "../components/speaker";
import Partners from "../components/partners";
import FAQSection from "@/components/faq";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col h-full flex-grow overflow-x-hidden">
      <Hero/>
      <AboutUs />
      <Partners/>
      <Speaker />
      <FAQSection/>
    </div>
  );
}
