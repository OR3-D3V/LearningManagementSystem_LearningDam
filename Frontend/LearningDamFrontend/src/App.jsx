import Header from './Header.jsx'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from "./pages/home.jsx";
import Courses from "./pages/Courses.jsx"
import StudentDashBoard from './pages/protected/StudentDashBoard.jsx'

function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/Features' element={<Courses/>}></Route>
                <Route path='/student-dashboard' element={<StudentDashBoard/>}></Route>
            </Routes>
        </>

    )
}

export default App