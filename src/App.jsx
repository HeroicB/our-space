import Header from "./components/Header";
import Footer from "./components/Footer";
import TrendingNav from "./components/TrendingNav";
import StatusNav from "./components/StatusNav";
import Post from "./components/Post";
import "./components/Layout.css"

function App() {
    return (
        <>
            <Header />
            <div className="page-layout">
                <TrendingNav />
                <main className="feed">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </main>
                <StatusNav />
            </div>
            <Footer />
        </>
    );
}

export default App;
