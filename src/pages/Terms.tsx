import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Terms & Conditions</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Last updated: January 2024
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Food Prince services, you accept and agree to be bound by these Terms and Conditions.
                  If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Service</h2>
                <p>
                  Our service allows you to order food for delivery or pickup. You must be at least 18 years old to use our service.
                  You agree to provide accurate information when placing orders.
                </p>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Orders and Payment</h2>
                <p>
                  All orders are subject to acceptance and availability. Prices are subject to change without notice.
                  Payment is required at the time of order placement.
                </p>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Delivery</h2>
                <p>
                  We strive to deliver within the estimated time frame, but delays may occur due to factors beyond our control.
                  Delivery fees apply and vary by location.
                </p>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cancellations and Refunds</h2>
                <p>
                  Orders may be cancelled within 5 minutes of placement. Refunds are issued at our discretion for valid reasons.
                  Please contact customer service for any issues with your order.
                </p>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p>
                  Food Prince is not liable for any indirect, incidental, or consequential damages arising from the use of our service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
