import React, { useState } from 'react';
import hero  from "/hero.svg";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
    
      if (email === '') {
        setEmailError('Email is required');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    
      if (password === '') {
        setPasswordError('Password is required');
      } else {
        setPasswordError('');
      }
    
      if (email !== '' && password !== '') {
        navigate('/home');
      }
    };
  
    return (
      <div>
      <Navbar />
      <section className="p-6 mt-5 dark:bg-white dark:text-gray-100">
        <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
          <img src={ hero } alt="hero" className="object-cover w-full rounded-md xl:col-span-3" />
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 place-content-center bg-slate-50 drop-shadow-xl divide-y divide-inherit">
            <form className="self-stretch space-y-3" onSubmit={handleSubmit}>
              <div className="my-6">
                <label htmlFor="email" className="text-lg font-poppins text-black -ml-5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered w-full rounded-md focus:ring focus:ring-neutral dark:border-gray-700 text-black"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailError && <div id="email-error" className="error-message text-red-800">{emailError}</div>}
              </div>
              <div className="my-6">
                <label htmlFor="password" className="text-lg font-poppins text-black -ml-5">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full rounded-md focus:ring focus:ring-neutral dark:border-gray-700 text-black"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {passwordError && <div id="password-error" className="error-message text-red-800">{passwordError}</div>}
              </div>
                <button type="submit" className="btn w-full py-2 font-extrabold rounded mt-5 btn-primary dark:text-gray-900">Login</button>
            </form>
            <div className="mt-3 p-6 mx-auto">
              <label className="py-6 font-poppins -ml-3 text-lg text-black">Don't have an account?</label>
                <Link to="/register">
                  <button className="btn w-full py-2 font-bold rounded btn-secondary dark:text-gray-900">Enroll Here</button>
                </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }

export default Login