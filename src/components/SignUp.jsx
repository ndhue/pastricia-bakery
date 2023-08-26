import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setCfPassword] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')

  const dispatch = useDispatch();

  const initialValid = {
    errors: {
      email: "",
      password: "",
      fName: "",
      lName: "",
      address: "",
      city: "",
      confirmPassword: ""
    },
    formValid: false,
    emailValid: false,
    passwordValid: false,
    fullnameValid: false,
    addressValid: false,
    cfpwdValid: false,
    cityValid: false,
  };
  const [valid, setValid] = useState({ ...initialValid });

  const handleErrors = (event) => {
    const { name, value } = event.target;
    let mess = value.trim() === "" ? "Please enter your " + name : "";
    let {
      fullnameValid,
      emailValid,
      passwordValid,
      addressValid,
      cityValid,
      cfpwdValid,
      formValid,
    } = valid;
    switch (name) {
      case "fName" & "lName": {
        fullnameValid = mess === "" ? true : false;
        let pattern =
          "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
          "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
          "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";
        if (value && !value.match(pattern)) {
          fullnameValid = false;
          mess = "Your name seems invalid";
        } else {
          fullnameValid = true;
        }
        break;
      }
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

      case "password" & "confimPassword": {
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

      case "address" & "city": {
        addressValid = mess === "" ? true : false;
        cityValid = mess === "" ? true : false;
        break;
      }
      default:
        break;
    }
    formValid = emailValid & passwordValid & fullnameValid & addressValid & cityValid & cfpwdValid;
    setValid({
      formValid,
      emailValid,
      passwordValid,
      fullnameValid,
      addressValid,
      cityValid,
      cfpwdValid,
      errors: { ...valid.errors, [name]: mess },
    });
  };
  return (
    <div className='text-tertiary pt-[140px] login md:grid md:grid-cols-3 mx-10 lg:gap-20 items-center'>
      <div className="form col-span-2 mx-2 border-2 border-tertiary-400">
        <div className='my-10 mx-12'>
          <h1 className='text-6xl font-bold text-center'>Sign up</h1>
          <div className="grid grid-cols-2 gap-6 my-5">
            <div className="col-span-1">
              <label htmlFor="fName" className="block">
                First name
              </label>
              <input
                type="text"
                name="fName"
                onChange={e => setFName(e.target.value)}
                onBlur={handleErrors}
                className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
              />
              {valid.errors.fName && (
              <div className="text-red-500 text-sm pt-1 font-serif">{valid.errors.fName}</div>
              )}
            </div>

            <div className="col-span-1">
              <label htmlFor="last-name" className="block">
                Last name
              </label>
              <input
                type="text"
                name="lName"
                onChange={e => setLName(e.target.value)}
                onBlur={handleErrors}
                className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
              />
              {valid.errors.lName && (
              <div className="text-red-500 text-sm pt-1 font-serif">{valid.errors.lName}</div>
              )}
            </div>

            <div className="col-span-2">
              <label htmlFor="email-address" className="block">
                Email address
              </label>
              <input
                type="text"
                name="email"
                onChange={e => setEmail(e.target.value)}
                onBlur={handleErrors}
                className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
              />
              {valid.errors.email && (
              <div className="text-red-500 text-sm pt-1 font-serif">{valid.errors.email}</div>
              )}
            </div>

            <div className="col-span-1">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                onBlur={handleErrors}
                className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
              />
              {valid.errors.password && (
              <div className="text-red-500 text-sm pt-1 font-serif">{valid.errors.password}</div>
              )}
            </div>

            <div className="col-span-1">
              <label htmlFor="confirmPassword" className="block">
                Confim password
              </label>
              <input
                type="password"
                name="confirmPassword"
                onChange={e => setCfPassword(e.target.value)}
                onBlur={handleErrors}
                className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
              />
              {valid.errors.confirmPassword && (
              <div className="text-red-500 text-sm pt-1 font-serif">{valid.errors.confirmPassword}</div>
              )}
            </div>

            <div className="col-span-1">
              <label htmlFor="street-address" className="block">
                Street address
              </label>
              <input
                type="text"
                name="address"
                onChange={e => setAddress(e.target.value)}
                onBlur={handleErrors}
                className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
              />
              {valid.errors.address && (
              <div className="text-red-500 text-sm pt-1 font-serif">{valid.errors.address}</div>
              )}
            </div>

            <div className="col-span-1">
              <label htmlFor="city" className="block">
                City
              </label>
              <input
                type="text"
                name="city"
                onChange={e => setCity(e.target.value)}
                onBlur={handleErrors}
                className="mt-2 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1"
              />
              {valid.errors.city && (
              <div className="text-red-500 text-sm pt-1 font-serif">{valid.errors.city}</div>
              )}
            </div>
          </div>
          <button className='border-2 rounded border-gray-500 py-2 px-6 font-bold my-2 mr-0 ml-auto block'
          >CREATE</button>
          <span className='block text-right my-1'>If you already have an account,
            <a href='/pastricia-bakery/sign-in' className='underline'> sign in here</a>
          </span>
        </div>
      </div>
      <div className="logo col-span-1 pb-12 mx-auto lg:inline-block hidden">
        <img className='' src="assets/img/logo-no-background.png" alt="" />
      </div>
    </div>
  )
}
