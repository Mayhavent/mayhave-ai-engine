import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Schedule Your Free Consultation
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                During this 30-minute call, we'll:
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4">
                <li>Analyze your current workflows and identify automation opportunities</li>
                <li>Discuss how AI can solve your specific business challenges</li>
                <li>Provide actionable recommendations tailored to your goals</li>
                <li>Answer any questions about our process and implementation approach</li>
              </ul>
              <p className="text-muted-foreground mt-6">
                No obligations, no sales pressure - just a genuine conversation about how AI automation can transform your business.
              </p>
            </div>
          </div>

          {/* Calendly embed */}
          <div className="bg-card border border-border rounded-lg overflow-hidden" style={{ minHeight: '700px' }}>
            <iframe
              src="https://calendly.com/mayhave/30min"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a consultation"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
