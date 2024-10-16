import {React, useState } from 'react';
import bgImg from '/lrc.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("http://localhost:5000/login", {email, password});
      if(data === "Successful") {
        console.log("Logged in");
        alert("logged in");
        navigate('/home');
      } else {
        console.log(data);
        alert(data);
      }
    }
    catch(err) {
      console.log("error");
    }
  }
  return (
    <div className='relative font-sans w-full h-screen'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bgImg})` }}
      >
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-black/90 to-transparent'></div>

      <div className='relative h-full z-10 flex justify-center items-center'>
        <form className='w-[300px] lg:w-[400px] p-6 h-auto bg-gray-950/60 backdrop-blur-sm rounded-md' onSubmit={handleSubmit}>
            <div className='flex items-center font-bold justify-center text-white text-3xl mb-12'>
                Login
            </div>
            <div className = 'flex items-center justify-center mb-8'>
                <input className='w-4/5 h-12 p-2 rounded-md' type='email' value = {email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
            </div>
            
            <div className = 'flex items-center justify-center mb-12'>
                <input className='w-4/5 h-12 p-2 rounded-md' type='password' value = {password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
            </div>
            
            <div className = 'flex items-center justify-center mb-6'>
                <button className='w-2/5 h-12 p-2 font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-md' type='submit'>Login</button>
            </div>
            <div className = 'flex items-center justify-center mb-1 text-white'>
                Don't have an account?            
            </div>
            <Link to='/register' className='flex items-center justify-center hover:underline text-white'>Register</Link>.  
        </form>
      </div>
    </div>
  );
}
export default Login