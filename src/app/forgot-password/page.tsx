"use client";

import Link from "next/link";
import { Plane, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background/50 p-4 selection:bg-primary/10">
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 font-bold text-lg">
        <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
          <Plane className="h-5 w-5" />
        </div>
        TripPilot AI
      </Link>

      <Card className="w-full max-w-md glass border-border/50">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Reset password</CardTitle>
          <CardDescription>
            Enter your email address and we will send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Send reset link</Button>
          <div className="text-sm text-center text-muted-foreground">
            <Link href="/login" className="text-primary font-medium flex items-center justify-center hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
