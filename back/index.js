require('dotenv').config()
const express = require ('express')
const cors = require('cors');
const {GoogleGenAI} = require ('@google/genai')
const app = express()

app.use(cors()) // Isso permite requisições de todas as origens
app.use(express.json()) // Para processar o corpo das requisições como JSON (middleware)

// API = Coleção de ENDPOINTS
// ENDPOINT = método HTTP, padrão de acesso e funcionalidade

app.post('/upgrade-product', async (request, response) =>{
    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    })
    const prompt = request.body.prompt
    const res = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });
      response.json({"Resposta": res.text})
})

app.listen(3000, () => console.log(" Let's start! "))