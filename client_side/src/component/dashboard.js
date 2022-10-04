import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Moment from 'moment'
const Dashboard = () => {
  // const formatDate = Moment().format('YYYY/MM/DD')
  const tdata = [];
  const [user, setuser] = useState(tdata)
  const navigate = useNavigate();
  const callDashboard = async () => {
    try {
      const res = await fetch("/dashboard-data", {
        method: "GET",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: "include"
      });
      const userdata = await res.json();
      setuser(userdata.user_tasks);
      console.log(userdata.user_tasks)
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
    callDashboard();
  }, []);
  
  
  return (
    <div className='justify-center items-center text-center flex-col p-[130px] h-auto  bg-indigo-600 mt-16 '>
      <div className=' h-auto w-auto mx-auto mt-3  text-3xl text-green-300 font-semibold mb-20 border-4 rounded-lg shadow-lg shadow-green-400 border-green-500'>Done Task
      {
        user.map((elem) => {
          const { task,startdate,enddate,priority,taskstatus } = elem;
          if(taskstatus === 'Done')
         { return (
          <div className=' flex flex-wrap md-flex-col    justify-center h-auto px-0 md:px-2 border-2 md:border-0 m-8 text-lg'>
          <div className=' sm:w-[450px] w-auto border-2  md:border-2 px-5'>{task}</div>
          <div className=' sm:w-[410px] w-auto  border-2 md:border-2 px-5'>startdate: {startdate} -- enddate: {enddate}</div>
          <div className=' sm:w-[280px] w-auto  border-0 md:border-l-2 sm:border-2 px-5 '> priority - {priority} </div>
       </div>
          )}
        })
      }</div>
      <div className=' h-auto w-auto mx-auto mt-3  text-3xl text-yellow-300 font-semibold mb-20 border-4 rounded-lg shadow-lg shadow-yellow-300 border-yellow-500'>Doing Task
      {
        user.map((elem) => {
          const { task,startdate,enddate,priority,taskstatus } = elem;
          if(taskstatus === 'Doing')
         { return (
          <div className=' flex flex-wrap md-flex-col    justify-center h-auto px-0 md:px-2 border-2 md:border-0 m-8 text-lg'>
          <div className=' sm:w-[450px] w-auto border-2  md:border-2 px-5'>{task}</div>
          <div className=' sm:w-[410px] w-auto  border-2 md:border-2 px-5'>startdate: {startdate} - enddate: {enddate}</div>
          <div className=' sm:w-[280px] w-auto  border-0 md:border-l-2 sm:border-2 px-5 '> priority - {priority} </div>
       </div>
          )}          
        })
      }</div>
      <div className=' h-auto w-auto mx-auto mt-3  text-3xl text-blue-300 font-semibold mb-20 border-4 rounded-lg shadow-lg shadow-blue-600 border-blue-900'>Planned Task
      {
        user.map((elem) => {
          const { task,startdate,enddate,priority,taskstatus } = elem;
          if(taskstatus === 'Planned')
         { return (
          <div className=' flex flex-wrap md-flex-col    justify-center h-auto px-0 md:px-2 border-2 md:border-0 m-8 text-lg'>
          <div className=' sm:w-[450px] w-auto border-2  md:border-2 px-5'>{task}</div>
          <div className=' sm:w-[410px] w-auto  border-2 md:border-2 px-5'>startdate: {startdate} -- enddate: {enddate}</div>
          <div className=' sm:w-[280px] w-auto  border-0 md:border-l-2 sm:border-2 px-5 '> priority - {priority} </div>
       </div>
          )}
        })
      }</div>

    </div>
  )
}

export default Dashboard