import React, { useState } from "react";
import Post from "./Post";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  var [posts, setPost] = useState([
    {author:"Michael", text:"Hello"},
    {author:"Pablo", text:"Hola"},
    {author:"Mattia", text:"Ciao"},    
  ])

  return (
    <div>
      <h1 class="text-center">Hello World</h1>
      <div class="container row">
        {posts.map (post => (
            <div class="col-sm-4">
            <Post author={post.author} text={post.text}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
