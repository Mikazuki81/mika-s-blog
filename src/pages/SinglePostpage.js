import React, { useEffect, useState } from "react"
import axios from "axios"

const Postspage = ({ match }) => {
  const [Post, setPost] = useState({})
  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(
        `http://localhost:4001/posts/${match.params.id}`
      )

      setPost(data)
    }

    getPost()
  }, [match])
  return (
    <div>
      <h1 className='text-3xl text-gray-900'>{Post.title}</h1>
      <p>{Post.description}</p>
    </div>
  )
}

export default Postspage
