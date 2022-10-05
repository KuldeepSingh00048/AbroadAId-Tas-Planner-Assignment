import React from 'react'
import Task from '../images/task.jpg'
const home = () => {
  return (
    <div className='  justify-center items-center text-center flex  h-screen p-[20px] bg-pink-600 mt-16 home '>
      <div className=' first-letter:text-8xl text-5xl  text-white mx-3'>Plan your task according to your requirements and priority</div>
      <img  className=' rounded-xl mx-4' src={Task}/>
    </div>
  )
}

export default home