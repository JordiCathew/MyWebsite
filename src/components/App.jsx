import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Components
import Header from './Header';
import AnimatedRoutes from "./AnimatedRoutes";
import Footer from './Footer';
//Styles
import '../styles/stylesTransitions.css'

function App(){

    return (
        <div>
            <Router>
                <Header />
                <AnimatedRoutes />
                <Footer />
            </Router>
        </div>
    ); 
}
 export default App;