import { MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const locations = [
  {
    name: "Snell Library",
    address: "360 Huntington Ave",
    hours: "24/7",
    distance: "2 min walk from Curry",
    available: true,
  },
  {
    name: "Curry Student Center",
    address: "346 Huntington Ave",
    hours: "24/7",
    distance: "Heart of campus",
    available: true,
  },
  {
    name: "West Village Dorms",
    address: "1165 Tremont St",
    hours: "24/7",
    distance: "Near Qdoba",
    available: true,
  },
  {
    name: "Marino Recreation Center",
    address: "369 Huntington Ave",
    hours: "24/7",
    distance: "Perfect post-workout pickup",
    available: true,
  },
  {
    name: "Ryder Hall",
    address: "11 Leon St",
    hours: "24/7",
    distance: "Near academic buildings",
    available: true,
  },
  {
    name: "International Village",
    address: "1255 Boylston St",
    hours: "24/7",
    distance: "Next to dining hall",
    available: false,
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Campus Pickup Locations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Smart lockers placed at convenient spots around Northeastern campus. All open 24/7.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.name}
              className={`bg-card rounded-2xl p-6 shadow-soft ${
                location.available ? "hover:shadow-medium" : "opacity-60"
              } transition-all relative`}
            >
              {location.available ? (
                <Badge className="absolute top-4 right-4 bg-primary">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Available
                </Badge>
              ) : (
                <Badge variant="secondary" className="absolute top-4 right-4">
                  Coming Soon
                </Badge>
              )}
              <div className="mb-4 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{location.address}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{location.hours}</span>
                </div>
                <p className="text-sm text-muted-foreground">{location.distance}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Choose your preferred pickup location when ordering. Temperature-controlled lockers keep meals fresh for 48 hours.
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">How it works:</span> Order by Sunday → 
            We prepare Monday → Delivered to your locker Tuesday by 10am → You get notified → 
            Scan QR code → Grab & Go!
          </p>
        </div>
      </div>
    </section>
  );
}
