import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Storyview from './component/Story view.jsx'
import Profile from './component/Profile.jsx'
import Addpost from './component/Addpost.jsx'
 const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <App/>
    },
    {
      path:"/story/:id/:tot",
      element:<Storyview/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/addpost",
      element:<Addpost/>
    }
  ]
 )
createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router}/>
   
)
// npx json-server --watch data/dummydata.json --port 3020 --static ./data

// npm i react-router-dom

// npm i axios