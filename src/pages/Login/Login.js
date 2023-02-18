import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../src/Assets/login.png";
import { AuthContext } from "../../Layout/Main";

const Login = () => {

    const { providerLogin, logIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError]= useState('');

    const from = location.state?.from?.pathname|| '/';
    const handleLogIn = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            navigate(from, {replace: true});
            toast.success('LogIn Successfull!!!!')

        })
        .catch(error=> {
            setError(error.message)
        })
    }
    
    const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
        toast.success('LogIn Successfull!!!!')
        navigate(from, {replace: true});
    })
    .catch(error=> console.error(error))
        }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="w-full max-w-xl xl:px-8 mx-auto my-5">
          <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
              Please Log In
            </h3>
            <form onSubmit={handleLogIn}>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="email" className="inline-block mb-1 font-medium">
                  E-mail
                </label>
                <input
                  placeholder="john.doe@example.org"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="password" className="inline-block mb-1 font-medium">
                  Password
                </label>
                <input
                  placeholder="!@#$%^&*123"
                  required
                  type="password"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                />
              </div>
              <p className="text-xs mt-3 text-red-600 sm:text-sm text-center">
              {error}
            </p>
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded-none shadow-md btn btn-outline text-white  bg-blue-600 hover:bg-sky-100 hover:text-blue-600 focus:shadow-outline focus:outline-none text-xs sm:text-lg"
                >
                  Submit
                </button>
              </div>
              <div className="flex items-center w-full my-4">
                <hr className="w-full " />
                <p className="px-3 ">OR</p>
                <hr className="w-full " />
              </div>
              <div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4 my-6">
    <button
                 onClick={handleGoogleSignIn}
                  aria-label="Login with Google"
                  type="button"
                  className="flex items-center justify-center btn btn-outline w-full p-4 transition duration-200 bg-sky-100 text-blue-600 hover:bg-blue-600 focus:shadow-outline focus:outline-none rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:shadow-outline h-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p className="ml-3">Login with Google</p>
                </button>
	</div>
              <p className="text-xs mt-3 text-gray-900 sm:text-sm text-center">
           Don't have an account? Please <Link to={'/signup'} className="link link-primary">Register</Link>
          </p>
            </form>
          </div>
        </div>
            </div>
        </div>
    );
};

export default Login;