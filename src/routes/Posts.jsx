import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  return (
    <>
      {/* any time nested routes are rendered, the <Outlet /> component is used to render the children of the parent route */}
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  )
}

export default Posts;

// A common convention when using react router is to export a loader function 
// for a route that should fetch data before rendering. See how it's referenced in main.jsx
export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const data = await response.json()
  return data.posts;
}