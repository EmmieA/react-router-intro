import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'

import RootLayout from './routes/RootLayout';
import Posts, { loader as postsLoader} from './routes/Posts'
import NewPost, { action as newPostAction } from './routes/NewPost';
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, // the container of the entire app
    children: [
      { 
        path: '/', 
        // Acts as the home page over which we want modals to show up
        // Posts exports a loader function that fetches the data from the server
        element: <Posts />, 
        // React router provides a loader property that accepts a function (async or not) which returns 
        // data that will be accessible to the component and any children.
        // React router will wait for this function to resolve and then in order to consume the data,
        // the component that wants it will use the useLoaderData hook. (See PostList) 
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader }
      ]},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
