import { MessageSquare, Mail, Phone, Clock, RefreshCw, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const supportOptions = [
  {
    icon: MessageSquare,
    title: "In-App Chat",
    description: "Get instant help during business hours (9am-7pm EST)",
    action: "Start Chat",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "hello@campuseats.com - We respond within 24 hours",
    action: "Send Email",
  },
  {
    icon: Phone,
    title: "Urgent Hotline",
    description: "(617) XXX-XXXX - For lost orders and food quality concerns",
    action: "Call Now",
  },
];

const guarantees = [
  {
    icon: RefreshCw,
    title: "Wrong Order?",
    description: "We'll fix it immediately or credit your account",
  },
  {
    icon: Clock,
    title: "Missed Pickup?",
    description: "Get a full credit if we didn't notify you properly",
  },
  {
    icon: ShieldCheck,
    title: "Quality Issue?",
    description: "Replacement meal or full refund, no questions asked",
  },
];

export default function Support() {
  return (
    <section id="support" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">We're Here to Help</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Questions? Issues? We've got you covered with multiple support channels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {supportOptions.map((option) => (
            <div
              key={option.title}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
                <option.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm">{option.description}</p>
              <Button variant="outline" className="w-full">
                {option.action}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Our Promise to You</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee) => (
              <div key={guarantee.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                  <guarantee.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{guarantee.title}</h4>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-sm">
            Your satisfaction matters. If something goes wrong, we make it right - guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
