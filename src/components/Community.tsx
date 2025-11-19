import { Gift, Award, MessageCircle, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Gift,
    title: "Referral Program",
    description: "Refer a friend and you both get $5 credit. The more friends, the more free meals!",
    cta: "Start Referring",
  },
  {
    icon: Award,
    title: "Student Ambassadors",
    description: "Become a campus ambassador. Get free meals, exclusive perks, and shape our menu.",
    cta: "Apply Now",
  },
  {
    icon: MessageCircle,
    title: "Cooking Clubs",
    description: "Join monthly virtual or in-person cooking events. Learn recipes and meet fellow foodies.",
    cta: "Join Club",
  },
  {
    icon: Vote,
    title: "Vote on Meals",
    description: "Your voice matters! Vote on which meals return and suggest new dishes you want to try.",
    cta: "Cast Vote",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            CampusEats is more than meals - it's a community of students eating better together
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all"
            >
              <div className="mb-6 w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center">
                <program.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
              <p className="text-muted-foreground mb-6">{program.description}</p>
              <Button variant="outline">{program.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
