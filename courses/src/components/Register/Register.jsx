import {React, useState} from 'react';
import bgImg from '/lrc.jpg';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password != confirmPass) {
      alert("Passwords do not match");
      return;
    }
    try {
        const {data} = await axios.post("http://localhost:5000/register", {email, phone, password});
        console.log(data);
        if(data === "Successful") {
            alert("Successful. Redirecting to the Login page.")
            navigate('/');
        } else {
            alert(data);
        }
    }
    catch(err) {
        console.log(err);
        alert(err);
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
            <div className='flex items-center font-bold justify-center text-white text-3xl mb-8'>
                REGISTER
            </div>
            <div className = 'flex items-center justify-center mb-6'>
                <input className='w-4/5 h-12 p-2 rounded-md' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
            </div>
            <div className = 'flex items-center justify-center mb-6'>
                <input className='w-4/5 h-12 p-2 rounded-md' type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Mobile Number' required/>
            </div>
            <div className = 'flex items-center justify-center mb-6'>
                <input className='w-4/5 h-12 p-2 rounded-md' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
            </div>
            <div className = 'flex items-center justify-center mb-8'>
                <input className='w-4/5 h-12 p-2 rounded-md' type='password' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder='Confirm Password' required/>
            </div>
            <div className = 'flex items-center justify-center mb-6'>
                <button className='w-2/5 h-12 p-2 font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-md' type='submit'>Register</button>
            </div>
            <div className = 'flex items-center justify-center mb-1 text-white'>
                Already have an account?            
            </div>
            <Link to='/' className='flex items-center justify-center hover:underline text-white'>Login</Link>.
        </form>        
      </div>
    </div>
  );
}
export default Register