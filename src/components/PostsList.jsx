import { useLoaderData } from 'react-router-dom'
 
import Post from './Post'

import classes from './PostsList.module.css'

function PostsList() {
  const posts = useLoaderData()

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return (
              <Post key={post.body} author={post.author} body={post.body} />
            )
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No points yet</h2>
          <p>Add some!</p>
        </div>
      )} 
    </>
  )
}

export default PostsList