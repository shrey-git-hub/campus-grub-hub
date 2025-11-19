import { Globe, Leaf, Clock, ShieldCheck, Coins, Users } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Flavors",
    description: "Rotating themes from Indian, Asian, Mediterranean, Latin American, and Middle Eastern cuisines.",
  },
  {
    icon: Leaf,
    title: "Dietary Friendly",
    description: "40% vegetarian, vegan options, gluten-free, and halal-certified meats available.",
  },
  {
    icon: Clock,
    title: "5-Minute Meals",
    description: "Pre-portioned, ready-to-eat meals. Just heat and enjoy in under 5 minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Fresh ingredients, no preservatives, full nutritional info, and allergen labels.",
  },
  {
    icon: Coins,
    title: "Student Budget",
    description: "$8-12 per meal. More affordable than takeout, less waste than grocery shopping.",
  },
  {
    icon: Users,
    title: "Flexible Plans",
    description: "No commitment. Skip weeks, pause during breaks, or cancel anytime with no penalties.",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why CampusEats?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Made for student life - affordable, healthy, and hassle-free
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all group"
            >
              <div className="mb-6 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
