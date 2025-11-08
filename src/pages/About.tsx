import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChefHat, Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">About Food Prince</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Crafting royal dining experiences since 2010
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Food Prince began with a simple vision: to bring restaurant-quality meals to every doorstep. 
                  What started as a small kitchen has grown into a beloved food delivery service serving thousands of happy customers.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our commitment to quality ingredients, expert preparation, and exceptional service has made us 
                  the go-to choice for food lovers across the city.
                </p>
                <p className="text-muted-foreground">
                  Every meal we prepare is a testament to our passion for great food and our dedication to customer satisfaction.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden animate-scale-in">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800" 
                  alt="Our Kitchen" 
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <ChefHat className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-muted-foreground">Only the finest ingredients in every dish</p>
              </div>

              <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">Committed to exceeding expectations</p>
              </div>

              <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-muted-foreground">Love in every meal we create</p>
              </div>

              <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">Serving our neighbors with care</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
