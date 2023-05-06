import '../styles/styles.css';
import '../styles/stylesContact.css';
import { motion } from 'framer-motion';

function ContactPage(){
    return (
        <motion.div         
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        className='contentContact' >
            <p>You can contact me via linkedin (<a href="https://www.linkedin.com/in/jordi-lpn1/" target="_blank">CLICK HERE.</a>) You also can look
            at all the links in the footer at the end of this page. If you wish to
            download my CV you can do it in the buttons below. Please, if you have
            any suggestion send me an email or a message by twitter.</p>
            <div className='buttons-wrapper'>
                <a href="/files/CVEnglish.pdf" download>
                    <button className='cv'><i className="fa-solid fa-file-pdf"></i> DOWNLOAD CV IN ENGLISH</button>
                </a>
                <a href="/files/CVSpanish.pdf" download>
                    <button className='cv'><i className="fa-solid fa-file-pdf"></i> DOWNLOAD CV IN SPANISH</button>
                </a>
            </div>
        </motion.div>
    );
}

export default ContactPage;