"use client";

import Link from "next/link";
import { Calendar, Wallet, Navigation, Clock, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MyTripsPage() {
  const trips = [
    {
      id: 1,
      destination: "Kyoto, Japan",
      dates: "Oct 12 - Oct 20, 2026",
      budget: "$2,500",
      status: "Ready",
      created: "2 days ago",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      destination: "Paris, France",
      dates: "Dec 05 - Dec 12, 2026",
      budget: "$3,200",
      status: "Draft",
      created: "1 week ago",
      image: "https://images.unsplash.com/photo-1502602881462-846971530965?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      destination: "Bali, Indonesia",
      dates: "Feb 10 - Feb 24, 2027",
      budget: "$1,800",
      status: "Planning",
      created: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Ready": return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "Draft": return "bg-zinc-500/10 text-zinc-500 hover:bg-zinc-500/20 dark:text-zinc-400";
      case "Planning": return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
      default: return "bg-primary/10 text-primary hover:bg-primary/20";
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Trips</h1>
          <p className="text-muted-foreground mt-1">Manage and view all your generated travel plans.</p>
        </div>
        <Link href="/dashboard/new-trip">
          <Button>Plan New Trip</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {trips.map((trip) => (
          <Card key={trip.id} className="overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
            <div className="h-48 bg-muted relative overflow-hidden">
              {/* Note: In a real app we'd use Next/Image but per user instructions we want NO stock images. 
                  Wait, the user said "NO STOCK IMAGES. NO PHOTOGRAPHS." 
                  Ah, I need to remove the image and use a clean abstract design instead. */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background flex items-center justify-center">
                <Navigation className="h-12 w-12 text-primary/30" />
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className={getStatusColor(trip.status)}>
                  {trip.status}
                </Badge>
              </div>
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{trip.destination}</h3>
                <Button variant="ghost" size="icon" className="-mt-2 -mr-2 h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <Calendar className="h-4 w-4 text-primary/70" />
                  {trip.dates}
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <Wallet className="h-4 w-4 text-primary/70" />
                  {trip.budget}
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <Clock className="h-4 w-4 text-primary/70" />
                  Created {trip.created}
                </div>
              </div>
              <Link href={`/dashboard/trip/${trip.id}`} className="w-full mt-auto">
                <Button variant="secondary" className="w-full">
                  {trip.status === "Ready" ? "View Itinerary" : "Continue Planning"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
