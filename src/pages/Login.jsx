import React, { useState } from 'react';
import assets from '../assets/assets';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import auth from your firebase.js config

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      navigate('/'); 
    } catch (error) {
      setError("Failed to log in. Please check your email and password.");
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div>
      {/* Navbar */}
       <div className='p-4 flex justify-between items-center shadow-lg'>
        <button
          onClick={() => navigate('/')}
          className='flex text-xs md:text-sm border border-[#1E3A8A] rounded-full px-2 py-1 md:px-4 md:py-2 ml-1 md:ml-5 items-center gap-2 cursor-pointer'>
          <FaRegArrowAltCircleLeft /> Back to Homepage
        </button>
        <div>
          <img onClick={() => navigate('/')} src={assets.logo} className='w-20 md:w-30 cursor-pointer' alt="Logo" />
        </div>
        <button className='hidden md:flex text-white bg-[#1E3A8A] items-center gap-2 px-4 py-2 mr-5 rounded-full cursor-pointer'>
          About Us <FaRegArrowAltCircleRight />
        </button>
      </div>

      {/* Form */}
      <div className='flex items-center justify-center gap-5 mt-8'>
         <form onSubmit={handleLogin} className='flex flex-col ml-2 md:ml-25'>
          <h1 className='text-xl md:text-4xl font-bold text-center mb-4'>Login</h1>

          {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
          <label htmlFor="email" className='font-semibold'>Email Address</label>
          <input
            id="email"
            type="email"
            placeholder='Enter Your Email Id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-[#1E3A8A] rounded-xl shadow-lg p-3 mt-2 mb-2 text-sm w-[70vw] md:w-[25vw]'
            required
          />
          <label htmlFor="password" className='font-semibold'>Password</label>
          <input
            id="password"
            type="password"
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-[#1E3A8A] rounded-xl shadow-lg p-3 mt-2 mb-2 text-sm w-[70vw] md:w-[25vw]'
            required
          />
          <button type="submit" className='text-sm md:text-xl bg-[#1E3A8A] px-10 py-2 text-white mt-5 rounded-full cursor-pointer'>Login</button>

          <p className='mt-5 text-center'>Already have an account?
            <span
              onClick={() => navigate('/login')}
              className='text-[#1E3A8A] font-semibold cursor-pointer ml-1'
            >
              Create One
            </span>
          </p>
        </form>
        <div>
          <img src={assets.signup_img} className='hidden md:flex rounded-2xl ml-60 w-[45vw]' alt="Login visual" />
        </div>
      </div>
    </div>
  )
}

export default Login;
