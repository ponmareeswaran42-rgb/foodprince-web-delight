import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your delivery hours?",
    answer: "We deliver from 10:00 AM to 11:00 PM, seven days a week. Some locations may have extended hours.",
  },
  {
    question: "What is your delivery area?",
    answer: "We deliver within a 10-mile radius of our locations. Enter your address during checkout to confirm delivery availability.",
  },
  {
    question: "How long does delivery take?",
    answer: "Typical delivery time is 30-45 minutes. During peak hours, it may take up to 60 minutes.",
  },
  {
    question: "Do you offer contactless delivery?",
    answer: "Yes! Simply select the contactless delivery option at checkout and we'll leave your order at your door.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and digital payment methods including Apple Pay and Google Pay.",
  },
  {
    question: "Can I customize my order?",
    answer: "Absolutely! You can add special instructions for any item in your cart. We'll do our best to accommodate your requests.",
  },
  {
    question: "Do you cater for events?",
    answer: "Yes! We offer catering services for events of all sizes. Visit our Catering page or contact us for more information.",
  },
  {
    question: "What is your refund policy?",
    answer: "If you're not satisfied with your order, contact us within 24 hours and we'll make it right with a refund or replacement.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
              Find answers to common questions
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="animate-fade-in">
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
