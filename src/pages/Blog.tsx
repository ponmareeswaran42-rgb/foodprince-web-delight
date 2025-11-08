import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "10 Secret Ingredients That Make Our Burgers Special",
    excerpt: "Discover the carefully selected ingredients that set Food Prince burgers apart from the rest...",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    category: "Recipes",
  },
  {
    title: "Behind the Scenes: A Day in Our Kitchen",
    excerpt: "Take a peek at what goes on in our kitchen from dawn to dusk and meet our talented chefs...",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600",
    date: "Jan 10, 2024",
    readTime: "7 min read",
    category: "Stories",
  },
  {
    title: "Healthy Eating Tips for Busy Professionals",
    excerpt: "Learn how to maintain a balanced diet even when you're ordering takeout regularly...",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    date: "Jan 5, 2024",
    readTime: "4 min read",
    category: "Health",
  },
  {
    title: "The History of Pizza: From Naples to Your Door",
    excerpt: "Explore the fascinating journey of pizza from its Italian origins to modern delivery...",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    date: "Dec 28, 2023",
    readTime: "6 min read",
    category: "Food Culture",
  },
  {
    title: "New Year, New Menu: What's Coming in 2024",
    excerpt: "Get excited about the delicious new items we're adding to our menu this year...",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    date: "Dec 20, 2023",
    readTime: "3 min read",
    category: "News",
  },
  {
    title: "Sustainability in Food Delivery: Our Green Initiatives",
    excerpt: "How Food Prince is working to reduce environmental impact and promote sustainability...",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
    date: "Dec 15, 2023",
    readTime: "5 min read",
    category: "Sustainability",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Food Prince Blog</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Stories, recipes, and news from our kitchen
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all animate-fade-in hover-scale">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-md">{post.category}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">Read More</Button>
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

export default Blog;
