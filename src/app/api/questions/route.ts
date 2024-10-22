import { strict_output } from "@/lib/gpt";
import { getAuthSession } from "@/lib/nextauth";
import { getQuestionsSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const runtime = "nodejs";
export const maxDuration = 60; // Set to 60 seconds for Vercel Hobby plan

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to create a game." },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { amount, topic, type } = getQuestionsSchema.parse(body);

    // Limit amount to prevent timeouts
    if (amount > 5) {
      return NextResponse.json(
        { error: "Maximum 5 questions can be generated at once" },
        { status: 400 }
      );
    }

    const questions = await strict_output(
      type === "open_ended"
        ? "You are an AI that generates concise, challenging questions and answers. Be clear and direct."
        : "You are an AI that generates concise MCQ questions with clear, distinct options. Ensure all options are plausible but only one is correct.",
      new Array(amount).fill(
        `Generate a challenging ${
          type === "open_ended" ? "open-ended" : "multiple-choice"
        } question about ${topic}`
      ),
      type === "open_ended"
        ? {
            question: "question",
            answer: "answer with max length of 15 words",
          }
        : {
            question: "question",
            answer: "answer with max length of 15 words",
            option1: "option1 with max length of 15 words",
            option2: "option2 with max length of 15 words",
            option3: "option3 with max length of 15 words",
          },
      "", // default_category
      false, // output_value_only
      "gpt-3.5-turbo", // model
      0.7, // Lower temperature for more focused responses
      2, // Reduce number of tries to save time
      false // verbose
    );

    if (!questions || questions.length === 0) {
      return NextResponse.json(
        { error: "Failed to generate questions. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ questions }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }

    console.error("GPT error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while generating questions." },
      { status: 500 }
    );
  }
}
