import { BrowserRouter, Route, Routes } from "react-router-dom";
import Animals from "./routes/Animals";
import Animal from "./routes/Animal";
import Home from "./routes/Home";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/animal" element={<Animals />} />
    <Route path="/animal/:id" element={<Animal />} />
  </Routes>
  </BrowserRouter>;
}

export default App;
