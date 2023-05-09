import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Disqus from "disqus-react";
import '../styles/stylesTemplatePosts.css';

function TemplatePosts(){
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    //Fixing footer
    useEffect(() => {
        document.body.classList.add('template-post');
        // Cleanup function, removes the blog-page class from the body element when the
        // component is unmounted.
        return () => {
          document.body.classList.remove('template-post');
        };
      }, []);

    // API CALL
    useEffect(() => {
        fetch(`http://localhost:5000/api/${postId}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Post not found');
        })
        .then(data => setPost(data))
        .catch(error => setError(error.message));
    }, [postId]);

    if (error) {
        return <h2>{error}</h2>;
    }

    if (!post) {
        return <h2 className='loading'>Loading...</h2>;
    }

    //Disqus configuration
    const disqusShortname = "jordicathew"
    const disqusConfig = {
        url: `http://localhost:3000/${postId}`,
        identifier: postId,
        title: post.title
    }

    return(
        <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
        >
            <div className="date">
                <p className='datePost'>Date: {new Date(post.date).toLocaleDateString()}</p>
            </div>
            <div className="titlePostSection">
                <h1 className="title">{ post.title }</h1>
            </div>
            <div className="contentBlog">
                {/* In this case the user does not have any inputs in the database, 
                so it should be safe to use dangerouslySetInnerHTML.*/}
                <p className="contentPost" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            <div className='commentSection'>
                <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
            </div>
        </motion.div>
    );
}

export default TemplatePosts;