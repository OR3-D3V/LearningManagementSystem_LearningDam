import Header from './Header.jsx'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from "./pages/home.jsx";
import Courses from "./pages/Courses.jsx"
function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/Features' element={<Courses/>}></Route>
            </Routes>
        </>

    )
}

export default App