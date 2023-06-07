import "./App.css";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header></header>
      <main>
        <Home />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
