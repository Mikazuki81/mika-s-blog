import React from "react"

const Header = () => {
  return (
    <header className='w-full py-8 px-4 bg-gray-200 bg-opacity-40'>
      <div className='flex items-center justify-between'>
        <a href='/' className='text-4xl font-bold text-blue-500 mx-4'>
          Mika's Blogs
        </a>
        <ul className='flex items-center justify-between text-black'>
          <li className='mx-4'>
            <a
              href='/'
              className='font-medium text-lg active hover:text-blue-500 hover:underline '>
              Home
            </a>
          </li>
          <li className='mx-4'>
            <a
              href='/posts'
              className='font-medium text-lg hover:text-blue-500 hover:underline'>
              Post
            </a>
          </li>
          <li className='mx-4 my-2'>
            <a
              href='/create-post'
              className='font-medium text-lg text-white hover:text-white hover:underline bg-blue-600 px-4 py-2 outline-none rounded-md'>
              Create Post
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
