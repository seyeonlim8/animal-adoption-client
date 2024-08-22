import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Animals />} />
    <Route path="/animal/:id" element={<Animal />} />
  </Routes>
  </BrowserRouter>;
}

export default App;
