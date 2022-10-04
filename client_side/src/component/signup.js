import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
    cpassword: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  async function register(event) {
    const { name,email, password, cpassword } = user
    event.preventDefault();
    const res = await fetch("https://task-planner-server-side.herokuapp.com/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, email, password, cpassword,
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
      navigate('/signin')
    }
    else {
      alert("error  on server side")
    }
  }
  return (
    <div className=' w-screen h-screen mt-10 shadow-2xl   flex justify-center rounded-xl bg-indigo-600  items-center text-center   '>
      <form onSubmit={register} className=' flex-col rounded-xl  bg-opacity-60  flex-wrap w-96  h-auto bg-indigo-400 '>
        <h1 className='my-1 text-4xl font-bold'> Sign Up</h1>

        <input type="text" className='my-3 border-2 rounded-lg border-black p-1 text-indigo-600 font-semibold' placeholder="Enter your Password"
          name='name'
          value={user.name}
          onChange={handleChange}
        />
        <input type="email" className='my-3 border-2 rounded-lg border-black p-1 text-indigo-600 font-semibold' placeholder="Enter your E-mail"
          name='email'
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <input type="text" className='my-3 border-2 rounded-lg border-black p-1 text-indigo-600 font-semibold' placeholder="Enter your Password"
          name='password'
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <input type="text" className='my-3 border-2 rounded-lg border-black p-1 text-indigo-600 font-semibold' placeholder="Renter your Password"
          name='cpassword'
          value={user.cpassword}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value='Register' className='bg-gradient-to-r from-green-500 to-lime-500 w-auto text-lg px-2 mb-2 rounded-lg font-bold hover:text-base active:bg-yellow-300' />
        <br/>Already Have account??..<NavLink className='font-semibold text-white hover:text-violet-900' to='/signin'>Signin</NavLink>
      </form>
    </div>
  )
}

export default Signup