import { Wallet, Calendar, TrendingUp, QrCode, Share2, Users2 } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Budget Tracker",
    description: "See exactly how much you're saving compared to takeout and dining hall meals.",
  },
  {
    icon: Calendar,
    title: "Calendar Sync",
    description: "App knows when you have finals week and can automatically pause your subscription.",
  },
  {
    icon: TrendingUp,
    title: "Nutrition Dashboard",
    description: "Track your eating habits, calories, and protein intake over time.",
  },
  {
    icon: QrCode,
    title: "One-Tap Pickup",
    description: "QR code locker access. Scan and grab your meals in seconds.",
  },
  {
    icon: Share2,
    title: "Social Sharing",
    description: "Share meal photos, join cooking clubs, and connect with other foodies on campus.",
  },
  {
    icon: Users2,
    title: "Roommate Mode",
    description: "Split costs automatically, coordinate pickup times, and order different meals for different diets.",
  },
];

export default function AppFeatures() {
  return (
    <section id="app-features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Smart App Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than just ordering - tools to help you eat better and save money
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
