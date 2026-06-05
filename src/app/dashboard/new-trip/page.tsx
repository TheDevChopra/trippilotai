"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Calendar, Users, Wallet, Home, Compass, 
  Coffee, TreePine, Moon, ShoppingBag, Landmark, Activity,
  CheckCircle2, Loader2, Plane, Bot, Sparkles, ArrowRight, ArrowLeft
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: "destination", title: "Where to?" },
  { id: "budget", title: "Budget & Stay" },
  { id: "style", title: "Travel Style" },
  { id: "preferences", title: "Preferences" },
  { id: "generate", title: "Generate" }
];

export default function NewTripPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStage, setGenerationStage] = useState(0);

  const [formData, setFormData] = useState({
    destination: "",
    dates: "",
    travelers: "2",
    budget: "",
    currency: "USD",
    accommodation: "Hotel",
    style: "Adventure",
    preferences: [] as string[]
  });

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setCurrentStep(4);
    
    // Simulate multi-agent workflow
    const timings = [1500, 3000, 4500, 6000, 7500];
    
    timings.forEach((time, index) => {
      setTimeout(() => {
        setGenerationStage(index + 1);
      }, time);
    });

    setTimeout(() => {
      router.push("/dashboard/trip/1");
    }, 9000);
  };

  const togglePreference = (pref: string) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(pref)
        ? prev.preferences.filter(p => p !== pref)
        : [...prev.preferences, pref]
    }));
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      {!isGenerating ? (
        <>
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Plan a New Trip</h1>
            <p className="text-muted-foreground mt-1">Let our AI agents craft your perfect itinerary.</p>
          </div>

          {/* Progress bar */}
          <div className="mb-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-secondary -translate-y-1/2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-in-out"
                style={{ width: `${(currentStep / (STEPS.length - 2)) * 100}%` }}
              />
            </div>
            <div className="relative flex justify-between">
              {STEPS.slice(0, 4).map((step, index) => (
                <div 
                  key={step.id} 
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border-2 transition-colors bg-background",
                    index <= currentStep ? "border-primary text-primary" : "border-muted text-muted-foreground"
                  )}
                >
                  {index < currentStep ? <CheckCircle2 className="w-4 h-4" /> : index + 1}
                </div>
              ))}
            </div>
          </div>

          <Card className="glass relative overflow-hidden min-h-[400px] flex flex-col">
            <CardHeader>
              <CardTitle>{STEPS[currentStep].title}</CardTitle>
              <CardDescription>
                {currentStep === 0 && "Let's start with the basics."}
                {currentStep === 1 && "Help the Budget Agent optimize your spending."}
                {currentStep === 2 && "What kind of experience are you looking for?"}
                {currentStep === 3 && "Fine-tune your trip with specific interests."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* STEP 1 */}
                  {currentStep === 0 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Destination</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            className="pl-10" 
                            placeholder="e.g. Tokyo, Japan" 
                            value={formData.destination}
                            onChange={(e) => setFormData({...formData, destination: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Dates</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              className="pl-10" 
                              placeholder="Oct 12 - Oct 20" 
                              value={formData.dates}
                              onChange={(e) => setFormData({...formData, dates: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Travelers</Label>
                          <div className="relative">
                            <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              type="number" 
                              className="pl-10" 
                              min="1" 
                              value={formData.travelers}
                              onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2 */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Total Budget</Label>
                          <div className="relative">
                            <Wallet className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              type="number" 
                              className="pl-10" 
                              placeholder="2500" 
                              value={formData.budget}
                              onChange={(e) => setFormData({...formData, budget: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Currency</Label>
                          <Input 
                            value={formData.currency}
                            onChange={(e) => setFormData({...formData, currency: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Accommodation</Label>
                        <div className="grid grid-cols-3 gap-3">
                          {["Hotel", "Hostel", "Airbnb"].map(type => (
                            <div 
                              key={type}
                              onClick={() => setFormData({...formData, accommodation: type})}
                              className={cn(
                                "border rounded-lg p-3 text-center cursor-pointer transition-all",
                                formData.accommodation === type ? "border-primary bg-primary/5 text-primary font-medium" : "hover:border-primary/50 text-muted-foreground"
                              )}
                            >
                              <Home className="h-5 w-5 mx-auto mb-1 opacity-70" />
                              <span className="text-sm">{type}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3 */}
                  {currentStep === 2 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {["Adventure", "Luxury", "Relaxation", "Family", "Business", "Culture"].map(style => (
                        <div 
                          key={style}
                          onClick={() => setFormData({...formData, style})}
                          className={cn(
                            "border rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all",
                            formData.style === style ? "border-primary bg-primary text-primary-foreground shadow-md" : "hover:border-primary/50 text-muted-foreground hover:bg-secondary/30"
                          )}
                        >
                          <Compass className="h-6 w-6 mb-2" />
                          <span className="font-medium text-sm">{style}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* STEP 4 */}
                  {currentStep === 3 && (
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "Food", icon: Coffee },
                        { name: "Nature", icon: TreePine },
                        { name: "Nightlife", icon: Moon },
                        { name: "Shopping", icon: ShoppingBag },
                        { name: "History", icon: Landmark },
                        { name: "Wellness", icon: Activity }
                      ].map(pref => {
                        const isSelected = formData.preferences.includes(pref.name);
                        return (
                          <div 
                            key={pref.name}
                            onClick={() => togglePreference(pref.name)}
                            className={cn(
                              "border rounded-lg p-3 flex items-center gap-3 cursor-pointer transition-all",
                              isSelected ? "border-primary bg-primary/5" : "hover:border-primary/50"
                            )}
                          >
                            <div className={cn("p-2 rounded-md", isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground")}>
                              <pref.icon className="h-4 w-4" />
                            </div>
                            <span className={cn("font-medium text-sm", isSelected ? "text-foreground" : "text-muted-foreground")}>{pref.name}</span>
                            {isSelected && <CheckCircle2 className="h-4 w-4 text-primary ml-auto" />}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-border/50 bg-secondary/10 pt-6">
              <Button 
                variant="ghost" 
                onClick={handleBack} 
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              {currentStep < 3 ? (
                <Button onClick={handleNext}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleGenerate} className="bg-gradient-to-r from-primary to-primary/80">
                  <Sparkles className="mr-2 h-4 w-4" /> Generate Plan
                </Button>
              )}
            </CardFooter>
          </Card>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 animate-ping opacity-20 bg-primary rounded-full"></div>
            <div className="relative bg-background border shadow-xl p-6 rounded-full flex items-center justify-center">
              <Plane className="h-12 w-12 text-primary animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Agents are collaborating...</h2>
            <p className="text-muted-foreground">Orchestrating your perfect trip to {formData.destination || "your destination"}.</p>
          </div>

          <div className="w-full max-w-md space-y-4 text-left mx-auto">
            {[
              { id: 1, name: "Planner Agent", desc: "Structuring timeline..." },
              { id: 2, name: "Budget Agent", desc: "Optimizing costs..." },
              { id: 3, name: "Research Agent", desc: "Gathering intel..." },
              { id: 4, name: "Recommendation Agent", desc: "Selecting activities..." },
              { id: 5, name: "Orchestrator Agent", desc: "Finalizing master plan..." }
            ].map((agent) => (
              <motion.div 
                key={agent.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: generationStage >= agent.id ? 1 : 0.4,
                  y: 0 
                }}
                className="flex items-center gap-4 p-3 rounded-lg border bg-card"
              >
                {generationStage > agent.id ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : generationStage === agent.id ? (
                  <Loader2 className="h-5 w-5 text-primary animate-spin" />
                ) : (
                  <Bot className="h-5 w-5 text-muted-foreground" />
                )}
                <div>
                  <div className="font-medium text-sm">{agent.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {generationStage > agent.id ? "Complete" : generationStage === agent.id ? agent.desc : "Waiting..."}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
