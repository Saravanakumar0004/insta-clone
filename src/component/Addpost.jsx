import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [post, setPost] = useState({
    id: '',
    username: '',
    profile_picture: '',
    image_url: '',
    caption: '',
    likes: 0,
    comments: [] // Comments will be added later
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
   
    try {
      // You can add default comments or leave it empty
      const postData = {
        ...post,
        likes: Number(post.likes),
        comments: [] // Or include default comments here
      };

      await axios.post('http://localhost:3020/post', postData)
      .then( alert("Post created successfully!"));
      setPost({
        id: '',
        username: '',
        profile_picture: '',
        image_url: '',
        caption: '',
        likes: 0,
        comments: []
      });
    } 
    
    
    catch (error) {
      console.error("Submit error:", error);
      setMessage("Failed to submit post.");
    }
  };

  return (
    <div className="m-5">
      <h3>Create New Post</h3>
      <input
        type="text"
        name="id"
        value={post.id}
        onChange={handleChange}
        placeholder="ID"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="username"
        value={post.username}
        onChange={handleChange}
        placeholder="Username"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="profile_picture"
        value={post.profile_picture}
        onChange={handleChange}
        placeholder="Profile Picture URL"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="image_url"
        value={post.image_url}
        onChange={handleChange}
        placeholder="Post Image URL"
        className="form-control mb-2"
      />
      <input
        type="text"
        name="caption"
        value={post.caption}
        onChange={handleChange}
        placeholder="Caption"
        className="form-control mb-2"
      />
      <input
        type="number"
        name="likes"
        value={post.likes}
        onChange={handleChange}
        placeholder="Likes"
        className="form-control mb-3"
      />

      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit Post
      </button>

    </div>
  );
}

export default CreatePost;
