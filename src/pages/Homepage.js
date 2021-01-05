import axios from "axios"
import React, { useEffect, useState } from "react"
import Post from "../elements/Post"

const Homepage = () => {
  const [Posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get("http://localhost:4001/posts")

      setPosts(data)
    }

    getPosts()
  }, [])
  return (
    <>
      {/* looping post */}
      <ul>
        {Posts.map(post => (
          <Post post={post} />
        ))}
      </ul>
    </>
  )
}

export default Homepage
