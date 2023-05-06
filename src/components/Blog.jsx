import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/stylesBlog.css';

function Blog(){
    // Declare state to hold data from backend
    const [backendData, setBackendData] = useState([]); 

    // Run a function when the component is mounted (i.e., rendered to the screen)
    // for the first time (This will help us set the position of the footer to relative).
    useEffect(() => {
      document.body.classList.add('blog-page');
      // Cleanup function, removes the blog-page class from the body element when the
      // component is unmounted.
      return () => {
        document.body.classList.remove('blog-page');
      };
    }, []);

    // Fetch data from backend when component mounts
    useEffect(() => {
      console.log("Fetching data from backend...");
      fetch("https://mywebsitebackend.onrender.com/api").then( // Send GET request to "/" endpoint of server
        response => response.json() // Parse response as JSON
      ).then(
        data => {
          setBackendData(data) // Set state with fetched data
        }
      )
    }, []) // Empty array as second argument ensures useEffect only runs once when component mounts

    return (
        <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }} className='bigBox'>
            <h2 className='blog'>Blog Posts</h2>
            <div className='blogBox'>
              {backendData.map((post) => (
                <div classname='wrapperPost' key={post._id}>
                  <p className='datePosts'>Date: {new Date(post.date).toLocaleDateString()}</p>
                  {/* The state property is used to pass the entire post object as a prop to the TemplatePosts component. */}
                  <Link className='no-decoration' to={`/blog/${post._id}`}>
                    <h2 className='titlePosts'>{post.title}</h2>
                  </Link>
                  <p className='contentPosts'>{post.content.length > 100 ? post.content.slice(0, 100) + '...' : post.content}</p>
                  <hr/>
                </div>
              ))}
            </div>
        </motion.div>
    );

}

export default Blog;
