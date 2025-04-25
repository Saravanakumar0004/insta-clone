import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3020/post')
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='d-flex mt-3 justify-content-center'>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <div className='  d-flex'>
                 <img className= " mt-3 mb-3 profile" src={post.profile_picture} alt="profile picture" />
                 <h5 className='mt-3 mb-3 username'>{post.username}</h5>
              </div>
              <img className='post-image' src={post.image_url} alt="" />
              <div className='like'>
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-send"></i>
              </div>
              <b>{post.likes || 0}likes</b>
              <div><b className='me-2'>{post.username}</b>{post.caption}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default Posts;
