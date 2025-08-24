import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Clock, Plane, TrendingDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface QueryResult {
  query: string;
  answer: string;
  insights: string[];
  timestamp: string;
}

const QueryInterface = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<QueryResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sampleQueries = [
    "What's the best time to schedule flights at Mumbai Airport?",
    "Show me delay patterns for Delhi Airport",
    "Which airport has better on-time performance?",
    "Predict cascading delays for evening flights"
  ];

  const handleQuery = async (queryText: string) => {
    if (!queryText.trim()) return;

    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockResult: QueryResult = {
        query: queryText,
        answer: generateMockAnswer(queryText),
        insights: generateMockInsights(queryText),
        timestamp: new Date().toLocaleTimeString()
      };
      
      setResults(prev => [mockResult, ...prev]);
      setQuery("");
      setIsLoading(false);
      
      toast({
        title: "Query Processed",
        description: "AI analysis completed successfully"
      });
    }, 2000);
  };

  const generateMockAnswer = (query: string): string => {
    if (query.toLowerCase().includes("mumbai")) {
      return "Based on flight data analysis, the optimal scheduling window for Mumbai Airport is between 06:00-08:00 and 22:00-24:00 IST, with 89% on-time performance during these periods.";
    }
    if (query.toLowerCase().includes("delhi")) {
      return "Delhi Airport shows consistent delay patterns during 14:00-17:00 IST, with average delays of 25 minutes. Weather-related disruptions contribute to 35% of delays.";
    }
    if (query.toLowerCase().includes("cascading")) {
      return "Evening flight delays (18:00-21:00) create cascading effects, potentially impacting 67% of subsequent departures. Recommend 15-minute buffer scheduling.";
    }
    return "Analysis shows peak congestion occurs during business hours (09:00-17:00) with capacity utilization exceeding 90%. Off-peak scheduling improves punctuality by 23%.";
  };

  const generateMockInsights = (query: string): string[] => {
    const insights = [
      "Peak hour capacity utilization: 94%",
      "Weather impact on delays: 28%",
      "Optimal buffer time: 12 minutes",
      "Runway efficiency rate: 85%"
    ];
    return insights.slice(0, Math.floor(Math.random() * 3) + 2);
  };

  return (
    <div className="space-y-6">
      {/* Query Input */}
      <Card className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Search className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Natural Language Query Interface</h3>
        </div>
        
        <div className="flex space-x-2">
          <Input
            placeholder="Ask about flight scheduling, delays, or airport performance..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleQuery(query)}
            className="flex-1"
          />
          <Button 
            onClick={() => handleQuery(query)}
            disabled={isLoading || !query.trim()}
            className="px-6"
          >
            {isLoading ? (
              <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Sample Queries */}
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Try these sample queries:</p>
          <div className="flex flex-wrap gap-2">
            {sampleQueries.map((sample, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setQuery(sample)}
                className="text-xs"
              >
                {sample}
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Query Results */}
      <div className="space-y-4">
        {results.map((result, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-primary/10 rounded">
                  <Plane className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium text-sm">{result.query}</span>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {result.timestamp}
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm leading-relaxed">{result.answer}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {result.insights.map((insight, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  {insight}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {results.length === 0 && (
        <Card className="p-8 text-center">
          <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            Start by asking a question about flight scheduling or airport performance
          </p>
        </Card>
      )}
    </div>
  );
};

export default QueryInterface;