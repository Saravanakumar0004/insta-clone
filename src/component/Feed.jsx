import React from 'react'
import Stories from './Stories';
import Posts from './Posts';

function Feed() {
  return (
    <>
    <div>
        <Stories/>
    </div>
    <div className='mt-5'>
        <Posts/>
    </div>
    </>
  )
}

export default Feed;