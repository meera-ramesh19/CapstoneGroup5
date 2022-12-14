import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logoImage from '../Components/asset/ScholarSheep.png';
import app from '../firebase';

const Login = ({ signedIn, setSignedIn, signedInUser, setSignedInUser }) => {
  const navigate = useNavigate();
  const id = useParams();
  const [user, setUser] = useState({
    user_email: '',
    user_password: '',
  });

  const auth = getAuth(app);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, user.user_email, user.user_password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (user) {
          alert(`Welcome to your login ${user.email}!`);
          // console.log(user.user_email)
          setSignedIn(true);
          setSignedInUser(user);
          navigate('/');
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(`${user.user_email} is not registered`);
        const errorMessage = error.message;
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    login();
  };

  return (
    <div>

     
      <div className='flex items-center h-screen w-full bg-teal-lighter'>
        <div className='w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto'>
          <div className='flex items-center justify-center'>
            <img className=' h-10 w-12 rounded-full' src={logoImage} alt='' />

      {/* <h1 class='text-center'>Parent Login</h1> */}
      {/* <div class='flex items-center justify-center'>
      <img class=' h-22 w-48 rounded-full' src={parentandchild} alt='' />
      </div> */}
    

          </div>

          <h1 className='block w-full text-center text-grey-darkest mb-6'>
            {' '}
            Login{' '}
          </h1>
          <form
            className='mb-4 md:flex md:flex-wrap md:justify-between'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col mb-4 md:w-full'>
              <label
                className='mb-2 uppercase font-bold text-lg text-grey-darkest'
                htmlFor='user_email'
              >
                Email
              </label>
              <input
                className='border py-2 px-3 text-grey-darkest'
                type='email'
                name='user_email'
                id='user_email'
                defaultValue={user.user_email}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col mb-6 md:w-full'>
              <label
                className='mb-2 uppercase font-bold text-lg text-grey-darkest'
                htmlFor='user_password'
              >
                Password
              </label>
              <input
                className='border py-2 px-3 text-grey-darkest'
                type='password'
                name='user_password'
                id='user_password'
                defaultValue={user.user_password}
                onChange={handleChange}
              />
            </div>

            <button
              className='block bg-teal-600 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded'
              type='submit'
            >
              Login
            </button>
          </form>

          <a
            className='block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker'
            href='/signup'
          >
            Not Registered yet?<span className='font-bold'>Sign Up</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
