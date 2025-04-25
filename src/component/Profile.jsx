import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState(null);
  const [unfollow, setUnfollow] = useState(0);
  // Load profile
  useEffect(() => {
    axios.get('http://localhost:3020/profile')
      .then(response => {
        // since it's an array, take the first item
        setProfile(response.data[0]);
        console.log("Loaded profile:", response.data[0]);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err);
      });


      axios.get('http://localhost:3020/followers')
      .then(response => {
        setFollowers(response.data);
        console.log("Loaded followers:", response.data);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err);
      });

  }, [unfollow]);

  // Handle changes in input fields
  const handleOnChange = (e) => {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3020/profile/${profile.id}`, profile)
      .then(() => alert("Profile updated successfully!"))
      .catch(err => {
        console.error("Update error:", err);
        setError("Failed to update profile.");
      });
  };

  const handleUnfollow = async (id) => {
    axios.delete(`http://localhost:3020/followers/${id}`)
    .then( alert("Unfollowed successfully!"))
    .then(setUnfollow(!unfollow))
    .catch(err => {
      console.error("Unfollow error:", err);
      setError("Failed to unfollow.");
    });
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div className="m-5">
      <div key={profile.id}>
        <img src={profile.profile_picture} className="profile2 rounded-circle" alt="Profile" width="100" />
        <h5 className="mt-4">{profile.username}</h5>

        <input
          type="text"
          name="username"
          onChange={handleOnChange}
          value={profile.username}
          className="form-control mt-4"
        />
        <input
          type="text"
          name="profile_picture"
          onChange={handleOnChange}
          value={profile.profile_picture}
          className="form-control mt-2"
        />

        <button className="btn btn-primary mt-4" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>

    <div className='m-5'>{followers.map((data)=>{
      return(
        <div className='d-flex align-items-center m-3 ' key={data.id}>
          <img className='profile m-2' src={data.profile_picture} alt="follow picture " />
        <h5>{data.username}</h5>
        <button className='btn btn-secondary ms-auto me-5' onClick={()=>{handleUnfollow(data.id)}}>unfollow</button>
        </div>
      )
    })}</div>
    </div>
  );
}

export default Profile;
