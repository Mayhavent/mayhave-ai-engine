import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="relative overflow-hidden bg-background">
      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Purple gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/60 to-purple-950/80" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Let AI Handle All The Work So You Can Scale Faster>
              
              <p className="text-lg text-white/90">
                Book a Call Today and Start Automating
              </p>

              <div className="pt-4">
                <Link to="/book">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                    Book a free call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="border-t border-border/50 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand & Newsletter */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">AI Consulting</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We ship production systems—fast. Automations and agents tailored to your stack, measured against real KPIs.
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Join our newsletter</p>
                <div className="flex gap-2">
                  <Input type="email" placeholder="name@email.com" className="bg-muted border-border text-sm" />
                  <Button size="sm" variant="destructive" className="shrink-0">
                    →
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Links</h4>
              <nav className="flex flex-col gap-3">
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
                <a href="#process" className="text-sm text-muted-foreground hover:text-primary transition-colors">Process</a>
                <a href="#case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Case studies</a>
                <a href="#benefits" className="text-sm text-muted-foreground hover:text-primary transition-colors">Benefits</a>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              </nav>
            </div>

            {/* Pages Column */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Pages</h4>
              <nav className="flex flex-col gap-3">
                <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
                <a href="/404" className="text-sm text-muted-foreground hover:text-primary transition-colors">404</a>
              </nav>
            </div>

            {/* Socials Column */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Socials</h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-border/50 py-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>AI Consulting</p>
            <p className="text-center">Start small, build systems for scale</p>
            <p>© AI Consulting</p>
          </div>
        </div>
      </div>
    </footer>;
};