import SmartSalesCard from "./components/cards/SmartSalesCard"
import IntroSection from "./components/sections/IntroSection"
import Navbar from "./components/sections/navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
    return (
            <div className="container-fluid">
                <div className="row">
                    <Navbar></Navbar>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <IntroSection/>
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
            </div>
    )
}

export default App