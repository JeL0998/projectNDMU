import {   BrowserRouter, Routes, Route, } from 'react-router-dom';
import Footer from './Footer'
import Login from './Login'
import Register from './Register';
import Homepage from './Home/Homepage';


const Hero = () => {

    return (
        <div className="flex flex-col min-h-screen">
        <BrowserRouter>
        <main className="flex-grow">
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Homepage/>} />
        </Routes>
        </main>
        <Footer />
        </BrowserRouter>
      </div>
    )
}

export default Hero