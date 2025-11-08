import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuItems = {
  starters: [
    { id: "1", name: "Crispy Spring Rolls", price: 8.99, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400", description: "Fresh vegetables wrapped in crispy pastry" },
    { id: "2", name: "Chicken Wings", price: 12.99, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400", description: "Spicy buffalo wings with ranch dip" },
    { id: "3", name: "Garlic Bread", price: 6.99, image: "https://images.unsplash.com/photo-1573140401552-3fab0b24f2e6?w=400", description: "Toasted bread with garlic butter" },
  ],
  mains: [
    { id: "4", name: "Royal Burger", price: 15.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400", description: "Juicy beef patty with premium toppings" },
    { id: "5", name: "Margherita Pizza", price: 14.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", description: "Classic Italian pizza with fresh mozzarella" },
    { id: "6", name: "Grilled Chicken", price: 16.99, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400", description: "Tender grilled chicken with herbs" },
    { id: "7", name: "Pasta Carbonara", price: 13.99, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400", description: "Creamy pasta with bacon and parmesan" },
  ],
  desserts: [
    { id: "8", name: "Chocolate Cake", price: 7.99, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400", description: "Rich chocolate cake with ganache" },
    { id: "9", name: "Ice Cream Sundae", price: 6.99, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400", description: "Vanilla ice cream with toppings" },
    { id: "10", name: "Cheesecake", price: 8.99, image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400", description: "New York style cheesecake" },
  ],
};

const Menu = () => {
  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
        
        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="starters">Starters</TabsTrigger>
            <TabsTrigger value="mains">Mains</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
          </TabsList>

          <TabsContent value="starters">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.starters.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">${item.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => addItem(item)} className="w-full">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mains">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.mains.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">${item.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => addItem(item)} className="w-full">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.desserts.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">${item.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => addItem(item)} className="w-full">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
