import '../styles/styles.css'
import '../styles/stylesContentProjects.css'
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import projects from '../PostsAndProjects/projects.json';

function Content(){
    return(
        <motion.div 
        className="content"                                   
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }} >
            <h2 className='h2sContent'>About me</h2>
            <p>Hi, my name is Jordi López-Peláez though I generally go as "Jordi Cathew" in everything.
            I'm an aspiring machine learning engineer, I also love neuroscience. Not much more
            to tell really... ah yes, check out my blog page (it's very cool) and the contact page if you wish to download
            my CV or to contact me!
            </p>
            <h2 className='h2sContent'>Projects</h2>
            {projects.map((project) => (
                <div key={project.id} className='row projectRow'>
                    <div className='col-12 col-lg-6'>
                        <h3>{project.title}</h3>
                        <div className='technologiesUsed'>
                            <span className='techBadge'>{project.technologies.join(' | ')}</span>
                        </div>
                        <p>{project.description}</p>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <Carousel className='crsl' autoPlay infiniteLoop centerMode interval={3000}>
                            {project.images.map((image, imgIndex) => (
                                <div key={imgIndex}>
                                    <img src={image} alt={`Project ${project.id} image ${imgIndex + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

export default Content;