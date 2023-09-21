import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  if (req.method === "POST") {
    const { prompt } = req.body;
    const apiKey = process.env.NEXT_PUBLIC_OPENAIKEY;
    const apiUrl = "https://api.openai.com/v1/engines/davinci/completions"; // Adjust the endpoint as needed

    try {
      const response = await axios.post(
        apiUrl,
        {
          prompt,
          max_tokens: 50, // You can adjust this value
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const { data } = response;
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
