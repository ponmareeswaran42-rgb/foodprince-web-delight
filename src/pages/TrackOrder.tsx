import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Track Your Order</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Enter your order number to see real-time updates
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="mb-12 animate-fade-in">
              <CardHeader>
                <CardTitle>Enter Order Details</CardTitle>
                <CardDescription>You can find your order number in your confirmation email</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Input
                    placeholder="Order Number (e.g., FP123456)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                  />
                  <Button>Track</Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-8">Order Status Example</h2>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
                
                <div className="relative pl-20 pb-8 animate-fade-in">
                  <div className="absolute left-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Order Confirmed</CardTitle>
                      <CardDescription>2:30 PM</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Your order has been received and confirmed</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative pl-20 pb-8 animate-fade-in">
                  <div className="absolute left-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Package className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Preparing Order</CardTitle>
                      <CardDescription>2:35 PM</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Our chefs are preparing your delicious meal</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative pl-20 pb-8 animate-fade-in">
                  <div className="absolute left-0 w-16 h-16 bg-primary/50 rounded-full flex items-center justify-center">
                    <Truck className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <Card className="opacity-70">
                    <CardHeader>
                      <CardTitle className="text-lg">Out for Delivery</CardTitle>
                      <CardDescription>Estimated: 3:00 PM</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Your order is on its way!</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrackOrder;
