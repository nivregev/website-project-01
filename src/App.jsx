import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill container">
        {/* <Home /> */}
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
