import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

interface TimeSlot {
  time: string;
  period: string;
  flights: number;
  onTimeRate: number;
  avgDelay: number;
  capacity: number;
  recommendation: 'optimal' | 'moderate' | 'avoid';
}

const TimeSlotAnalysis = () => {
  const timeSlots: TimeSlot[] = [
    { time: "06:00-08:00", period: "Early Morning", flights: 89, onTimeRate: 94, avgDelay: 5, capacity: 65, recommendation: 'optimal' },
    { time: "08:00-12:00", period: "Morning Peak", flights: 156, onTimeRate: 82, avgDelay: 12, capacity: 88, recommendation: 'moderate' },
    { time: "12:00-14:00", period: "Midday", flights: 98, onTimeRate: 87, avgDelay: 8, capacity: 72, recommendation: 'optimal' },
    { time: "14:00-17:00", period: "Afternoon Peak", flights: 198, onTimeRate: 69, avgDelay: 28, capacity: 96, recommendation: 'avoid' },
    { time: "17:00-20:00", period: "Evening", flights: 167, onTimeRate: 75, avgDelay: 22, capacity: 92, recommendation: 'moderate' },
    { time: "20:00-22:00", period: "Night", flights: 112, onTimeRate: 91, avgDelay: 7, capacity: 78, recommendation: 'optimal' },
    { time: "22:00-06:00", period: "Overnight", flights: 45, onTimeRate: 96, avgDelay: 3, capacity: 42, recommendation: 'optimal' }
  ];

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'optimal': return 'bg-green-500/10 text-green-700 border-green-200';
      case 'moderate': return 'bg-yellow-500/10 text-yellow-700 border-yellow-200';
      case 'avoid': return 'bg-red-500/10 text-red-700 border-red-200';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  const getRecommendationIcon = (rec: string) => {
    switch (rec) {
      case 'optimal': return <TrendingUp className="h-3 w-3" />;
      case 'moderate': return <Clock className="h-3 w-3" />;
      case 'avoid': return <TrendingDown className="h-3 w-3" />;
      default: return <AlertCircle className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Time Slot Analysis</h2>
        <p className="text-muted-foreground">
          Optimal scheduling windows based on historical performance data
        </p>
      </div>

      <div className="grid gap-4">
        {timeSlots.map((slot, index) => (
          <Card key={index} className="p-6 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-lg font-bold">{slot.time}</div>
                  <div className="text-sm text-muted-foreground">{slot.period}</div>
                </div>
                <Badge className={`${getRecommendationColor(slot.recommendation)} capitalize`}>
                  {getRecommendationIcon(slot.recommendation)}
                  <span className="ml-1">{slot.recommendation}</span>
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{slot.flights}</div>
                <div className="text-sm text-muted-foreground">flights</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>On-Time Rate</span>
                  <span className="font-medium">{slot.onTimeRate}%</span>
                </div>
                <Progress value={slot.onTimeRate} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  Target: 85%+
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Capacity Usage</span>
                  <span className="font-medium">{slot.capacity}%</span>
                </div>
                <Progress 
                  value={slot.capacity} 
                  className={`h-2 ${slot.capacity > 90 ? '[&>div]:bg-destructive' : ''}`} 
                />
                <div className="text-xs text-muted-foreground">
                  Optimal: &lt;85%
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Avg Delay</span>
                  <span className="font-medium">{slot.avgDelay} min</span>
                </div>
                <div className={`text-xs px-2 py-1 rounded ${
                  slot.avgDelay < 10 ? 'bg-green-100 text-green-700' :
                  slot.avgDelay < 20 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {slot.avgDelay < 10 ? 'Excellent' : 
                   slot.avgDelay < 20 ? 'Acceptable' : 'Poor'}
                </div>
              </div>
            </div>

            {slot.recommendation === 'avoid' && (
              <div className="mt-4 p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
                  <div className="text-sm">
                    <span className="font-medium text-destructive">High congestion period.</span>
                    <span className="text-muted-foreground ml-1">
                      Consider scheduling flights outside this window for better performance.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="font-semibold mb-3 flex items-center">
          <TrendingUp className="h-4 w-4 mr-2 text-primary" />
          Scheduling Recommendations
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-green-700 mb-2">✓ Optimal Time Slots</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Early Morning (06:00-08:00) - 94% on-time</li>
              <li>• Midday (12:00-14:00) - Lower congestion</li>
              <li>• Night (20:00-22:00) - Consistent performance</li>
              <li>• Overnight (22:00-06:00) - Minimal delays</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">⚠ Avoid During Peak</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Afternoon Peak (14:00-17:00) - High delays</li>
              <li>• Evening Rush (17:00-20:00) - Congested</li>
              <li>• Weather-sensitive periods</li>
              <li>• Holiday travel days</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TimeSlotAnalysis;