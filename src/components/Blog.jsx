import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/stylesBlog.css';
import posts from '../PostsAndProjects/posts.json';

function Blog(){
    // This useEffect runs when the component is mounted (i.e., rendered to the screen)
    // for the first time (This will help us set the position of the footer to relative).
    useEffect(() => {
      document.body.classList.add('blog-page');
      // Cleanup function, removes the blog-page class from the body element when the
      // component is unmounted.
      return () => {
        document.body.classList.remove('blog-page');
      };
    }, []);

    return (
        <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }} className='bigBox'>
            <h2 className='blog'>Blog Posts</h2>
            <div className='diagonalMessage'>
              <p className='informationPosts'>Click the post titles to read posts!</p>
            </div>
            <div className='blogBox'>
              {posts.length === 0 ? (
              <p className='loadingPosts'>Loading posts (this may take a moment)...</p>
              ) : (
                posts.map((post) => (
                  <div className='wrapperPost' key={post.id}>
                    <p className='datePosts'>Date: {post.date}</p>
                    {/* The state property is used to pass the entire post object as a prop to the TemplatePosts component. */}
                    <Link className='no-decoration' to={`/blog/${post.id}`}>
                      <h2 className='titlePosts'>{post.title}</h2>
                    </Link>
                    <p className='contentPosts'>{post.content.length > 100 ? post.content.slice(0, 100) + '...' : post.content}</p>
                    <hr/>
                  </div>
                ))
              )}
            </div>
        </motion.div>
    );

}

export default Blog;
