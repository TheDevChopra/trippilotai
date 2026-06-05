"use client";

import { Map, Wallet, Search, Sparkles, Users, Plane, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AgentsPage() {
  const agents = [
    { 
      title: "Planner Agent", 
      icon: Map, 
      desc: "Creates the core day-by-day itinerary. Analyzes travel times, optimal routing, and pace.",
      status: "Active",
      capabilities: ["Route Optimization", "Time Management", "Pace Balancing"]
    },
    { 
      title: "Budget Agent", 
      icon: Wallet, 
      desc: "Monitors and optimizes spending across categories to maximize value without breaking the bank.",
      status: "Active",
      capabilities: ["Cost Forecasting", "Category Allocation", "Deal Hunting"]
    },
    { 
      title: "Research Agent", 
      icon: Search, 
      desc: "Collects destination intelligence, weather forecasts, visa requirements, and local customs.",
      status: "Active",
      capabilities: ["Web Scraping", "Weather Analysis", "Cultural Context"]
    },
    { 
      title: "Recommendation Agent", 
      icon: Sparkles, 
      desc: "Suggests hidden gems, highly-rated restaurants, and unique activities matching your vibe.",
      status: "Active",
      capabilities: ["Semantic Search", "Preference Matching", "Trend Analysis"]
    },
    { 
      title: "Group Consensus Agent", 
      icon: Users, 
      desc: "Handles conflicting group preferences and negotiates compromises for the perfect shared experience.",
      status: "Standby",
      capabilities: ["Conflict Resolution", "Voting Systems", "Compromise Generation"]
    },
    { 
      title: "Orchestrator Agent", 
      icon: Plane, 
      desc: "Coordinates all other agents, aggregates their outputs, and finalizes the master trip plan.",
      status: "Active",
      capabilities: ["Workflow Management", "Data Aggregation", "Final Review"]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Agents</h1>
        <p className="text-muted-foreground mt-1">Your dedicated team of specialized travel assistants.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {agents.map((agent, i) => (
          <Card key={i} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <agent.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant={agent.status === "Active" ? "default" : "secondary"}>
                  {agent.status}
                </Badge>
              </div>
              <CardTitle>{agent.title}</CardTitle>
              <CardDescription className="text-sm mt-2 leading-relaxed">
                {agent.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-end mt-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Capabilities</div>
                <ul className="space-y-1.5">
                  {agent.capabilities.map((cap, j) => (
                    <li key={j} className="text-sm flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary/70" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
