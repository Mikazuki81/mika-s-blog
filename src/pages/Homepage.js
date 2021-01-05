import axios from "axios"
import React, { useEffect, useState } from "react"
import Post from "../elements/Post"

const Homepage = () => {
  const [Posts, setPosts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:4001/data")

      setPosts(data.posts)
    }

    getData()
  }, [])
  return (
    <>
      <section className=' container mx-32 my-6 px-5 py-4  max-w-screen-lg '>
        {/* looping post */}
        <ul>
          {Posts.map(post => (
            <Post post={post} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default Homepage
