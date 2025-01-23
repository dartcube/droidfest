import AboutUs from "../components/aboutus";
import Speaker from "../components/speaker";
import Partners from "../components/partners";
import FAQSection from "@/components/faq";
import Hero from "@/components/Hero";
import VectorLayer from "@/components/VectorLayer";
import Timeline from '@/components/Timeline';
import Footer from "@/components/footer";
import Team from "@/components/team/team";

export default function Home() {
  return (
    <div className="flex flex-col h-full flex-grow overflow-x-hidden overflow-y-hidden">
      <VectorLayer />
      <Hero />
      <AboutUs />
      <Timeline/>
      <Partners/>
      {/* <Speaker /> */}
      <Team />
      <FAQSection />
      <Footer />
    </div>
  );
}
