import React, { useState } from 'react'

const categories = {
    Hamburguers: ['Cheeseburger', 'Spicy Chickenburguer', 'Burguer with Salad', 'Classic Texas Burguer'],
    Juices: ['Strawberry Juice', 'Orange Juice', 'Mango Juice'],
    Sodas: ['Coca-cola', 'Mtn Dew', 'Dr. Pepper'],
    Tops: ['T-shirt', 'Sweater', 'Blouse', 'Tank Top', 'Hoodie'],
    Bottoms: ['Jeans', 'Shorts', 'Skirt', 'Trousers', 'Leggings'],
    Outerwear: ['Jacket', 'Coat', 'Blazer', 'Windbreaker', 'Cardigan'],
    Accessories: ['Hat', 'Scarf', 'Belt', 'Gloves', 'Sunglasses'],
    Footwear: ['Sneakers', 'Boots', 'Sandals', 'Loafers', 'Heels']

};

const PromptModal = () => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedProduct, setSelectedProduct] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async () => {
        if (!selectedCategory || !selectedProduct) {
            setError('Select a category and a product.')
            return;
        }

        setLoading(true)
        setError(null)
        setResponse('')

        const prompt = `Generate exactly ONE short, persuasive, and direct sentence to increase the average order value for the item "${selectedProduct}" in the category "${selectedCategory}".
        Include a high-margin product suggestion (such as add-ons, sauces, beverages, or desserts) with a price or additional cost naturally integrated in the sentence.
        Use casual, modern, youth-friendly language, and add relevant emojis to make it more attractive.
        Do NOT include any introductions, explanations, or extra text — return only the final sentence ready to display in a sales interface.
        Maximum length: 200 characters.`


        try {
            const apiEndpoint = 'http://localhost:3000/upgrade-product'

            const res = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ prompt }),
            })

            const text = await res.text();

            if (!res.ok) {
                if ((res.status === 503 || res.status === 500) && text.includes('model is overloaded')) {
                    throw new Error('IntelligentSeller is currently overloaded. Please try again in a few moments.');
                }
                throw new Error(`Server error: ${res.status} - ${text}`);
            }

            let data;
            try {
                data = JSON.parse(text);
            } catch (e) {
                throw new Error(`Invalid JSON response: ${text}`);
            }

            setResponse(data.Resposta)
        } catch (error) {
            console.error('Error sending prompt:', error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

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
                                Sales force with IntelligentSeller
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
                                <label className="form-label">Category</label>
                                <select
                                    className="form-select"
                                    value={selectedCategory}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value)
                                        setSelectedProduct('')
                                        setResponse('')
                                    }}
                                >
                                    <option value="">Select a category</option>
                                    {Object.keys(categories).map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {selectedCategory && (
                                <div className="mb-3">
                                    <label className="form-label">Product</label>
                                    <select
                                        className="form-select"
                                        value={selectedProduct}
                                        onChange={(e) => setSelectedProduct(e.target.value)}
                                    >
                                        <option value="">Select a product</option>
                                        {categories[selectedCategory].map((produto) => (
                                            <option key={produto} value={produto}>
                                                {produto}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="mt-3 text-end">
                                <button
                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                >
                                    {loading ? 'Forming a better ofert...' : 'Improve yout ofert'}
                                </button>
                            </div>

                            {error && <p className="text-danger mt-2">Erro: {error}</p>}
                            {response && (
                                <div className="mt-4">
                                    <h5>ItelligentSeller suggestion:</h5>
                                    <div className="alert alert-info">{response}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromptModal
