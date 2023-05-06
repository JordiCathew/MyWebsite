import '../styles/styles.css'
import { motion } from 'framer-motion';

function Content(){
    return(
        <motion.div 
        className="content"                                   
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }} >
            <p>Hi, my name is Jordi López-Peláez though I generally go as "Jordi Cathew" in everything.
            I'm an aspiring machine learning engineer, I also love neuroscience. Not much more
            to tell really... ah yes, check out my blog page (it's very cool) and the contact page if you wish to download
            my CV or to contact me!
            </p>
        </motion.div>
    );
}

export default Content;