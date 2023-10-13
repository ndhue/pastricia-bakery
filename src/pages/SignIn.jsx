import React, { useState } from 'react'
import { isLogin } from '../controller/userSlice'
import { useDispatch } from 'react-redux';
export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const auth = (e) => {
    e.preventDefault();
    dispatch(isLogin({email, password}));
  }

  const initialValid = {
    errors: {
      email: "",
      password: "",
    },
    formValid: false,
    emailValid: false,
    passwordValid: false,
  };
  const [valid, setValid] = useState({ ...initialValid });

  const handleErrors = (event) => {
    const { name, value } = event.target;
    let mess = value.trim() === "" ? "Please enter your " + name : "";
    let {
      emailValid,
      passwordValid,
      formValid,
    } = valid;
    switch (name) {
      case "email": {
        emailValid = mess === "" ? true : false;
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value && !value.match(pattern)) {
          emailValid = false;
          mess = "Your email seems invalid";
        } else {
          emailValid = true;
        }
        break;
      }
      
      case "password": {
        passwordValid = mess === "" ? true : false;
        let pattern = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
        if (value && !value.match(pattern)) {
          passwordValid = false;
          mess = "Your password seems invalid";
        } else {
          passwordValid = true;
        }
        break;
      }
      default:
        break;
    }
    formValid = emailValid & passwordValid;
    setValid({
      formValid,
      emailValid,
      passwordValid,
      errors: { ...valid.errors, [name]: mess },
    });
  };

  return (
    <div className='text-tertiary pt-[140px] login md:grid md:grid-cols-2 mx-10 lg:gap-24'>
      <div className="form col-span-1 mx-2 border-2 border-tertiary-400">
        <form onSubmit={auth} className='my-10 mx-16'>
          <h1 className='text-6xl font-bold text-center'>Sign in</h1>
          <div className="my-4">
            <label htmlFor="email-address" className="block">
              Email address
            </label>
            <input
              type="text"
              name="email"
              onChange={e => setEmail(e.target.value)}
              onBlur={handleErrors}
              placeholder='user1@gmail.com'
              className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
            />
            {valid.errors.email && (
              <div className="text-red-500 text-sm pt-1 font-serif">{valid.errors.email}</div>
              )}
          </div>

          <div className="my-4">
            <label htmlFor="pwd" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
              onBlur={handleErrors}
              placeholder='12345678'
              className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
            />
            {valid.errors.password && (
              <div className="text-red-500 text-sm pt-1 font-serif">{valid.errors.password}</div>
              )}
          </div>
          <button className='border-2 rounded border-gray-500 py-2 px-6 font-bold my-2 mr-0 ml-auto block'
          type="submit"
          >SIGN IN</button>
          <a href='#' className='block underline text-right my-1'>Forgot your password?</a>
          <a href='/sign-up' className='block underline text-right my-1'>Create account</a>
        </form>
      </div>
      <div className="logo col-span-1 mx-auto w-3/4 md:inline-block hidden">
        <img className='' src="assets/img/logo-no-background.png" alt="" />
      </div>
    </div>
  )
}