import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import mediterraneanMeal from "@/assets/meal-mediterranean.jpg";
import indianMeal from "@/assets/meal-indian.jpg";
import asianMeal from "@/assets/meal-asian.jpg";
import latinMeal from "@/assets/meal-latin.jpg";

const meals = [
  {
    name: "Mediterranean Chicken Bowl",
    image: mediterraneanMeal,
    cuisine: "Mediterranean",
    description: "Grilled chicken, quinoa, hummus, fresh vegetables, olives, and feta cheese.",
    dietary: ["Gluten-Free", "High Protein"],
    calories: 520,
    rating: 4.8,
    cultural: "Inspired by traditional Greek and Lebanese flavors, combining lean protein with healthy fats.",
  },
  {
    name: "Butter Chicken Masala",
    image: indianMeal,
    cuisine: "Indian",
    description: "Tender chicken in rich tomato cream sauce with basmati rice and naan.",
    dietary: ["Halal"],
    calories: 580,
    rating: 4.9,
    cultural: "A beloved North Indian classic, featuring aromatic spices and creamy tomato-based curry.",
  },
  {
    name: "Asian Tofu Stir-Fry",
    image: asianMeal,
    cuisine: "Asian",
    description: "Crispy tofu, colorful vegetables, brown rice with sesame-ginger sauce.",
    dietary: ["Vegan", "Vegetarian"],
    calories: 480,
    rating: 4.7,
    cultural: "A plant-based fusion of Chinese and Thai cooking techniques with bold flavors.",
  },
  {
    name: "Latin Burrito Bowl",
    image: latinMeal,
    cuisine: "Latin American",
    description: "Black beans, cilantro-lime rice, grilled peppers, avocado, and fresh salsa.",
    dietary: ["Vegetarian", "Gluten-Free"],
    calories: 510,
    rating: 4.8,
    cultural: "A vibrant blend of Mexican and Central American ingredients with fresh, zesty flavors.",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">This Week's Menu</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            8-10 rotating options every week. Every meal includes veggies, protein, and grains.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {meals.map((meal) => (
            <div
              key={meal.name}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-semibold text-sm">{meal.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary" className="mb-2">
                    {meal.cuisine}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{meal.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {meal.dietary.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {meal.calories} calories
                </div>
                <p className="text-xs text-muted-foreground italic border-t border-border pt-3">
                  {meal.cultural}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
