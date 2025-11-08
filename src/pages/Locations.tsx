import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const locations = [
  {
    name: "Downtown Branch",
    address: "123 Royal Street, Food City, FC 12345",
    phone: "(555) 123-4567",
    hours: "Mon-Sun: 10:00 AM - 11:00 PM",
  },
  {
    name: "North Plaza",
    address: "456 Prince Avenue, Food City, FC 12346",
    phone: "(555) 234-5678",
    hours: "Mon-Sun: 9:00 AM - 10:00 PM",
  },
  {
    name: "Westside Mall",
    address: "789 King Boulevard, Food City, FC 12347",
    phone: "(555) 345-6789",
    hours: "Mon-Sun: 11:00 AM - 12:00 AM",
  },
  {
    name: "East Market",
    address: "321 Crown Road, Food City, FC 12348",
    phone: "(555) 456-7890",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
];

const Locations = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Our Locations</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Find a Food Prince near you
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in hover-scale">
                  <CardHeader>
                    <CardTitle>{location.name}</CardTitle>
                    <CardDescription>Visit us today</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">{location.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">{location.hours}</p>
                    </div>
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

export default Locations;
