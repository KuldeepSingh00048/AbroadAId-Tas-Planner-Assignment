import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import todo from '../images/todo.png'

const Creatework = () => {
  const [user, setUser] = useState({
    task:"",
    startdate:"",
    enddate:"",
    priority:"",
    taskstatus:"",
  })
  const navigate = useNavigate();
  const callcreatepage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include"
      });
      const userdata = await res.json();
      console.log(userdata)
      setUser(userdata);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (error) {
      console.log(error)
      navigate('/signin')
    }
  }

  useEffect(() => {
    callcreatepage();
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const addtask = async (e) => {
    e.preventDefault();
    const {task,startdate,enddate,priority,taskstatus } = user
    const res = await fetch("/addtask", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task,startdate,enddate,priority,taskstatus
      }),
    })
    const data = await res.json();
    if (res.status >= 400) {
      window.alert(data.error)
      console.log(data.error)
    }
    else if (res.status === 201) {
      window.alert(data.message)
      console.log(data.message)
      navigate('/dashboard')
    }
    else {
      alert("error  on server side")
    }
  }
  return (
    <div className='h-screen justify-center flex text-center items-center p-[20px] mt-[76px]  bg-indigo-600'>
      <div className=' w-auto h-auto flex border-2  flex-wrap-reverse  text-left p-3 rounded-xl'>
        <form className='flex-col ' method='POST'>

          <input className='createinput w-16' placeholder='Enter your planned task'
            name='task'
            value={user.task}
            onChange={handlechange}

          />

          <div className=' text-lg text-white'> Start Date<br />
            <input type="Date" className='createinput '
              name='startdate'
              value={user.startdate}
              onChange={handlechange}
            />
          </div>
          <div className='text-lg text-white'> End Date<br />
            <input type="Date" className='createinput '
              name='enddate'
              value={user.enddate}
              onChange={handlechange}
            />
          </div>

          <select className=' w-[200px] small:w-[300px] md:w-[400px]  p-2 rounded-md my-3 text-indigo-600' 
          name='priority'         
          value={user.priority}
          onChange={handlechange}
          >
            <option  selected>Select the priority of of your task</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select><br />

          <select className=' w-[200px] small:w-[300px] md:w-[400px]  p-2 rounded-md my-3 text-indigo-600' 
          name='taskstatus'         
          value={user.taskstatus}
          onChange={handlechange}
          >
            <option  selected>What's Your status of your task</option>
            <option>Done</option>
            <option>Doing</option>
            <option>Planned</option>
          </select><br />
          
          <button type='submit' onClick={addtask} className='bg-gradient-to-r from-green-500 to-lime-500 w-auto text-lg px-2 rounded-lg font-bold hover:text-base active:bg-yellow-300 mb-2 '>Add Task</button>
          <div className=' text-lg font-semibold'>

          </div>
        </form>

        <img className=' h-36 w-36 mb-0 md:mb-44' src={todo} />
      </div>
    </div>
  )
}

export default Creatework