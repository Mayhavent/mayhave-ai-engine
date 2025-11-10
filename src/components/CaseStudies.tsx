import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const caseStudies = [
  {
    client: "Healthcare Practice",
    challenge: "Manual appointment scheduling consuming 15+ hours/week",
    solution: "AI voice agent + calendar automation + CRM integration",
    results: [
      { icon: Clock, value: "87%", label: "reduction in scheduling time" },
      { icon: Users, value: "24/7", label: "availability" },
      { icon: DollarSign, value: "$3,200", label: "monthly cost savings" },
      { icon: TrendingUp, value: "40%", label: "increase in bookings" }
    ]
  },
  {
    client: "E-commerce Business",
    challenge: "Email overload and slow response times affecting customer satisfaction",
    solution: "AI email agent with smart routing and auto-responses",
    results: [
      { icon: Clock, value: "70%", label: "faster response times" },
      { icon: TrendingUp, value: "500+", label: "hours saved annually" },
      { icon: Users, value: "95%", label: "customer satisfaction" },
      { icon: DollarSign, value: "$0", label: "missed leads" }
    ]
  },
  {
    client: "Professional Services",
    challenge: "Manual data entry and reporting consuming valuable billable hours",
    solution: "Custom workflow automation with analytics dashboard",
    results: [
      { icon: Clock, value: "65%", label: "time savings" },
      { icon: DollarSign, value: "$5,000", label: "monthly ROI" },
      { icon: TrendingUp, value: "3x", label: "faster reporting" },
      { icon: Users, value: "100%", label: "data accuracy" }
    ]
  }
];

export const CaseStudies = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Real <span className="bg-gradient-primary bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses transform their operations with AI
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="border-b border-border/50">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-2xl">{study.client}</CardTitle>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Case Study
                    </Badge>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Challenge</h4>
                    <p className="text-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Solution</h4>
                    <p className="text-foreground">{study.solution}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-sm text-muted-foreground mb-4">Results</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {study.results.map((result, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <result.icon className="w-5 h-5 text-background" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground leading-tight">{result.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
