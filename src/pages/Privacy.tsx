import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              How we protect your data
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p>
                  We collect information you provide when creating an account, placing orders, or contacting us.
                  This includes your name, email, phone number, delivery address, and payment information.
                </p>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p>
                  We use your information to process orders, communicate with you, improve our services,
                  and send promotional materials (with your consent).
                </p>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your personal information.
                  All payment data is encrypted and processed securely.
                </p>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
                <p>
                  We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
                  You can control cookie settings through your browser.
                </p>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
                <p>
                  We may share information with third-party service providers who assist in operating our business,
                  such as payment processors and delivery partners.
                </p>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information.
                  Contact us at privacy@foodprince.com for any privacy-related requests.
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

export default Privacy;
