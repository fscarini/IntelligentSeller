const express = require ('express')
const {GoogleGenAI} = require ('@google/genai')
const app = express()
app.use(express.json()) // Função middleware 

// API = Coleção de ENDPOINTS
// ENDPOINT = método HTTP, padrão de acesso e funcionalidade

// Método GET = Obtém um conteúdo
// Método POST = Cria um conteúdo
// Método PUT = Atualiza um conteúdo
// Méotodo DELETE = Apaga um conteúdo  

// Padrão de acesso = hostnamename.com/(padrão de acesso)

// Funcionalidade = É a função que que será executada de acordo com o metódo e o padrão de acesso

app.post('/upgrade-product', async (request, response) =>{
    const ai = new GoogleGenAI({
        apiKey: ""
    })
    const prompt = request.body.prompt
    const res = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });
      response.json({"Resposta": res.text})
})

app.listen(3000, () => console.log(" Let's start! "))