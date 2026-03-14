import { ChromaClient } from "chromadb"
import fs from "fs"

const client = new ChromaClient()

async function run() {

  const collection = await client.createCollection({
    name: "portfolio"
  })

  const files = fs.readdirSync("./rag-data")

  for (const file of files) {

    const content = fs.readFileSync(`./rag-data/${file}`, "utf8")

    await collection.add({
      ids: [file],
      documents: [content]
    })

    console.log("Stored:", file)
  }

}

run()