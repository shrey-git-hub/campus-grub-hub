import { Smartphone, Calendar, MapPin, Utensils } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Browse & Order",
    description: "Choose from 8-10 weekly meal options via our app or website. Takes less than 2 minutes.",
  },
  {
    icon: Calendar,
    title: "We Prepare",
    description: "Order by Sunday, we prepare Monday, and deliver Tuesday morning by 10am.",
  },
  {
    icon: MapPin,
    title: "Smart Locker Pickup",
    description: "Get notified when ready. Scan QR code at your chosen campus locker. Open 24/7.",
  },
  {
    icon: Utensils,
    title: "Heat & Enjoy",
    description: "Just 5 minutes to heat. Every meal includes veggies, protein, and grains.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From order to eating in 4 simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-medium">
                {index + 1}
              </div>
              <div className="mb-6 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
