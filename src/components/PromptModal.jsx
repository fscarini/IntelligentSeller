import React, { useState } from 'react'

const categorias = {
    Hamburguers: ['Cheeseburger Tradicional', 'Chicken Burger Apimentado', 'Texas Burguer'],
    Bebidas: ['Refrigerante Lata', 'Suco Natural', 'Cerveja Artesanal'],

};

const PromptModal = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
    const [produtoSelecionado, setProdutoSelecionado] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async () => {
        if (!categoriaSelecionada || !produtoSelecionado) {
            setError('Selecione uma categoria e um produto.')
            return;
        }

        setLoading(true)
        setError(null)
        setResponse('')

        const prompt = `Crie apenas 1 frase curta, persuasiva e direta, com no máximo 200 caracteres, para aumentar o ticket médio da venda do produto: "${produtoSelecionado}" da categoria "${categoriaSelecionada}".
        A sugestão deve envolver um produto de alta margem (em caso de alimentos como adicionais, molhos, bebida ou sobremesa), e usar linguagem jovem, casual e moderna. Adicione emojis para tornar a frase mais atrativa. 
        Evite qualquer explicação adicional, listas, marcações como asteriscos ou destaques. Retorne somente a frase pronta com um call to action no final com o preço da nova oferta, no formato ideal para exibição em tela de vendas.`


        try {
            const apiEndpoint = 'http://localhost:3000/upgrade-product';

            const res = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });

            if (!res.ok) {
                const errorData = await res.json()
                throw new Error(errorData.error || 'Erro ao se comunicar com o servidor.')
            }

            const data = await res.json()
            setResponse(data.Resposta)
        } catch (error) {
            console.error('Erro ao enviar o prompt: ', error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#geminiPromptModal"
            >
                Convert with IntelligentSeller NOW!
            </button>

            <div
                className="modal fade"
                id="geminiPromptModal"
                tabIndex="-1"
                aria-labelledby="geminiPromptModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="geminiPromptModalLabel">
                                Sugestão de Venda com Gemini
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Fechar"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Categoria</label>
                                <select
                                    className="form-select"
                                    value={categoriaSelecionada}
                                    onChange={(e) => {
                                        setCategoriaSelecionada(e.target.value);
                                        setProdutoSelecionado('');
                                        setResponse('');
                                    }}
                                >
                                    <option value="">Selecione uma categoria</option>
                                    {Object.keys(categorias).map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {categoriaSelecionada && (
                                <div className="mb-3">
                                    <label className="form-label">Produto</label>
                                    <select
                                        className="form-select"
                                        value={produtoSelecionado}
                                        onChange={(e) => setProdutoSelecionado(e.target.value)}
                                    >
                                        <option value="">Selecione um produto</option>
                                        {categorias[categoriaSelecionada].map((produto) => (
                                            <option key={produto} value={produto}>
                                                {produto}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="mt-3 text-end">
                                <button
                                    className="btn btn-success"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                >
                                    {loading ? 'Enviando...' : 'Gerar Sugestão'}
                                </button>
                            </div>

                            {error && <p className="text-danger mt-2">Erro: {error}</p>}
                            {response && (
                                <div className="mt-4">
                                    <h5>Sugestão do ItelligentSeller:</h5>
                                    <div className="alert alert-info">{response}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PromptModal;
