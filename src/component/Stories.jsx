import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {
  const [story , setStory]=useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

useEffect(()=>{
  fetch('http://localhost:3020/story')
      .then(data => data.json())
      .then(data => setStory(data))
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
      });
},[])

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="story d-flex ">
      {
        story.map((data)=>(
          <div className='ms-4 mt-2 mb-2' key={data.id} onClick={() => navigate(`/story/${data.id}/${story.length}`)}>
            <div className='story-dp-wrapper'>
            <img className='story-dp rounded-circle' src={data.profile_picture} alt="db" />
            </div>
            <p className='text-turncate' style={{width:"50px"}}>{data.username}</p>
          </div>
        ))
        
        }</div>
  )
}

export default Stories;