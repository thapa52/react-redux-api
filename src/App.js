import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail";
import ProductLists from "./components/ProductLists";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductLists />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
