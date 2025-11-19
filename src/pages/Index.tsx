import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AppFeatures from "@/components/AppFeatures";
import Pricing from "@/components/Pricing";
import PaymentInfo from "@/components/PaymentInfo";
import Locations from "@/components/Locations";
import About from "@/components/About";
import Community from "@/components/Community";
import Sustainability from "@/components/Sustainability";
import SafetyQuality from "@/components/SafetyQuality";
import Support from "@/components/Support";
import FAQ from "@/components/FAQ";
import GettingStarted from "@/components/GettingStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Menu />
      <HowItWorks />
      <Features />
      <AppFeatures />
      <Pricing />
      <PaymentInfo />
      <Locations />
      <About />
      <Community />
      <Sustainability />
      <SafetyQuality />
      <Support />
      <FAQ />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default Index;
