// lib/openai.ts

"use server"

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function getDalleImage (prompt: string) {
    return await  openai.images.generate({
        model: "dall-e-3",
        prompt,
    });
}