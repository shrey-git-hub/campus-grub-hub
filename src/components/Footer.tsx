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
            <p className="text-sm opacity-70">
              Built by students, for students. 🍽️
              <p>&copy; © Website developed and hosted by Shreyas Wankhade © </p>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <a
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#menu");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Our Menu
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
                  href="#locations"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#locations");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#about");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <a
                  href="#sustainability"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#sustainability");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#community");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#support");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Support
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
          <p>&copy; 2025 CampusEats. Made by Northeastern students, for Northeastern students.</p>

        </div>
      </div>
    </footer>
  );
}
