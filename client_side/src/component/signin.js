import React,{useState} from 'react'
import{useNavigate,NavLink} from 'react-router-dom'
const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
    const signin = async (event) =>{
    const { email, password} = user
    event.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password, 
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
    <div className=' w-screen h-screen  shadow-2xl  flex justify-center rounded-xl 
        items-center text-center mx-auto bg-indigo-600'>
      <form method='POST' className=' flex-col flex-wrap   bg-opacity-30 w-96 bg-violet-300 h-auto rounded-2xl'>
        <h1 className='my-1 text-4xl font-bold'> Sign In</h1>

        <input type="email" className='my-3 border-2 rounded-lg border-black p-1  w-auto text-indigo-600 font-semibold' placeholder="Email"
          name='email' 
          value={user.email}
          onChange={handleChange}
          />
        <br />
        <input type="text" className='my-3 border-2 rounded-lg border-black p-1 w-auto text-indigo-600 font-semibold' placeholder="Password"
          name='password'
          value={user.password}
          onChange={handleChange}
          />
        <br />
        <button onClick={signin} type="submit"   className='bg-gradient-to-r from-green-500 to-lime-500 w-auto text-lg px-2 rounded-lg font-bold hover:text-base active:bg-yellow-300 mb-2 ' >Signin</button>
        <br/>Don't have account??..<NavLink className='font-semibold text-white hover:text-violet-900' to='/signup'>Signup first</NavLink>
      </form>
      
    </div>
  )
}

export default Signin