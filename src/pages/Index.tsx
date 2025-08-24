import HeroSection from "@/components/HeroSection";
import FlightDashboard from "@/components/FlightDashboard";
import FlightSchedule from "@/components/FlightSchedule";
import QueryInterface from "@/components/QueryInterface";
import TimeSlotAnalysis from "@/components/TimeSlotAnalysis";
import { Button } from "@/components/ui/button";
import { ArrowUp, Plane, BarChart3, MessageSquare, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">FlightAnalytics</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#dashboard" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <BarChart3 className="h-4 w-4" />
                <span>Dashboard</span>
              </a>
              <a href="#schedules" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <Plane className="h-4 w-4" />
                <span>Schedules</span>
              </a>
              <a href="#time-slots" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <Clock className="h-4 w-4" />
                <span>Time Analysis</span>
              </a>
              <a href="#query-interface" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span>AI Queries</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="space-y-16">
        {/* Dashboard Section */}
        <section id="dashboard" className="py-16 bg-gradient-to-br from-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Live Flight Dashboard</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real-time analytics and performance metrics for Mumbai and Delhi airports
              </p>
            </div>
            <FlightDashboard />
          </div>
        </section>

        {/* Flight Schedules */}
        <section id="schedules" className="py-16">
          <div className="container mx-auto px-6">
            <FlightSchedule />
          </div>
        </section>

        {/* Time Slot Analysis */}
        <section id="time-slots" className="py-16">
          <div className="container mx-auto px-6">
            <TimeSlotAnalysis />
          </div>
        </section>

        {/* Query Interface */}
        <section id="query-interface" className="py-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI-Powered Query Interface</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ask natural language questions about flight data and get intelligent insights
              </p>
            </div>
            <QueryInterface />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">FlightAnalytics</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced flight scheduling optimization using AI and real-time data analytics.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Data Sources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• FlightRadar24 API</li>
                <li>• FlightAware Data</li>
                <li>• Mumbai Airport (BOM)</li>
                <li>• Delhi Airport (DEL)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Key Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time flight tracking</li>
                <li>• Delay prediction models</li>
                <li>• NLP query interface</li>
                <li>• Schedule optimization</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 FlightAnalytics. Built for HirePro Assessment - Flight Scheduling Optimization.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
