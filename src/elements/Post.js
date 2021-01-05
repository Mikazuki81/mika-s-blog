import React from "react"

const Post = ({ post }) => {
  return (
    <div className='w-4/5 border-2 border-blue-700 border-opacity-50 rounded-md px-4 py-2 my-2'>
      <h2 className='text-3xl font-semibold'>{post.title}</h2>
      <p className='text-gray-700 text-base'>{post.description}</p>
    </div>
  )
}

export default Post
