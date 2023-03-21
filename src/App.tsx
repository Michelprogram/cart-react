import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { NavBar } from "./components/NavBar";
import { ShoppingCartProvider } from "./context/ShoppingCart";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
