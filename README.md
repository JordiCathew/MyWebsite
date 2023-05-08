# My website (Frontend)

Hey there, this is the README for the frontend of my website, this project is a MERN project (MongoDB, Express.js, React.js, and Node.js for the backend). The main goal of the project was to learn more about web development, which I did, a lot. Please have in mind before seeing my code that this is my first time working with a lot of these libraries so I might have made a lot of naive mistakes, please, tell me if you see them. I will explain what this code consists of and explain only the most important things of it so you don't get bored reading this.

## Routing between different pages

As you might have noticed if you visited the website, the react app consists of a single page web app, this means that no reloads are required to switch between the different pages of the site (I thought this was cooler than having to reload every 30 seconds). This is accomplished by using _React Router_ which is a npm package very useful for client-side rendering. It allows you to define routes and map them to specific components, so that when a user navigates to a specific URL in your application, the corresponding component is rendered, as it is the case in my web-app.

You can see this in action in the _AnimatedRoutes.jsx_ component: 

```jsx
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
```

Notice also the _AnimatePresence_ component, this is what helps make the animations for the transitions between pages.

## Connection to backend 

All the components are pretty self-explanatory so I will jump right into the connection to the backend, there are two places where this connection occurs, the first is in the Blog component:

```jsx
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
```

In the blog component we connect to the url where our backend is running to access all of my posts information, to make a preview of each post.

The second instance where this connection happens is in the _TemplatePosts.jsx_ which as the name suggests serves as a template to expand and read all the individual posts that are uploaded to the database:

```jsx
    // API CALL
    useEffect(() => {
        fetch(`https://mywebsitebackend.onrender.com/api/${postId}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Post not found');
        })
        .then(data => setPost(data))
        .catch(error => setError(error.message));
    }, [postId]);
```

Not sure if this is the most efficient way to do it, but it works fine. I also added some security checks in the backend to try to minimize risks, check out my backend repository as well, it's called **MyWebsiteBackend**. 

## Contributing

You can write me via twitter, or any of my social media for suggestions. The links are in my website.

## License

See the LICENSE.md file for license rights and limitations (GNU GPLv3).

