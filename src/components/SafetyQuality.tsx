import { ShieldCheck, Thermometer, Users2, Award, AlertCircle, CheckCircle } from "lucide-react";

const safetyFeatures = [
  {
    icon: ShieldCheck,
    title: "Health Certified Kitchen",
    description: "Our kitchen is fully certified by the health department with regular inspections.",
  },
  {
    icon: Users2,
    title: "Trained Staff",
    description: "All team members are food safety trained and certified in proper handling procedures.",
  },
  {
    icon: Thermometer,
    title: "Temperature Controlled",
    description: "Meals stay at perfect temperature throughout prep, delivery, and locker storage.",
  },
  {
    icon: Award,
    title: "Fresh Ingredients Only",
    description: "We source quality ingredients daily. Clear expiration dates on every package.",
  },
];

const allergenSafety = [
  {
    icon: AlertCircle,
    title: "Clear Labeling",
    description: "Every meal has prominent allergen warnings and full ingredient lists.",
  },
  {
    icon: CheckCircle,
    title: "Separate Prep Areas",
    description: "We maintain dedicated prep spaces for common allergens to prevent cross-contamination.",
  },
];

export default function SafetyQuality() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Safety & Quality First</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your health and safety are our top priorities. We maintain the highest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {safetyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Allergen Safety</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {allergenSafety.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground bg-muted p-4 rounded-xl">
            <strong className="text-foreground">Have concerns?</strong> Contact us before ordering. 
            We'll provide detailed information about ingredients, preparation methods, and any potential cross-contamination risks.
          </p>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Our Quality Promise</h3>
          <p className="text-muted-foreground">
            We taste-test every recipe. We only use fresh, quality ingredients. 
            If you're not happy with your meal, we'll make it right - guaranteed. 
            Rate your meals honestly and help us improve.
          </p>
        </div>
      </div>
    </section>
  );
}
