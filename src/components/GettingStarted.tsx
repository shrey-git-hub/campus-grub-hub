import { UserPlus, Search, CreditCard, Package, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Sign Up",
    description: "Download app or visit website",
    details: ["Create account (2 minutes)", "Set dietary preferences", "Choose preferred locker location"],
  },
  {
    number: 2,
    icon: Search,
    title: "Browse & Order",
    description: "Check this week's menu",
    details: ["Pick your meals", "Choose subscription plan", "Select pickup day"],
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Pay",
    description: "Add payment method",
    details: ["Use promo: FIRST20 (20% off)", "Confirm order", "Get confirmation email"],
  },
  {
    number: 4,
    icon: Package,
    title: "Get Your Meals",
    description: "Wait for notification",
    details: ["Go to your locker", "Scan QR code", "Enjoy!"],
  },
  {
    number: 5,
    icon: Star,
    title: "Rate & Repeat",
    description: "Tell us what you think",
    details: ["Earn credits for feedback", "Vote on future meals", "Order again next week"],
  },
];

export default function GettingStarted() {
  return (
    <section className="py-20 md:py-32 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Getting Started is Easy</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            From sign-up to eating in 5 simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-primary-foreground/15 transition-all"
            >
              <div className="mb-4 w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <step.icon className="w-7 h-7" />
              </div>
              <div className="text-3xl font-bold mb-2 opacity-60">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm opacity-80 mb-4">{step.description}</p>
              <ul className="space-y-1 text-xs opacity-75">
                {step.details.map((detail, idx) => (
                  <li key={idx}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            variant="secondary"
            size="lg"
            className="text-lg shadow-strong"
          >
            Start Your First Order
          </Button>
          <p className="mt-4 text-sm opacity-80">
            Use code <span className="font-bold">FIRST20</span> for 20% off your first order
          </p>
        </div>
      </div>
    </section>
  );
}
