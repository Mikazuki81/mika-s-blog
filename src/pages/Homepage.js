import React from "react"
import Header from "../elements/Header"
import Post from "../elements/Post"

const Homepage = () => {
  return (
    <>
      <Header />

      <section className='container mx-32 my-6 px-5 py-4  max-w-screen-lg'>
        <Post post={post} />
      </section>
    </>
  )
}

export default Homepage
