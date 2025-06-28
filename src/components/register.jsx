import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/authProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Login = () => {

    const {updateProfileData,createAccount,setLoader} = useContext(AuthContext)
  const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photoUrl = form.photoUrl.value
        const password = form.password.value
        if(password.length < 6 || /[A-Z]/.test(password) === false || /[a-z]/.test(password) === false){
            toast.error('Password must have an uppercase and lowercase letter with at least 6 characters')
        }
        else{
        createAccount(email,password)
        .then(()=>{
                updateProfileData({displayName:name, photoURL: photoUrl})
                .then(()=>{
                  setLoader(false)
                    toast.success('Account created successfully')
                    setTimeout(()=>{
                        navigate('/')
                    },3000)
            })
        })
        .catch((err)=> {
          setLoader(false)
        if(err.message ==="Firebase: Error (auth/email-already-in-use).")
        toast.error('Email already in use.')
          else{
            toast.error('Something went wrong')
          }
      })
        }
    }

    useEffect(()=>{
      document.querySelector('html').setAttribute('data-theme', 'light')
  },[])

    return (
        <>
                <HelmetProvider>
                <Helmet>
                <title>Blue Crafts || Sign up</title>
                </Helmet>
                </HelmetProvider>

        <ToastContainer autoClose={2000}/>

        <div className='w-11/12 mt-5 mx-auto max-w-[1200px]'>
                <button className='btn mt-5' onClick={()=>  navigate(-1)}><IoMdArrowRoundBack className='text-xl '/> Go Back</button>
            </div>
        <div className='flex justify-center items-center h-[80vh] mb-32'>
        <div className='w-11/12 max-w-[350px] flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-semibold'>Create a new account</h1>
        <form className="card-body w-full p-0" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
        <button className="btn bg-[#2F5249] hover:bg-[#2F5249] text-white">Sign Up</button>
        </div>
      </form>
      <p>Already have an account ? <Link className='font-semibold underline' to='/login'>Log In</Link></p>
    </div>
    </div>
    </>
    );
};

export default Login;