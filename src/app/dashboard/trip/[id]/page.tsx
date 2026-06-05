"use client";

import { MapPin, Calendar, Users, Wallet, Download, Bookmark, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TripResultPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">AI Generated Plan</Badge>
          <h1 className="text-3xl font-bold tracking-tight">Kyoto, Japan</h1>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground text-sm">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Oct 12 - Oct 20</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> 2 Travelers</span>
            <span className="flex items-center gap-1"><Wallet className="h-4 w-4" /> $2,500 Budget</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Cultural & Nature</span>
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
              {[
                { day: 1, title: "Arrival & Gion District", activities: ["Check-in at Ryokan", "Walk through Yasaka Shrine", "Dinner in Pontocho Alley"] },
                { day: 2, title: "Historical Temples", activities: ["Kinkaku-ji (Golden Pavilion)", "Ryoan-ji Zen Garden", "Nishiki Market Tour"] },
                { day: 3, title: "Nature & Bamboo", activities: ["Arashiyama Bamboo Grove", "Tenryu-ji Temple", "Traditional Tea Ceremony"] },
              ].map((day) => (
                <Card key={day.day} className="border-l-4 border-l-primary hover:border-l-primary/80 transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Day {day.day}: {day.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {day.activities.map((act, i) => (
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
            <Button variant="ghost" className="w-full mt-4 border border-dashed">Show all 8 days</Button>
          </section>
        </div>

        <div className="space-y-8">
          {/* Budget Summary */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Budget Summary</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-1">$2,410</div>
                <p className="text-sm text-muted-foreground mb-6">Estimated total cost ($90 under budget)</p>
                
                <div className="space-y-4">
                  {[
                    { category: "Accommodation", amount: "$900", percent: 37 },
                    { category: "Flights", amount: "$800", percent: 33 },
                    { category: "Food", amount: "$450", percent: 18 },
                    { category: "Activities", amount: "$260", percent: 12 },
                  ].map((item) => (
                    <div key={item.category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{item.category}</span>
                        <span>{item.amount}</span>
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
          <section>
            <h2 className="text-xl font-semibold mb-4">Recommended Stay</h2>
            <Card className="overflow-hidden">
              <div className="h-32 bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white font-semibold">Kyoto Granbell Hotel</div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center text-sm mb-2">
                  <Badge variant="outline">Gion District</Badge>
                  <span className="font-medium">$150/night</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  Modern design meets traditional Japanese aesthetics. Perfect location for exploring the cultural heart of Kyoto.
                </p>
                <Button size="sm" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
