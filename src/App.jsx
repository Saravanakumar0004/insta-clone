import React from 'react';
import Feed from "./component/Feed"
import Sidebar from "./component/sidebar"
import Suggession from "./component/Suggession"


function App() {
 

  return (
   <>
   <div className="d-flex vh-100">
    <div className="w-20"><Sidebar/></div>
    <div className='w-50 '><Feed/></div>
    <div className="w-30"><Suggession/></div>
   </div>
   </>
  )
}

export default App
