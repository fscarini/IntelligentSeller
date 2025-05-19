import React, { useState } from 'react'

const ProductUpgrader = () => {
    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleInputChange = (event) => {
        setPrompt(event.target.value)
    };


    const handleSubmit = async () => {
        setLoading(true)
        setError(null)
        setResponse('')

        try {
            const apiEndpoint = 'http://localhost:3000/upgrade-product'

            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ prompt })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'Erro ao se comunicar com o servidor.')
            }

            const data = await response.json()
            setResponse(data.Resposta)
        } catch (error) {
            console.error('Erro ao enviar o prompt: ', error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="col-xl-6 d-flex flex-column ">
            <label htmlFor="geminiPrompt" className="form-label">Type here the message for Gemini AI</label>
            <input
                className="form-control form-control-lg" 
                id="geminiPrompt"
                type="text"
                aria-label=".form-control-lg example"
                value={prompt}
                onChange={handleInputChange}
                placeholder="Say hello to the Gemini AI!"
                rows={5}
                cols={50}
            />
            <div className="mt-3 align-self-center">
                <button onClick={handleSubmit} disabled={loading} className="btn btn-primary">
                    {loading ? 'Loading...' : 'Send prompt'}
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
            {response && (
                <div className="mt-4 align-self-center">
                    <h2>Gemini Response:</h2>
                    <p>{response}</p>
                </div>
            )}
        </div>
    )
}

export default ProductUpgrader