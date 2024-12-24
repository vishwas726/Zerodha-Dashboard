import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
const Signup = () => {

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })



  const handleInput = (e) => {

    setFormData((prev) => ({

       ...prev, [e.target.name ]: e.target.value 

    }))
  }

  const formSubmit= async(e)=>{

    e.preventDefault()
    console.log(formData) 
    try {
      const res=await axios.post("/signup" ,{

        ...formData
      })
      
     console.log("bjcbwkcnjk",res.response.data)
     setFormData({
      username: '',
      email: '',
      password: ''
    });
   
    } catch (error) {
      console.log(error)
    }
    

    
     
  }


  return (
    <div className='h-screen justify-center items-center flex'>

      <div className="max-w-[600px] md:w-[6000px] mx-auto border p-10 rounded-lg shadow-sm">

        <div className="">

          <form onSubmit={formSubmit} className='space-y-10 flex w-fit mx-auto flex-col items-end justify-center '>
            <div className="space-x-5">
              <label htmlFor="name">Name</label>
              <input onChange={handleInput} className='border p-2 outline-none text-base  rounded-lg ' value={formData.name} placeholder='Enter Your name' type="text" name="name" id="name" />

            </div>

            <div className="space-x-5">

              <label htmlFor="email">Email</label>
              <input onChange={handleInput} className='border p-2 outline-none text-base  rounded-lg ' value={formData.email} placeholder='Enter Your Email' type="email" name="email" id="email" />
            </div>

            <div className="space-x-5">
              <label htmlFor="password">Password</label>
              <input onChange={handleInput} className='border p-2 outline-none text-base  rounded-lg ' value={formData.password} placeholder='Enter Your Password' type="password" name="password" id="password" />
            </div>

            <button type="submit" className='p-3 bg-blue-600 text-white font-bold rounded-lg mx-auto'>Sign Up</button>
     
          </form>
          <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
        </div>

      </div>

    </div>
  )
}

export default Signup
