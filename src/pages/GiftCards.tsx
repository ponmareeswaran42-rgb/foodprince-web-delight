import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Heart, Star, Sparkles } from "lucide-react";

const giftCardAmounts = [
  { amount: 25, icon: Gift },
  { amount: 50, icon: Heart },
  { amount: 100, icon: Star },
  { amount: 150, icon: Sparkles },
];

const GiftCards = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Gift Cards</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Share the joy of delicious food with loved ones
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Perfect for Every Occasion</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Food Prince gift cards make the perfect present for birthdays, holidays, thank-you gifts, 
                or just because. They never expire and can be used for anything on our menu!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {giftCardAmounts.map((card, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all animate-fade-in hover-scale">
                  <CardHeader>
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                      <card.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-3xl font-bold">${card.amount}</CardTitle>
                    <CardDescription>Gift Card</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full">Purchase</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card className="max-w-2xl mx-auto animate-fade-in">
              <CardHeader>
                <CardTitle>Custom Amount</CardTitle>
                <CardDescription>Choose any amount between $10 and $500</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input 
                      type="number" 
                      min="10" 
                      max="500" 
                      placeholder="Enter amount" 
                      className="w-full px-4 py-2 rounded-md border border-border bg-background"
                    />
                  </div>
                  <Button>Purchase</Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Instant Delivery</h3>
                <p className="text-muted-foreground">Delivered via email immediately after purchase</p>
              </div>

              <div className="p-6 animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Never Expires</h3>
                <p className="text-muted-foreground">Use anytime, no expiration date</p>
              </div>

              <div className="p-6 animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Easy to Use</h3>
                <p className="text-muted-foreground">Simple redemption at checkout</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GiftCards;
