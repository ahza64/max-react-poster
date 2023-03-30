import { Outlet } from 'react-router-dom'

import PostsList from '../components/PostsList';

function Posts() {

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  )
}

export default Posts;

export async function loader() {
  const response = await fetch('https://max-hooks-sample-posts-backend.onrender.com/posts')
  const resData = await response.json()
  return resData.posts
}
