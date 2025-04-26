📸 Insta Clone

A minimal Instagram clone built with React, focusing on profile, posts, stories, and suggestions features.
🔴 Live: https://saravanakumar0004.github.io/insta-clone/

🚀 How to Run Locally
1.Clone the repository

git clone https://github.com/saravanakumar0004/insta-clone.git
cd insta-clone

2.Install dependencies

npm install

3.Start the server

npm run dev

🛠 Tech Stack

=> React (Vite setup)
=> React Router DOM (for routing)
=> Axios (for API requests)
=> CSS / TailwindCSS (for styling)

🔗 Routes Used

Route | Purpose
/ | Home page (Feed + Stories + Suggestions)
/profile | User Profile page (Profile details + Posts grid)
/post/:postId | (Optional) View a single post

⚛️ React Hooks Used

Hook | Purpose
useState | To store posts, users, loading, etc.
useEffect | To call APIs when components mount
useParams | To get URL parameters like postId
useNavigate | To navigate between routes
useContext (optional) | If managing global user or post data

📡 Axios Usage

Axios is used for making HTTP requests to interact with the backend API:

Method | Purpose | Example
GET | Fetch data (posts, profiles, stories) | axios.get('/api/posts')
POST | Create new data (new post, new story) | axios.post('/api/posts', newPostData)
PUT | Update existing data (profile update, post edit) | axios.put('/api/posts/:postId', updatedPostData)

📂 Folder Structure 

src/
│
├── api/
│   └── axiosInstance.js    # Reusable Axios instance (optional)
│
├── components/
│   ├── Navbar.jsx
│   ├── PostList.jsx
│   ├── StoryList.jsx
│   ├── Suggestions.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Profile.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
└── main.jsx

✅ Future Improvements

=> Add user authentication (Login/Signup)
=> Implement Likes, Comments, and Follows
=> Add Reels and Explore Pages

🙌 Thank you for checking it out!

This project was built as part of my learning process to practice React Hooks, Routing, and Axios integration.

