import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash from './pages/splash/Splash'
import Rules from './pages/rules/Rules'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
