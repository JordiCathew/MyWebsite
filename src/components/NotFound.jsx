import { useEffect } from 'react';
import '../styles/stylesNotFound.css';

function NotFound(){
    useEffect(() => {
        document.body.classList.add('not-found');
        // Cleanup function, removes the blog-page class from the body element when the
        // component is unmounted.
        return () => {
          document.body.classList.remove('not-found');
        };
    }, []);

    return(
        <div className='imageWrapper'>
            <h1 className='errorMessage1'>Uh-oh, it seems like you're lost Alice.</h1>
            {/* In your component just give image path. React will know its in 
                public directory. */}
            <img className="errorImage" src="/images/404.png" />
            <h1 className='errorMessage2'> <em>404 page not found.</em></h1>
        </div>
    );
}

export default NotFound;