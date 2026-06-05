"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Plane, 
  LayoutDashboard, 
  PlusCircle, 
  Map, 
  Bot, 
  LineChart, 
  Settings,
  Bell,
  Menu,
  X,
  User
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "New Trip", href: "/dashboard/new-trip", icon: PlusCircle },
    { name: "My Trips", href: "/dashboard/my-trips", icon: Map },
    { name: "Agents", href: "/dashboard/agents", icon: Bot },
    { name: "Insights", href: "/dashboard/insights", icon: LineChart },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur flex h-16 items-center justify-between px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-lg">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
            <Plane className="h-5 w-5" />
          </div>
          TripPilot
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className={cn(
        "fixed md:sticky top-0 left-0 z-40 h-[calc(100vh-4rem)] md:h-screen w-64 border-r border-border/40 bg-background/95 backdrop-blur-md md:bg-background transition-transform duration-300 ease-in-out",
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="hidden md:flex h-16 items-center px-6 border-b border-border/40">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Plane className="h-5 w-5" />
            </div>
            TripPilot
          </Link>
        </div>
        <div className="py-6 px-4 flex flex-col gap-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} onClick={() => setSidebarOpen(false)}>
                <div className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                )}>
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Desktop Header */}
        <header className="hidden md:flex h-16 items-center justify-between px-8 border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-30">
          <div></div> {/* Spacer for left side if needed */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-destructive rounded-full border border-background"></span>
            </Button>
            <ThemeToggle />
            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 cursor-pointer">
              <User className="h-4 w-4 text-primary" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
