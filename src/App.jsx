import { Route, Routes } from "react-router-dom"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Work } from "./pages/Work"
import Navbar from "./components/Navbar"
import "./App.css"

function App() {
  return (
    <div className="App mx-auto">
      <Navbar />
      <div className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
