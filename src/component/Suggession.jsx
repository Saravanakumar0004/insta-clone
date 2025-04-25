import axios from 'axios';
import React, { use } from 'react'
import  { useEffect, useState } from 'react';
function Suggession() {

  const [profile, setProfile] = useState([]);
  const [suggessiondata , setSuggession] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3020/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
      });


      fetch('http://localhost:3020/suggession')
      .then(res => res.json())
      .then(data => setSuggession(data))
      .catch(err => {
        console.error("Fetch error:", err);
        console.log(err.message);
      });
  }, []);

const handleFollowers = async(id , username , profile_picture) =>{
  axios.post('http://localhost:3020/followers',{ "id": id, "username": username ,"profile_picture":profile_picture })
  .then(Response => alert("You are now following " + username))
  .catch(err => console.log(err.message)); 
}

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='m-3 w-75'>
      <div>
        {profile.map((data)=>(
          <div key={data.id} className=' d-flex'>
              <img className= " mt-3 mb-3 profile" src={data.profile_picture} alt="profile picture" />
              <h5 className='mt-3 mb-3 username'>{data.username}</h5>
              <small className=' text-primary m-5 ms-5 mt-4 '>Switch</small>
          </div>
        ))}
      </div>

      <div className='d-flex ms-3'>
        <p >Suggested for you</p>
        <b className='ms-auto me-5'>See All</b>
      </div>

      <div>
      {suggessiondata.map((data)=>(
          <div key={data.id} className=' me-5  d-flex'>
              <img className= " mt-3 mb-3 profile" src={data.profile_picture} alt="profile picture" />
              <h5 className='mt-3 mb-3 username'>{data.username}</h5>
              <a className=' text-primary ms-auto mt-4' onClick={() => handleFollowers(data.id, data.username,data.profile_picture)}>Follow</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Suggession;