import { Heart, Target, Leaf, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Student-First",
    description: "Everything we do is designed around student life - your budget, your schedule, your needs.",
  },
  {
    icon: Target,
    title: "Quality Always",
    description: "Fresh ingredients, no preservatives, real food. We eat these meals ourselves.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Less waste, better planet. Every meal makes a difference.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by students, for students. Your feedback shapes our menu.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
          <div className="text-lg text-muted-foreground space-y-4">
            <p>
              We're Northeastern grad students who got tired of the same old problems: 
              spending too much on takeout, wasting groceries, eating unhealthy food, 
              and never having time to cook.
            </p>
            <p>
              Sound familiar? We thought so. That's why we created CampusEats - 
              affordable, healthy meals made specifically for student life.
            </p>
            <p className="text-xl font-semibold text-foreground mt-8">
              Our Mission: Help students eat healthy, save money, and stress less about food.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
