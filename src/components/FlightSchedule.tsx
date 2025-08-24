import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Plane, Calendar } from "lucide-react";

interface Flight {
  id: number;
  flightNumber: string;
  dates: string[];
  status: 'on-time' | 'delayed' | 'cancelled';
  landedTime?: string;
  scheduledTime?: string;
  airport: string;
  airportCode: string;
}

const FlightSchedule = () => {
  // Real flight data based on the uploaded images
  const mumbaiFlights: Flight[] = [
    { id: 1, flightNumber: "AI2509", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "8:01 AM", airport: "Mumbai", airportCode: "BOM" },
    { id: 2, flightNumber: "AI2625", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "7:05 AM", airport: "Mumbai", airportCode: "BOM" },
    { id: 3, flightNumber: "6E762", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "8:07 AM", airport: "Mumbai", airportCode: "BOM" },
    { id: 4, flightNumber: "QP1891", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "7:39 AM", airport: "Mumbai", airportCode: "BOM" },
    { id: 5, flightNumber: "6E5352", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "7:56 AM", airport: "Mumbai", airportCode: "BOM" },
    { id: 6, flightNumber: "6E1185", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'delayed', landedTime: "9:52 AM", scheduledTime: "8:30 AM", airport: "Mumbai", airportCode: "BOM" },
    { id: 7, flightNumber: "6E5349", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "2:40 PM", airport: "Mumbai", airportCode: "BOM" },
    { id: 8, flightNumber: "QO342", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'delayed', landedTime: "9:26 AM", scheduledTime: "8:45 AM", airport: "Mumbai", airportCode: "BOM" },
    { id: 9, flightNumber: "6E6794", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "10:56 AM", airport: "Mumbai", airportCode: "BOM" },
    { id: 10, flightNumber: "6E446", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'delayed', landedTime: "12:32 PM", scheduledTime: "11:15 AM", airport: "Mumbai", airportCode: "BOM" }
  ];

  const delhiFlights: Flight[] = [
    { id: 11, flightNumber: "AI2428", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "8:15 AM", airport: "Delhi", airportCode: "DEL" },
    { id: 12, flightNumber: "6E1601", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "9:22 AM", airport: "Delhi", airportCode: "DEL" },
    { id: 13, flightNumber: "AI2821", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "8:25 AM", airport: "Delhi", airportCode: "DEL" },
    { id: 14, flightNumber: "AI601", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'delayed', landedTime: "9:08 AM", scheduledTime: "8:30 AM", airport: "Delhi", airportCode: "DEL" },
    { id: 15, flightNumber: "SG115", dates: ["25-Jul-25", "24-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "8:50 AM", airport: "Delhi", airportCode: "DEL" },
    { id: 16, flightNumber: "6E301", dates: ["25-Jul-25", "24-Jul-25", "23-Jul-25", "22-Jul-25", "21-Jul-25", "20-Jul-25", "19-Jul-25"], status: 'on-time', landedTime: "7:57 AM", airport: "Delhi", airportCode: "DEL" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time': return 'bg-accent';
      case 'delayed': return 'bg-warning';
      case 'cancelled': return 'bg-destructive';
      default: return 'bg-secondary';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'on-time': return <Badge className="bg-accent/10 text-accent border-accent/20">On Time</Badge>;
      case 'delayed': return <Badge className="bg-warning/10 text-warning border-warning/20">Delayed</Badge>;
      case 'cancelled': return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Cancelled</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const FlightList = ({ flights }: { flights: Flight[] }) => (
    <div className="space-y-4">
      {flights.map((flight) => (
        <Card key={flight.id} className="p-4 hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className={`w-1 h-8 rounded-full ${getStatusColor(flight.status)}`} />
                <div>
                  <h3 className="font-semibold text-lg">{flight.flightNumber}</h3>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{flight.airport} ({flight.airportCode})</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right space-y-1">
              {getStatusBadge(flight.status)}
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Landed {flight.landedTime}</span>
              </div>
              {flight.scheduledTime && flight.status === 'delayed' && (
                <div className="text-xs text-muted-foreground">
                  Scheduled: {flight.scheduledTime}
                </div>
              )}
            </div>
          </div>
          
          <div className="border-t pt-3">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Operating Dates:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {flight.dates.map((date, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {date}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Flight Schedules</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-time flight data from Mumbai and Delhi airports with detailed scheduling information
        </p>
      </div>

      <Tabs defaultValue="mumbai" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="mumbai" className="flex items-center space-x-2">
            <Plane className="h-4 w-4" />
            <span>Mumbai (BOM)</span>
          </TabsTrigger>
          <TabsTrigger value="delhi" className="flex items-center space-x-2">
            <Plane className="h-4 w-4" />
            <span>Delhi (DEL)</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mumbai" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm font-medium">On Time: 8 flights</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-warning" />
                <span className="text-sm font-medium">Delayed: 2 flights</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm font-medium">Cancelled: 0 flights</span>
              </div>
            </Card>
          </div>
          <FlightList flights={mumbaiFlights} />
        </TabsContent>

        <TabsContent value="delhi" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm font-medium">On Time: 5 flights</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-warning" />
                <span className="text-sm font-medium">Delayed: 1 flight</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm font-medium">Cancelled: 0 flights</span>
              </div>
            </Card>
          </div>
          <FlightList flights={delhiFlights} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FlightSchedule;