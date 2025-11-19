import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Light",
    meals: 2,
    price: "$16-24",
    perWeek: "per week",
    features: [
      "2 meals per week",
      "All dietary options",
      "24/7 locker access",
      "Skip or pause anytime",
      "20% off first order",
    ],
    popular: false,
  },
  {
    name: "Standard",
    meals: 3,
    price: "$24-36",
    perWeek: "per week",
    features: [
      "3 meals per week",
      "All dietary options",
      "24/7 locker access",
      "Skip or pause anytime",
      "20% off first order",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Heavy",
    meals: 5,
    price: "$40-60",
    perWeek: "per week",
    features: [
      "5 meals per week",
      "All dietary options",
      "24/7 locker access",
      "Skip or pause anytime",
      "20% off first order",
      "Priority support",
      "Extra protein options",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle. No commitment, cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-primary text-primary-foreground shadow-strong scale-105"
                  : "bg-card shadow-soft hover:shadow-medium"
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-1">{plan.price}</div>
                <div className={`text-sm ${plan.popular ? "opacity-90" : "text-muted-foreground"}`}>
                  {plan.perWeek}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className={plan.popular ? "" : "text-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "secondary" : "default"}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-12">
          Use code <span className="font-semibold text-primary">FIRST20</span> for 20% off your first order
        </p>
      </div>
    </section>
  );
}
