"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { useTheme } from "next-themes";

const costData = [
  { name: "Jan", saved: 400, budget: 2400 },
  { name: "Feb", saved: 300, budget: 1398 },
  { name: "Mar", saved: 200, budget: 9800 },
  { name: "Apr", saved: 278, budget: 3908 },
  { name: "May", saved: 189, budget: 4800 },
  { name: "Jun", saved: 239, budget: 3800 },
];

const destinationData = [
  { name: "Europe", value: 40 },
  { name: "Asia", value: 30 },
  { name: "Americas", value: 20 },
  { name: "Africa", value: 10 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--primary) / 0.7)", "hsl(var(--primary) / 0.4)", "hsl(var(--primary) / 0.2)"];

export default function InsightsPage() {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Travel Insights</h1>
        <p className="text-muted-foreground mt-1">Analytics and data on your travel habits and AI optimizations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Average Budget</CardTitle>
            <div className="text-3xl font-bold mt-2">$2,450</div>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">+12% from last year</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Top Travel Style</CardTitle>
            <div className="text-3xl font-bold mt-2">Culture & History</div>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">Appears in 80% of trips</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Planning Time Saved</CardTitle>
            <div className="text-3xl font-bold mt-2">42 Hours</div>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">Estimated by Orchestrator Agent</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Budget vs Savings Over Time</CardTitle>
            <CardDescription>AI optimization savings across your last 6 trips.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                  <YAxis axisLine={false} tickLine={false} fontSize={12} stroke="var(--muted-foreground)" tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    cursor={{ fill: 'var(--secondary)' }} 
                    contentStyle={{ borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--background)' }} 
                  />
                  <Bar dataKey="budget" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Budget" />
                  <Bar dataKey="saved" fill="hsl(var(--primary) / 0.4)" radius={[4, 4, 0, 0]} name="Savings" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Top Destinations</CardTitle>
            <CardDescription>Breakdown of your generated trips by region.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={destinationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="var(--background)"
                    strokeWidth={2}
                  >
                    {destinationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--background)' }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {destinationData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    {entry.name}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
