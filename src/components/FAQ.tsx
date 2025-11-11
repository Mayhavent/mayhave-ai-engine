import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "How is Mayhave different from other AI consultants?",
  answer: "We focus on implementation, not just strategy. While others hand you a deck of recommendations, we actually build and deploy the AI systems for you. You get working automation, not homework."
}, {
  question: "Do I need technical knowledge to work with you?",
  answer: "Not at all. We handle all the technical implementation. You just need to share your business processes and pain points with us. We take care of everything else and train your team on using the systems."
}, {
  question: "How long does implementation take?",
  answer: "Most projects are completed within 4-8 weeks, depending on complexity. Simple automations can be live in 2-3 weeks, while comprehensive systems with multiple integrations may take 2-3 months."
}, {
  question: "What if the AI doesn't work as expected?",
  answer: "All our packages include support periods where we monitor performance and make adjustments. We don't consider a project complete until you're seeing real results. Plus, we provide clear metrics to track ROI from day one."
}, {
  question: "Can you integrate with our existing tools?",
  answer: "Yes! We specialize in integrating AI solutions with popular business tools like Google Workspace, CRMs (Salesforce, HubSpot), project management platforms, and custom software. If you use it, we can likely connect to it."
}, {
  question: "What kind of results can I expect?",
  answer: "Most clients see 40-70% reduction in time spent on automated tasks, significant cost savings within 3-6 months, and improved accuracy. We provide detailed ROI projections during the diagnosis phase so you know what to expect."
}, {
  question: "Do you offer ongoing support?",
  answer: "Absolutely. All packages include initial support, and we offer ongoing maintenance plans to ensure your systems evolve with your business. You'll never be left without help when you need it."
}];
export const FAQ = () => {
  return <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          
          <p className="text-xl text-muted-foreground">Quick guide to all your AI automation questions.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6 animate-fade-in-up" style={{
          animationDelay: `${index * 0.05}s`
        }}>
              <AccordionTrigger className="text-left hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>)}
        </Accordion>
      </div>
    </section>;
};