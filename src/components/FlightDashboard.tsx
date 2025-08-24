import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plane, Clock, MapPin, TrendingUp, AlertTriangle } from "lucide-react";

interface FlightMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

interface Airport {
  code: string;
  name: string;
  onTimeRate: number;
  delays: number;
  capacity: number;
}

const FlightDashboard = () => {
  const metrics: FlightMetric[] = [
    { label: "Total Flights", value: "1,247", change: "+12%", trend: 'up' },
    { label: "On-Time Rate", value: "78.5%", change: "-3.2%", trend: 'down' },
    { label: "Avg Delay", value: "18min", change: "+5min", trend: 'down' },
    { label: "Capacity Used", value: "92%", change: "+8%", trend: 'up' }
  ];

  const airports: Airport[] = [
    { code: "BOM", name: "Mumbai", onTimeRate: 75, delays: 24, capacity: 95 },
    { code: "DEL", name: "Delhi", onTimeRate: 82, delays: 18, capacity: 88 }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold mt-1">{metric.value}</p>
              </div>
              <div className={`flex items-center text-sm ${
                metric.trend === 'up' ? 'text-accent' : 
                metric.trend === 'down' ? 'text-destructive' : 'text-muted-foreground'
              }`}>
                <TrendingUp className="h-4 w-4 mr-1" />
                {metric.change}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Airport Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {airports.map((airport) => (
          <Card key={airport.code} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{airport.name} Airport</h3>
                  <p className="text-sm text-muted-foreground">{airport.code}</p>
                </div>
              </div>
              <Badge variant={airport.onTimeRate > 80 ? "default" : "secondary"}>
                {airport.onTimeRate}% On-Time
              </Badge>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>On-Time Performance</span>
                  <span>{airport.onTimeRate}%</span>
                </div>
                <Progress value={airport.onTimeRate} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Capacity Utilization</span>
                  <span>{airport.capacity}%</span>
                </div>
                <Progress value={airport.capacity} className="h-2" />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Avg Delay: {airport.delays}min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Live Tracking</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Alert Section */}
      <Card className="p-6 border-warning/20 bg-warning/5">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
          <div>
            <h4 className="font-semibold text-warning-foreground">Peak Hour Congestion Alert</h4>
            <p className="text-sm text-muted-foreground mt-1">
              High traffic volume expected between 14:00-16:00 IST at Mumbai Airport. 
              Consider alternative time slots for better on-time performance.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FlightDashboard;