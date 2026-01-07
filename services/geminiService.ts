import { GoogleGenAI } from "@google/genai";
import { ItineraryRequest } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateItinerary = async (request: ItineraryRequest): Promise<string> => {
  try {
    const prompt = `
      Act as an expert travel guide. Create a detailed, day-by-day travel itinerary for a trip to ${request.destination}.
      
      Details:
      - Duration: ${request.duration} days
      - Budget Level: ${request.budget}
      - Interests: ${request.interests}

      Format the response using clear Markdown. 
      Include a catchy title, a brief summary of the destination, and then the daily breakdown. 
      For each day, suggest morning, afternoon, and evening activities with estimated costs if possible.
      Add a "Pro Tips" section at the end.
      Keep the tone exciting and professional.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a world-class travel planner helping users create dream vacations.",
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on this simple task
      }
    });

    return response.text || "Sorry, I couldn't generate an itinerary at this time. Please try again.";
  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw new Error("Failed to generate itinerary");
  }
};