import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts, { loader as postLoader } from './routes/Posts'
import NewPost, { action as postAction } from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import './index.css'

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />, 
    children: [
      { path: '/', 
        element: <Posts />, 
        loader: postLoader,
        children: [
          { path: '/create-post', 
            element: <NewPost />,
            action: postAction
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
