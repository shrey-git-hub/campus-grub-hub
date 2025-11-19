import { CreditCard, Smartphone, DollarSign, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const paymentMethods = [
  { name: "Credit/Debit Cards", icon: CreditCard, note: "All major brands accepted" },
  { name: "Apple Pay", icon: Smartphone, note: "One-tap checkout" },
  { name: "Google Pay", icon: Smartphone, note: "Quick & secure" },
  { name: "Venmo", icon: DollarSign, note: "Student favorite" },
  { name: "PayPal", icon: DollarSign, note: "Buyer protection" },
];

export default function PaymentInfo() {
  return (
    <section className="py-12 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Flexible Payment Options</h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="flex items-center gap-3 p-3 bg-card/50 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{method.name}</div>
                      <div className="text-xs text-muted-foreground">{method.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Split with Roommates</h4>
                    <p className="text-sm text-muted-foreground">
                      Built-in split payment feature. Order together, split costs automatically in the app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h4 className="font-semibold mb-3">How Billing Works</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">✓</Badge>
                    <span>Pay weekly or monthly (your choice)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">✓</Badge>
                    <span>Auto-renewal with 48-hour reminder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">✓</Badge>
                    <span>Email receipt after each payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">✓</Badge>
                    <span>Cancel anytime - no fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
