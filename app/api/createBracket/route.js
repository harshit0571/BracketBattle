import axios from "axios";
import { NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAIKEY,
});

export const POST = async (req, res) => {
  if (req.method === "POST") {
    const body = await req.json();

    const apiKey = process.env.NEXT_PUBLIC_OPENAIKEY;
    const apiUrl = "https://api.openai.com/v1/completions"; // Adjust the endpoint as needed

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Generate a list of ${body.number}, ${body.prompt} separated by commas: "item1, item2, item3"
            `,
          },
        ],
      });

      const data = response.choices[0].message;
      console.log(data);
      return new NextResponse(JSON.stringify(data), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error);
      return new NextResponse(
        JSON.stringify({
          error: "An error occurred while making the request to GPT-3.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({
        error: "An error occurred while making the request to GPT-3.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
