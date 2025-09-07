import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import assets from '../assets/assets';

const FaRegArrowAltCircleLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
  </svg>
);

const FaRegArrowAltCircleRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
  </svg>
);


const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error("Error signing up: ", error);
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
        <form onSubmit={handleSignup} className='flex flex-col ml-2 md:ml-25'>
          <h1 className='text-xl md:text-4xl font-bold text-center mb-4'>Create new account</h1>

          {error && <p className='text-red-500 text-center mb-4'>{error}</p>}

          <label htmlFor="name" className='font-semibold'>Name</label>
          <input
            id="name"
            type="text"
            placeholder='Enter Your Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border border-[#1E3A8A] rounded-xl shadow-lg p-3 mt-2 mb-2 text-sm w-[70vw] md:w-[25vw]'
            required
          />
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
          <label htmlFor="confirmPassword" className='font-semibold'>Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder='Confirm Your Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='border border-[#1E3A8A] rounded-xl shadow-lg p-3 mt-2 mb-2 text-sm w-[70vw] md:w-[25vw]'
            required
          />

          <button type="submit" className='text-sm md:text-xl bg-[#1E3A8A] px-10 py-2 text-white mt-5 rounded-full cursor-pointer'>Create Account</button>

          <p className='mt-5 text-center'>Already have an account?
            <span
              onClick={() => navigate('/login')}
              className='text-[#1E3A8A] font-semibold cursor-pointer ml-1'
            >
              Log in
            </span>
          </p>
        </form>
        <div>
          {/* Using a placeholder for the signup image */}
          <img src={assets.signup_img} className='hidden md:flex rounded-2xl ml-60 w-[45vw]' alt="Signup visual" />
        </div>
      </div>
    </div>
  )
}

export default Signup;

