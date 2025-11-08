import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Award, CheckCircle2 } from "lucide-react";

const Franchise = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Franchise Opportunities</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Join the Food Prince family and build your own success story
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-center mb-6">Why Franchise With Us?</h2>
              <p className="text-muted-foreground text-center text-lg mb-12">
                Food Prince is a proven business model with a track record of success. 
                We provide comprehensive support to help you build a profitable business.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Growing Market</CardTitle>
                    <CardDescription>Food delivery is a rapidly expanding industry</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Proven Brand</CardTitle>
                    <CardDescription>Established reputation and customer loyalty</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Comprehensive Training</CardTitle>
                    <CardDescription>Full support from setup to operations</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Strong ROI</CardTitle>
                    <CardDescription>Attractive financial returns and profit margins</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">What We Provide</h2>
              <Card className="animate-fade-in">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {[
                      "Complete business setup assistance",
                      "Exclusive territory rights",
                      "Marketing and advertising support",
                      "Supply chain and vendor relationships",
                      "Technology platform and app access",
                      "Ongoing operational support",
                      "Quality control standards and training",
                      "National brand recognition",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Contact us today to learn more about franchise opportunities and take the first step 
                toward owning your own Food Prince location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request Information</Button>
                <Button size="lg" variant="outline">Download Brochure</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Franchise;
