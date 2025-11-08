import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    date: "2 days ago",
    review: "Absolutely amazing! The food arrived hot and fresh. The Royal Burger is the best I've ever had. Will definitely order again!",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    rating: 5,
    date: "1 week ago",
    review: "Excellent service and delicious food. The delivery was faster than expected and everything was perfectly packaged.",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    rating: 4,
    date: "2 weeks ago",
    review: "Great variety on the menu. The pasta carbonara was creamy and flavorful. Only minor issue was slightly longer wait time during peak hours.",
    initials: "ER",
  },
  {
    name: "David Kim",
    rating: 5,
    date: "3 weeks ago",
    review: "Food Prince never disappoints! Their pizza is incredible and the prices are very reasonable. Highly recommended!",
    initials: "DK",
  },
  {
    name: "Lisa Thompson",
    rating: 5,
    date: "1 month ago",
    review: "The catering service for our company event was outstanding. Professional staff and amazing food that everyone loved!",
    initials: "LT",
  },
  {
    name: "James Wilson",
    rating: 4,
    date: "1 month ago",
    review: "Quality ingredients and generous portions. The customer service team is also very helpful and friendly.",
    initials: "JW",
  },
];

const Reviews = () => {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Customer Reviews</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              See what our customers are saying
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-md mx-auto mb-12 text-center animate-fade-in">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-primary">{averageRating.toFixed(1)}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.round(averageRating) ? 'fill-primary text-primary' : 'text-muted'}`} />
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Based on {reviews.length} reviews</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">{review.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{review.name}</CardTitle>
                          <CardDescription>{review.date}</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted'}`} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.review}</p>
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

export default Reviews;
