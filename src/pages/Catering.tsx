import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Award, Utensils } from "lucide-react";

const packages = [
  {
    name: "Bronze Package",
    serves: "10-15 people",
    price: "$199",
    items: ["3 Starter Platters", "5 Main Dishes", "2 Desserts", "Beverages"],
  },
  {
    name: "Silver Package",
    serves: "20-30 people",
    price: "$399",
    items: ["5 Starter Platters", "8 Main Dishes", "4 Desserts", "Premium Beverages", "Setup Service"],
  },
  {
    name: "Gold Package",
    serves: "40-50 people",
    price: "$699",
    items: ["8 Starter Platters", "12 Main Dishes", "6 Desserts", "Premium Beverages", "Full Service", "Decorations"],
  },
];

const Catering = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Catering Services</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Make your events unforgettable with Food Prince catering
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 rounded-lg bg-card border border-border animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Any Size Event</h3>
                <p className="text-muted-foreground">From 10 to 500+ guests</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card border border-border animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
                <p className="text-muted-foreground">Book 24 hours in advance</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card border border-border animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
                <p className="text-muted-foreground">Experienced catering staff</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card border border-border animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Menus</h3>
                <p className="text-muted-foreground">Tailored to your needs</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">Catering Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Card key={index} className="hover:shadow-lg transition-all animate-fade-in hover-scale">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.serves}</CardDescription>
                    <p className="text-3xl font-bold text-primary mt-4">{pkg.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">Book Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catering;
