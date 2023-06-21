import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";

function App() {

  return (
    <>
      <Header />
      <hr />
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
