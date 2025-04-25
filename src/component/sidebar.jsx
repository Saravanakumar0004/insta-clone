import React from 'react'
import { useNavigate } from 'react-router-dom'
function Sidebar() {

  const navigate = useNavigate();

  return (
    <div className='m-4'>
    <div className='d-flex position-fixed flex-column gap-3'>
        <img className='logo-text' src="src\assets\Instagram- text Logo.png" alt="" />
        <div><i className="bi bi-house-door"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-play-btn"></i>Reels</div>
        <div><i className="bi bi-send"></i>Message</div>
        <div><i className="bi bi-heart"></i>Notifications</div>
        <div onClick={()=>{navigate('/addpost')}}><i className="bi bi-plus-circle" ></i>Create</div>
        <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>

    <div className=' position-fixed bottom-0 mb-3 d-flex flex-column gap-3'>
        <div><i className="bi bi-threads"></i>Thread</div>
        <div><i className="bi bi-list"></i>More</div>
    </div>
    </div>
  )
}

export default Sidebar