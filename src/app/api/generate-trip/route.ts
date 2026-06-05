import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the TripPilot AI Orchestrator Agent. 
You are a master travel planner. You receive inputs about a trip (destination, dates, budget, style, preferences) and you must generate a highly detailed, realistic trip plan.

OUTPUT IN STRICT JSON FORMAT. Do NOT wrap the JSON in markdown code blocks. The response should be parseable directly by JSON.parse().

The JSON schema MUST EXACTly match this structure:
{
  "destination": "String",
  "dates": "String",
  "budgetSummary": {
    "total": "Number",
    "status": "String (e.g. Under Budget)",
    "breakdown": [
      { "category": "Accommodation", "amount": "Number", "percent": "Number" },
      { "category": "Flights", "amount": "Number", "percent": "Number" },
      { "category": "Food", "amount": "Number", "percent": "Number" },
      { "category": "Activities", "amount": "Number", "percent": "Number" }
    ]
  },
  "recommendedStay": {
    "name": "String",
    "neighborhood": "String",
    "pricePerNight": "Number",
    "description": "String"
  },
  "itinerary": [
    {
      "day": "Number",
      "title": "String",
      "activities": ["String", "String", "String"]
    }
  ]
}

Ensure the budget amounts add up exactly to the total budget provided by the user (or slightly under). Generate at least 3 days of itinerary. Be creative, specific, and realistic.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { destination, dates, budget, currency, style, preferences, travelers, accommodation } = body;

    const userPrompt = `
      Plan a trip with the following details:
      Destination: ${destination}
      Dates: ${dates}
      Travelers: ${travelers}
      Total Budget: ${budget} ${currency}
      Accommodation Type: ${accommodation}
      Travel Style: ${style}
      Preferences: ${preferences.join(", ")}
    `;

    // Call local Ollama API
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3:latest",
        system: SYSTEM_PROMPT,
        prompt: userPrompt,
        stream: false,
        format: "json"
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();
    const responseText = data.response;
    
    // Attempt to parse the response text as JSON
    let tripData;
    try {
      tripData = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse Ollama response as JSON:", responseText);
      return NextResponse.json({ error: "Failed to generate valid trip format. Please try again." }, { status: 500 });
    }

    // Add currency to the result
    tripData.currency = currency;

    return NextResponse.json(tripData);

  } catch (error: any) {
    console.error("Generate trip error:", error);
    return NextResponse.json({ error: error.message || "Failed to generate trip" }, { status: 500 });
  }
}
