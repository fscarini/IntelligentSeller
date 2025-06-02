import SmartSalesCard from "./components/cards/SmartSalesCard"
import IntroSection from "./components/sections/IntroSection"
import Navbar from "./components/sections/navbar/Navbar"
import PricingCard from "./components/cards/PricingCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PromptModal from "./components/checkout-assistant/PromptModal";

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar/>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <IntroSection />
                </div>
            </div>
            <div className="row g-4">
                <SmartSalesCard
                    title="Empowering Your Sales with Intelligence."
                    text="An experienced negotiator who drives your sales through the power of artificial intelligence."
                />
                <SmartSalesCard
                    title="AI-Powered Sales Strategies for Maximum Impact."
                    text="Leverage the power of artificial intelligence to automate your sales process and increase efficiency."
                />
            </div>
            <h2 className="mt-5 d-flex justify-content-center pricing" id="pricing">Pricing</h2>
            <div className="row d-flex justify-content-evenly mb-4">
                <PricingCard
                    title="Check-out assistant with AI"
                    vantage1="✔ AI-powered checkout assistant"
                    vantage2="✔ Intelligently modeled product categorization"
                    vantage3="✔ Profit-based price competition"
                    price="$9,90 p/month"
                />
            </div>
            <div className="className=row d-flex justify-content-evenly mb-4">
                <PromptModal></PromptModal>
            </div>
        </div>
    )
}

export default App