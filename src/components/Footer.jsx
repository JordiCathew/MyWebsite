import '../styles/styles.css'

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <p>© {year} Jordi Cathew</p>
            <div className="icons">
            <a href="https://twitter.com/JordiCathew" target="_blank">
                <i className="fa-brands fa-square-twitter icons-footer"></i>
            </a>
            <a href="mailto:mvnagneloni@gmail.com" target="_blank">
                <i className="fa-regular fa-envelope icons-footer"></i>
            </a>
            <a href="https://www.linkedin.com/in/jordi-lpn1/" target="_blank">
                <i className="fa-brands fa-linkedin icons-footer"></i>
            </a>
            <a href="https://github.com/JordiCathew" target="_blank">
                <i className="fa-brands fa-github icons-footer"></i>
            </a>
            </div>
        </div>
    );
}

export default Footer;

