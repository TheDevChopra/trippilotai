"use client";

import Link from "next/link";
import { PlusCircle, Map, Bot, ArrowRight, Calendar, Wallet, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back. Here is your travel command center.</p>
        </div>
        <Link href="/dashboard/new-trip">
          <Button className="w-full sm:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            Plan New Trip
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <Card className="bg-primary/5 border-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Map className="h-5 w-5 text-primary" /> Upcoming Trips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">2</div>
            <p className="text-sm text-muted-foreground mt-1">Next one in 14 days</p>
          </CardContent>
        </Card>
        
        <Card className="bg-secondary/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" /> AI Agents Active
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">5/5</div>
            <p className="text-sm text-muted-foreground mt-1">All systems nominal</p>
          </CardContent>
        </Card>

        <Card className="bg-secondary/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" /> Budget Optimized
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$1.2k</div>
            <p className="text-sm text-muted-foreground mt-1">Saved across all trips</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Recent Trips */}
        <div className="col-span-1 lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Trips</h2>
            <Link href="/dashboard/my-trips" className="text-sm text-primary hover:underline flex items-center">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <Card className="group hover:border-primary/20 transition-all">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-48 h-32 sm:h-auto bg-muted rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none relative overflow-hidden flex items-center justify-center">
                <Navigation className="h-8 w-8 text-muted-foreground/50" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Kyoto, Japan</h3>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Ready</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Oct 12 - Oct 20</span>
                    <span className="flex items-center gap-1"><Wallet className="h-3.5 w-3.5" /> $2,500</span>
                  </div>
                </div>
                <Link href="/dashboard/trip/1">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">View Itinerary</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Agent Status */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Agent Status</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border/50">
                {['Planner Agent', 'Budget Agent', 'Research Agent', 'Recommendation Agent'].map((agent, i) => (
                  <div key={i} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                      <span className="font-medium text-sm">{agent}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Idle</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
