import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Save Time and <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Cut Costs with AI?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your free discovery call and let's discuss how AI can transform your business
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="default" size="lg" className="group bg-primary hover:bg-primary/90 text-white">
              <Calendar className="w-5 h-5" />
              Book Your Free Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 bg-transparent text-foreground hover:bg-white/10">
              <Mail className="w-5 h-5" />
              Email Us
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            contact@mayhave.ai
          </p>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-border/50 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              <p className="font-bold text-foreground text-lg mb-1">Mayhave</p>
              <p>© {new Date().getFullYear()} Mayhave. All rights reserved.</p>
            </div>
            
            <nav className="flex gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#case-studies" className="hover:text-primary transition-colors">Case Studies</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
