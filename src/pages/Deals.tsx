import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Percent, Gift, Star } from "lucide-react";

const deals = [
  {
    title: "Family Combo",
    description: "2 Large Pizzas + 12 Wings + 2L Soda",
    price: "$39.99",
    original: "$54.99",
    discount: "30% OFF",
    icon: Gift,
  },
  {
    title: "Lunch Special",
    description: "Any Main + Starter + Drink",
    price: "$14.99",
    original: "$22.99",
    discount: "35% OFF",
    icon: Star,
  },
  {
    title: "Weekend Feast",
    description: "3 Mains + 3 Desserts + Free Delivery",
    price: "$49.99",
    original: "$65.99",
    discount: "25% OFF",
    icon: Percent,
  },
  {
    title: "Tuesday Special",
    description: "Buy 2 Burgers Get 1 Free",
    price: "$19.99",
    original: "$29.99",
    discount: "BOGO",
    icon: Gift,
  },
];

const Deals = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Deals & Offers</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Save big on your favorite meals
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {deals.map((deal, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all animate-fade-in hover-scale">
                  <CardHeader className="bg-primary/5">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{deal.title}</CardTitle>
                        <CardDescription className="text-base">{deal.description}</CardDescription>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <deal.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-3xl font-bold text-primary">{deal.price}</span>
                      <span className="text-lg text-muted-foreground line-through pb-1">{deal.original}</span>
                    </div>
                    <Badge className="bg-primary">{deal.discount}</Badge>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Order Now</Button>
                  </CardFooter>
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

export default Deals;
