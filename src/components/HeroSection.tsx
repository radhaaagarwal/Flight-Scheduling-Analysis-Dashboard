import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Brain, Clock, Plane } from "lucide-react";
import heroImage from "@/assets/aviation-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/5 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Aviation dashboard interface" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Plane className="h-3 w-3 mr-1" />
              Flight Scheduling Intelligence
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Optimize Flight 
                <span className="text-primary block">Scheduling</span>
                with AI Analytics
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Analyze flight routes, predict delays, and optimize scheduling decisions 
                for busy airports like Mumbai and Delhi using advanced AI and real-time data insights.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('dashboard')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                View Live Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('query-interface')}
                className="border-primary/20 hover:bg-primary/5"
              >
                Try NLP Queries
                <Brain className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Real-time Analytics</p>
                  <p className="text-xs text-muted-foreground">Live flight data</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Clock className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-sm">Delay Prediction</p>
                  <p className="text-xs text-muted-foreground">AI-powered forecasts</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Brain className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">NLP Interface</p>
                  <p className="text-xs text-muted-foreground">Natural queries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">1,247</div>
                <div className="text-sm text-muted-foreground">Daily Flights Analyzed</div>
              </div>
              <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-2">78.5%</div>
                <div className="text-sm text-muted-foreground">On-Time Performance</div>
              </div>
              <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Major Airports</div>
              </div>
              <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-2">18min</div>
                <div className="text-sm text-muted-foreground">Average Delay</div>
              </div>
            </div>

            <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Plane className="h-4 w-4 mr-2" />
                Key Capabilities
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Analyze flight routes using FlightRadar24 data
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Identify optimal takeoff/landing time slots
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Predict cascading delay impacts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Natural language query processing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;