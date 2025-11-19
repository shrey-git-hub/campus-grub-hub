import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">CampusEats</h3>
            <p className="opacity-80 mb-4">
              Healthy, affordable meals made for student life at Northeastern University.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#features");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Our Meals
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#pricing");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#how-it-works");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#faq");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Delivery Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Allergen Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Get in Touch</h4>
            <div className="space-y-3 opacity-80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@campuseats.com" className="hover:text-primary transition-colors">
                  hello@campuseats.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:617-XXX-XXXX" className="hover:text-primary transition-colors">
                  (617) XXX-XXXX
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a href="#" className="hover:text-primary transition-colors">
                  @CampusEatsNU
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center opacity-80">
          <p>&copy; 2024 CampusEats. Made by Northeastern students, for Northeastern students.</p>
        </div>
      </div>
    </footer>
  );
}
