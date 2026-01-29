
import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates an AI response for investment inquiries.
 */
export async function askAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a senior investment advisor at Lewis Simpson Real Estate, an elite UK property consultancy. You provide data-driven, professional, and sophisticated insights on the UK real estate market, including yields, regeneration zones, and portfolio strategy. Keep responses concise, helpful, and exclusive in tone.",
      },
    });
    
    return response.text || "I apologize, I am unable to process your request at the moment. Please contact our senior partners directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our strategic intelligence desk is currently unavailable. Please try again shortly or contact us at hq@lewissimpson.com.";
  }
}
