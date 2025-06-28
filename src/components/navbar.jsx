import { useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";
import Lottie from "lottie-react";
import profileLoading from '../../public/animations/profileLoading.json'
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
    const {userLoggedin,loader,logOut,userInfo} = useContext(AuthContext)

    const handleLogout = ()=>{
        logOut()
        .then(()=>{ toast.success('User logged out')})
        .catch(()=> toast.error('Something went wrong'))
    }

    return (
      <>

        <div className="p-0 py-3 navbar justify-between border-b-[1px] border-black dark:border-gray-300 mx-auto w-11/12 max-w-[1200px] gap-3">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn p-0 btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
      <li><NavLink to='/' className={({isActive})=> isActive? 'underline bg-[#2F5249] text-white focus:bg-[#2F5249] focus:text-white hover:bg-transparent hover:text-[#2F5249]' : '  hover:underline hover:bg-transparent focus:bg-transparent'}>Home</NavLink></li>
      <li><NavLink to='/allArtsAndCrafts' className={({isActive})=> isActive? 'underline bg-[#2F5249] text-white focus:bg-[#2F5249] focus:text-white hover:bg-transparent hover:text-[#2F5249]' : '  hover:underline hover:bg-transparent focus:bg-transparent'}>All Art & Craft Items</NavLink></li>
      <li><NavLink to='/addCraftItem' className={({isActive})=> isActive? 'underline bg-[#2F5249] text-white focus:bg-[#2F5249] focus:text-white hover:bg-transparent hover:text-[#2F5249]' : '  hover:underline hover:bg-transparent focus:bg-transparent'}>Add Craft Item</NavLink></li>
      <li><NavLink to={`/myArtsAndCrafts/${userLoggedin? userLoggedin.uid : 'unknown'}/all`} className={({isActive})=> isActive? 'underline bg-[#2F5249] text-white focus:bg-[#2F5249] focus:text-white hover:bg-transparent hover:text-[#2F5249]' : '  hover:underline hover:bg-transparent focus:bg-transparent'}>My Art & Craft List</NavLink></li>
      </ul>
    </div>
    <Link to='/' className="font-bold p-0 text-md md:text-2xl lg:text-3xl text-[#2F5249] flex items-center gap-2 ps-2 lg:p-0"><img src="/icons/icon.png" className="w-[25px] md:w-[50px]"/> Blue Crafts</Link>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 text-[#2F5249] font-bold ">
      <li><NavLink to='/' className={({isActive})=> isActive? 'underline bg-[#2F5249] text-white focus:bg-[#2F5249] focus:text-white hover:bg-transparent hover:text-[#2F5249]' : '  hover:underline hover:bg-transparent focus:bg-transparent'}>Home</NavLink></li>
      <li><NavLink to='/allArtsAndCrafts' className={({isActive})=> isActive? 'underline bg-[#2F5249] text-white focus:bg-[#2F5249] focus:text-white hover:bg-transparent hover:text-[#2F5249]' : '  hover:underline hover:bg-transparent focus:bg-transparent'}>All Art & Craft Items</NavLink></li>
      <li><NavLink to='/addCraftItem' className={({isActive})=> isActive? 'underline bg-[#2F5249] text-white focus:bg-[#2F5249] focus:text-white hover:bg-transparent hover:text-[#2F5249]' : '  hover:underline hover:bg-transparent focus:bg-transparent'}>Add Craft Item</NavLink></li>
      <li><NavLink to={`/myArtsAndCrafts/${userLoggedin? userLoggedin.uid : 'unknown'}/all`} className={({isActive})=> isActive? 'underline bg-[#2F5249] text-white focus:bg-[#2F5249] focus:text-white hover:bg-transparent hover:text-[#2F5249]' : '  hover:underline hover:bg-transparent focus:bg-transparent'}>My Art & Craft List</NavLink></li>
    </ul>
  </div>
  <div className="gap-5">
    {loader? <Lottie animationData={profileLoading} loop={true} className="w-[50px]"/> : userLoggedin ? <div className="dropdown dropdown-hover dropdown-bottom">
        <div> 
<img className="w-[50px] h-[50px] rounded-full object-cover" src={`${userLoggedin.photoURL}`}/> 
        </div>
        <ul tabIndex={0} className="dropdown-content z-10 dropdown right-3  p-2 shadow bg-base-100 rounded-box w-[200px] flex flex-col gap-3 px-5 items-center">
        <img className="w-[50px] h-[50px] rounded-full object-cover" src={`${userLoggedin.photoURL}`}/> 
            <li className="font-normal"><h1 className="text-center">{userLoggedin.displayName}</h1></li>
            <li className="flex justify-center"><button className="bg-black px-2 font-medium rounded-md py-2 text-white" onClick={handleLogout}>Log Out</button></li>
  </ul>
    </div>: <div className="flex items-center gap-4"> <Link className="text-xs md:text-sm btn border border-white " to='/login'>Log In</Link><Link className="btn border border-white text-xs md:text-sm" to='/signup'>Register</Link></div>}
  </div>
</div>
</>
    );
};

export default Navbar;


