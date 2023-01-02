import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Send an HTTP GET request to the URL
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(response => response.json())
      .then(data => {
        // Get the data you want to display
        const posts = data.data.children;
        console.log(posts)
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div className="card" key={post.data.id}>
          <h2>{post.data.title}</h2>
          {/* <div dangerouslySetInnerHTML={{ __html: post.data.selftext_html }} /> */}
           <p > <span className='para'>Paragraph</span> : {post.data.selftext }</p>
          <a href={post.data.url} className="link">{post.data.url}</a>
          <div>Score: {post.data.score}</div>
        </div>
      ))}
    </div>
  );
}
export default App;
