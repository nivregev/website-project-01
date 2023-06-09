import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MyCards from "./components/my-cards";

import { Route, Routes } from "react-router-dom";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="my-cards" element={<MyCards />}></Route>
          <Route path="sign-in" element={<SignIn />}></Route>
          <Route path="sign-up" element={<SignUp />}></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
