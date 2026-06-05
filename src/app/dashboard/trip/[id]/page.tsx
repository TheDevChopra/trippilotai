"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MapPin, Calendar, Users, Wallet, Download, Bookmark, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TripResultPage() {
  const params = useParams();
  const router = useRouter();
  const [tripData, setTripData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id === "generated") {
      const stored = localStorage.getItem("generatedTrip");
      if (stored) {
        try {
          setTripData(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse trip data", e);
        }
      }
    } else {
      // Fallback mock data if not the generated one
      setTripData({
        destination: "Kyoto, Japan",
        dates: "Oct 12 - Oct 20",
        currency: "USD",
        budgetSummary: {
          total: 2500,
          status: "Under Budget",
          breakdown: [
            { category: "Accommodation", amount: 900, percent: 37 },
            { category: "Flights", amount: 800, percent: 33 },
            { category: "Food", amount: 450, percent: 18 },
            { category: "Activities", amount: 260, percent: 12 },
          ]
        },
        recommendedStay: {
          name: "Kyoto Granbell Hotel",
          neighborhood: "Gion District",
          pricePerNight: 150,
          description: "Modern design meets traditional Japanese aesthetics. Perfect location for exploring the cultural heart of Kyoto."
        },
        itinerary: [
          { day: 1, title: "Arrival & Gion District", activities: ["Check-in at Ryokan", "Walk through Yasaka Shrine", "Dinner in Pontocho Alley"] },
          { day: 2, title: "Historical Temples", activities: ["Kinkaku-ji (Golden Pavilion)", "Ryoan-ji Zen Garden", "Nishiki Market Tour"] },
          { day: 3, title: "Nature & Bamboo", activities: ["Arashiyama Bamboo Grove", "Tenryu-ji Temple", "Traditional Tea Ceremony"] },
        ]
      });
    }
    setLoading(false);
  }, [params.id]);

  if (loading) return null;

  if (!tripData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <AlertTriangle className="h-12 w-12 text-destructive" />
        <h2 className="text-xl font-bold">Trip Data Not Found</h2>
        <Button onClick={() => router.push("/dashboard/new-trip")}>Plan a New Trip</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">AI Generated Plan</Badge>
          <h1 className="text-3xl font-bold tracking-tight">{tripData.destination}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground text-sm">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {tripData.dates}</span>
            <span className="flex items-center gap-1"><Wallet className="h-4 w-4" /> {tripData.budgetSummary.total} {tripData.currency}</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Custom Plan</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="glass bg-background/50">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>
            <Bookmark className="mr-2 h-4 w-4" /> Save Trip
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Daily Itinerary */}
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Daily Itinerary
            </h2>
            <div className="space-y-4">
              {tripData.itinerary?.map((day: any, idx: number) => (
                <Card key={idx} className="border-l-4 border-l-primary hover:border-l-primary/80 transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Day {day.day}: {day.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {day.activities?.map((act: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary/70 mt-0.5 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          {/* Budget Summary */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Budget Summary</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-1">
                  {tripData.budgetSummary.total} {tripData.currency}
                </div>
                <p className="text-sm text-muted-foreground mb-6">Status: {tripData.budgetSummary.status}</p>
                
                <div className="space-y-4">
                  {tripData.budgetSummary.breakdown?.map((item: any, idx: number) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{item.category}</span>
                        <span>{item.amount} {tripData.currency}</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Recommended Hotel */}
          {tripData.recommendedStay && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Recommended Stay</h2>
              <Card className="overflow-hidden">
                <div className="h-32 bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white font-semibold">{tripData.recommendedStay.name}</div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <Badge variant="outline">{tripData.recommendedStay.neighborhood}</Badge>
                    <span className="font-medium">{tripData.recommendedStay.pricePerNight} {tripData.currency}/night</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    {tripData.recommendedStay.description}
                  </p>
                  <Button size="sm" className="w-full">View Details</Button>
                </CardContent>
              </Card>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
