import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Content from './Content';
import ContactPage from "./ContactPage";
import Blog from "./Blog";
import TemplatePosts from './TemplatePosts';
// Will help us with smooth transitions
import { AnimatePresence } from 'framer-motion';
import NotFound from './NotFound';

function AnimatedRoutes(){
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={ <Content/> }/>
                <Route exact path="/blog" element={ <Blog/> }/>
                <Route exact path="/contact" element={ <ContactPage/> }/>
                <Route exact path="/blog/:postId" element={<TemplatePosts/> } />
                <Route path="*" element={ <NotFound/> } />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
