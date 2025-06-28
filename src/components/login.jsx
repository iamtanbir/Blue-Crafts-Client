import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/authProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Login = () => {
    const navigate = useNavigate()
    const {loginWithGoogle,loginWithGithub,login, setLoader} = useContext(AuthContext)
    
    const loginWithGoogleHandler = ()=>{
            loginWithGoogle()
            .then(()=>{
                  setLoader(false)
                toast.success('Logged In Successfully')
                setTimeout(()=>{
                    navigate('/')
                },2000)
            })
            .catch(err=> 
              {
                    setLoader(false)
                toast.error('Something went wrong')
            
            })
    }

    const loginWithGithubHandler = ()=>{
            loginWithGithub()
            .then(()=>{
              setLoader(false)
                toast.success('Logged In Successfully')
                setTimeout(()=>{
                    navigate('/')
                },2000)
            })
            .catch(()=> {
                setLoader(false)
            toast.error('Something went wrong')
          })
        }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        login(email,password)
        .then(()=>{
              setLoader(false)
            toast.success('Logged In Successfully')
            setTimeout(()=>{
                navigate('/')
            },2000)
        })
        .catch(()=>{
              setLoader(false)
            toast.error('Incorrect email or password')
        })
    }

    useEffect(()=>{
      document.querySelector('html').setAttribute('data-theme', 'light')
  },[])

    return (
        <>
             <HelmetProvider>
                <Helmet>
                <title>Blue Crafts || Login</title>
                </Helmet>
                </HelmetProvider>
        <ToastContainer />
        <div className='w-11/12 mt-5 mx-auto max-w-[1200px]'>
                <button className='btn mt-5' onClick={()=>  navigate(-1)}><IoMdArrowRoundBack className='text-xl '/> Go Back</button>
            </div>
        <div className='flex justify-center items-center h-[80vh] mb-32'>
        <div className='w-11/12 max-w-[350px] flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-semibold'>Log In</h1>
        <div className='flex gap-10 items-center'>
        <FcGoogle  className='text-3xl' role='button' onClick={loginWithGoogleHandler}/>
        <FaGithubSquare className='text-3xl' role='button' onClick={loginWithGithubHandler}/>
        </div>
        <div className="divider m-0">Or</div>
        <form className="card-body w-full p-0" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#2F5249] hover:bg-[#2F5249] text-white">Login</button>
        </div>
      </form>
      <p>Don't have an account ? <Link className='font-semibold underline' to='/signup'>Create new account</Link></p>
    </div>
    </div>
    </>
    );
};

export default Login;