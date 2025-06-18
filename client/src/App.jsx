
import Homepage from "./pages/Homepage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/home" element={<Homepage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
