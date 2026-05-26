import Groq from "groq-sdk"
import { promises as fs } from 'fs'
import path from 'path'

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
})

export async function POST(req: Request) {

    const { message } = await req.json()

    // Read context from rag-data folder
    const dataDir = path.join(process.cwd(), 'rag-data')
    const files = ['about.txt', 'experience.txt', 'projects.txt', 'skills.txt']
    let portfolioContext = ''
    
    for (const file of files) {
        try {
            const content = await fs.readFile(path.join(dataDir, file), 'utf8')
            portfolioContext += content + '\n\n'
        } catch (error) {
            console.warn(`Could not read ${file}`, error)
        }
    }

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