import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-meals.jpg";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Student-Friendly Meal Service
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Healthy Meals,{" "}
              <span className="text-primary">Campus Pickup</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Ready-to-eat, culturally diverse meals delivered to smart lockers
              around campus. $8-12 per meal, zero commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="text-lg"
                onClick={() => scrollToSection("#pricing")}
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg"
                onClick={() => scrollToSection("#features")}
              >
                View Features
              </Button>
            </div>
            <div className="flex gap-8 justify-center lg:justify-start text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-primary">8-10</div>
                <div className="text-sm text-muted-foreground">Weekly Options</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$8-12</div>
                <div className="text-sm text-muted-foreground">Per Meal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5min</div>
                <div className="text-sm text-muted-foreground">Heat & Eat</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={heroImage}
              alt="Diverse healthy meals"
              className="relative rounded-3xl shadow-strong w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
