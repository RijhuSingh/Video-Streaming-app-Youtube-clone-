import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  if(!isMenuOpen) return null;  //Early Return

  return (
    <div className='w-48 shadow-lg' >
      <ul className='my-4' >
        <li className='font-bold text-center my-2 p-2 hover:bg-gray-200  rounded-full cursor-pointer' >
          <Link to='/' >Home</Link>
        </li>
        <li className='font-bold text-center my-2 p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Shorts</li>
        <li className='font-bold text-center my-2 p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Subscriptions</li>
      </ul>

      <ul className='my-4' >
        <li className='font-bold text-center my-2 p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Library</li>
        <li className='font-bold text-center my-2 p-2 hover:bg-gray-200  rounded-full cursor-pointer' >History</li>
        <li className='font-bold text-center my-2 p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Watch Later</li>
        <li className='font-bold text-center my-2 p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Liked Videos</li>
      </ul>

      <h1 className='font-bold text-center text-2xl my-3' >Explore</h1>

      <ul className='text-center' >
        <li className='my-2 font-bold p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Trending</li>
        <li className='my-2 font-bold p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Shopping</li>
        <li className='my-2 font-bold p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Movies</li>
        <li className='my-2 font-bold p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Music</li>
        <li className='my-2 font-bold p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Sports</li>
        <li className='my-2 font-bold p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Gaming</li>
        <li className='my-2 font-bold p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Learning</li>
        <li className='my-2 font-bold p-2 hover:bg-gray-200  rounded-full cursor-pointer' >Fashion & Beauty</li>
      </ul>
      

    </div>
  )
}

export default SideBar