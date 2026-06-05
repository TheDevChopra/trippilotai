"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Map, 
  Wallet, 
  Sparkles, 
  Users, 
  Search, 
  ArrowRight,
  Clock,
  HeartHandshake
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/10">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Plane className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">TripPilot AI</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Start Planning</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm border bg-background glass-dark">
                  <Sparkles className="h-3.5 w-3.5 mr-2 text-primary" />
                  Multi-Agent AI System
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
                  Plan Smarter. <span className="text-muted-foreground">Travel Better.</span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                  AI agents collaborate to build personalized, budget-optimized travel plans in minutes. From your budget to boarding pass, we handle the heavy lifting.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 rounded-full">
                    Start Planning <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 rounded-full glass">
                    Watch Demo
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Your AI Travel Team</h2>
              <p className="mt-4 text-lg text-muted-foreground text-balance">
                Five specialized agents working together to perfect every detail of your trip.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Planner Agent", icon: Map, desc: "Crafts the perfect day-by-day itinerary based on your pace." },
                { title: "Budget Agent", icon: Wallet, desc: "Optimizes spending to maximize experiences within your budget." },
                { title: "Research Agent", icon: Search, desc: "Scours data for hidden gems, logistics, and local insights." },
                { title: "Recommendation Agent", icon: Sparkles, desc: "Suggests activities and dining that match your vibe." },
                { title: "Group Consensus Agent", icon: Users, desc: "Balances conflicting preferences for group harmony." },
                { title: "Orchestrator Agent", icon: Plane, desc: "Coordinates all agents to deliver a seamless master plan." }
              ].map((agent, i) => (
                <Card key={i} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-md glass bg-background/50">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <agent.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{agent.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{agent.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">Three simple steps to your dream vacation.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Tell us about your trip", desc: "Share your destination, dates, budget, and travel style." },
                { step: "02", title: "AI agents collaborate", desc: "Our multi-agent system negotiates and builds your plan." },
                { step: "03", title: "Receive your personalized plan", desc: "Get a comprehensive, bookable itinerary in minutes." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="text-6xl font-black text-primary/10 mb-6">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-primary text-primary-foreground rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Save Time", icon: Clock, desc: "Cut planning time from hours to minutes." },
                { title: "Reduce Stress", icon: HeartHandshake, desc: "No more overwhelming tabs and spreadsheets." },
                { title: "Stay in Budget", icon: Wallet, desc: "Smart allocations keep you on track." },
                { title: "Better Experiences", icon: Sparkles, desc: "Discover places you would have missed." }
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6">
                  <benefit.icon className="h-10 w-10 mb-4 opacity-80" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1 rounded-md">
              <Plane className="h-4 w-4" />
            </div>
            <span className="font-semibold">TripPilot AI</span>
          </div>
          <div className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} TripPilot AI. All rights reserved.
          </div>
          <div>
            <Badge variant="outline" className="text-xs text-muted-foreground font-normal rounded-full px-3 py-1 bg-secondary/50">
              Capstone Project – Product Management with Generative & Agentic AI, BITSoM 2026
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}
