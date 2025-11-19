import { Recycle, Sprout, Package, TrendingDown } from "lucide-react";

const impacts = [
  {
    icon: Recycle,
    stat: "90%",
    label: "Less Waste",
    description: "Pre-portioned meals mean 90% less food waste vs. grocery shopping",
  },
  {
    icon: Sprout,
    stat: "100%",
    label: "Local Farms",
    description: "We partner with local farms to reduce shipping and support community",
  },
  {
    icon: Package,
    stat: "Reusable",
    label: "Packaging",
    description: "Recyclable and compostable containers, plus reusable delivery bags",
  },
  {
    icon: TrendingDown,
    stat: "60%",
    label: "Lower CO₂",
    description: "Centralized prep and campus delivery = smaller carbon footprint",
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Better for the Planet</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every meal you order makes a positive environmental impact
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {impacts.map((impact) => (
            <div
              key={impact.label}
              className="bg-card rounded-2xl p-8 shadow-soft text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <impact.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{impact.stat}</div>
              <div className="text-lg font-semibold mb-3">{impact.label}</div>
              <p className="text-sm text-muted-foreground">{impact.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Track Your Impact</h3>
          <p className="text-muted-foreground mb-6">
            See how much waste you've saved, your environmental impact metrics, and earn badges 
            for sustainable choices. Join other students making a difference.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">12 lbs</div>
              <div className="text-sm text-muted-foreground">Waste Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">45 kg</div>
              <div className="text-sm text-muted-foreground">CO₂ Reduced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">18</div>
              <div className="text-sm text-muted-foreground">Meals Eaten</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
