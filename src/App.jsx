import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";

function App() {

  return (
    <>
      <Router>
      <Header />
      <hr />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
