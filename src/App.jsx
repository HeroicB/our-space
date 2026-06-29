import Header from "./components/Header";
import Footer from "./components/Footer";
import TrendingNav from "./components/TrendingNav";
import StatusNav from "./components/StatusNav";

function App() {
    return (
        <>
            <Header />
            <div>
                <TrendingNav />
                <StatusNav />
            </div>
            <Footer />
        </>
    );
}

export default App;
