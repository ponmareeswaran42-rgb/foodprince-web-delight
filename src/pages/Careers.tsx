import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, DollarSign, Heart, TrendingUp } from "lucide-react";

const positions = [
  {
    title: "Head Chef",
    department: "Kitchen",
    type: "Full-time",
    description: "Lead our culinary team and create amazing dishes",
  },
  {
    title: "Delivery Driver",
    department: "Logistics",
    type: "Full-time",
    description: "Deliver happiness to our customers' doorsteps",
  },
  {
    title: "Customer Service",
    department: "Support",
    type: "Part-time",
    description: "Help customers have the best experience",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    type: "Full-time",
    description: "Shape our brand and reach new customers",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Join Our Team</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Be part of something delicious
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 rounded-lg bg-card border border-border animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Pay</h3>
                <p className="text-muted-foreground">Great compensation and benefits</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card border border-border animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p className="text-muted-foreground">Opportunities to advance</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card border border-border animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
                <p className="text-muted-foreground">Supportive team environment</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card border border-border animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                <p className="text-muted-foreground">Work-life balance</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {positions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle>{position.title}</CardTitle>
                    <CardDescription>{position.department} • {position.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{position.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
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

export default Careers;
