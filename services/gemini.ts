
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Smart Investment Assistant for Lewis Simpson Real Estate. 
You provide expert advice on UK property investment, rental yields, and the UK housing market. 
Lewis Simpson Real Estate helps buyers and investors discover high-quality UK property opportunities.

Key information about Lewis Simpson Real Estate:
- 20+ years of experience.
- 1,900+ properties sold.
- 100+ projects delivered.
- Locations: London, Manchester, Birmingham, Leeds, Liverpool, Bradford, Sheffield, York.
- Focus: Buy-to-live, Buy-to-let, high rental yields, capital growth.

Your tone should be professional, insightful, and helpful. 
When asked about properties, mention that we have handpicked developments in major UK cities.
If the user wants specific property details or a consultation, encourage them to "Book a Free Consultation" via the website.
Keep answers concise and scan-friendly.
`;

export async function getGeminiResponse(userPrompt: string) {
  try {
    // Correct usage of process.env.API_KEY directly in constructor as per @google/genai guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently unable to process your request. Please try again or contact our team directly for expert advice.";
  }
}
