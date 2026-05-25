import Groq from "groq-sdk"
import { portfolioContext } from "@/data/portfolio"

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
})

export async function POST(req: Request) {

    const { message } = await req.json()

    const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "system",
                content: `You are an assistant answering questions about Shijin.
        Use this information: ${portfolioContext}`
            },
            {
                role: "user",
                content: message
            }
        ]
    })

    return Response.json({
        answer: completion.choices[0].message.content
    })
}