import React, { useEffect, useState } from 'react';
import { useParams ,Link, useNavigate } from 'react-router-dom';

function Storyview() {
  const { id ,tot } = useParams();
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3020/story/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setStory(data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
      });


  }, [id]);

  if(id > tot || id <=0 ){
    navigate('/')
  } 

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {story ? <div className='d-flex justify-content-center align-items-center'>
       <Link to={`/story/${Number(id) - 1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
        <img className='vh-100' src={story.image_url} alt="" />
        <Link to={`/story/${Number(id) + 1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
        </div> :
      
      <div>Loading...</div>}
    </div>
  );
}

export default Storyview;
