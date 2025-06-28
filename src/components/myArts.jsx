import { useContext, useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";
import { toast, ToastContainer } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Helmet, HelmetProvider } from "react-helmet-async";


const MyArts = () => {
    const navigate = useNavigate()
    const data = useLoaderData()
    const {userLoggedin} = useContext(AuthContext)
    
    const deleteCraftItem = (id)=>{
            fetch(`https://blue-craft-sarver.vercel.app/craftitem/${id}`,{
               method: 'DELETE',
            })
            .then(res=> res.json())
            .then(status=>{
                if(status.acknowledged){
                toast.success('Craft item Deleted successfully')
                    setTimeout(()=>{
                      navigate(`/myArtsAndCrafts/${userLoggedin.uid}/all`)
                    },1000)
                }
            })
            .catch(()=>{
                toast.error('Something went wrong!')
            })
    }

    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme', 'light')
    },[])

    return (
        <div className="flex flex-col items-center mx-auto w-11/12 max-w-[1200px] pb-32">
                             <HelmetProvider>

                                <Helmet>
                                <title>Blue Crafts || My Craft items</title>
                                </Helmet>
                                </HelmetProvider>

            <ToastContainer/>
            <div className='w-full mt-5'>
                <button className='btn mt-5' onClick={()=>  navigate(-1)}><IoMdArrowRoundBack className='text-xl'/> Go Back</button>
            </div>
            <h1 className="font-bold mt-5 text-4xl">Your Arts And Crafts</h1>
            <div className="dropdown dropdown-end mt-10">
            <div tabIndex={0} role="button" className="btn m-1">Filter</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to={`/myArtsAndCrafts/${userLoggedin.uid}/all`}>All</Link></li>
                <li><Link to={`/myArtsAndCrafts/${userLoggedin.uid}/customized-yes`}>Customization - Yes</Link></li>
                <li><Link to={`/myArtsAndCrafts/${userLoggedin.uid}/customized-no`}>Customization - No</Link></li>
            </ul>
            </div>
           {data.length > 0?  <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
                {
                    data.map((item,index)=>{
                        return <div key={item._id}>
                        <dialog id={`my_modal_${index}`} className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-center">Delete</h3>
                            <p className="py-4 text-center">Are you sure you want to delete this item ?</p>
                            <div className="modal-action justify-center">
                            <form method="dialog" className="flex items-center gap-4">
                                <button className="btn btn-error text-white" onClick={()=>{deleteCraftItem(item._id)}}>Delete</button>
                                <button className="btn">Cancel</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                        <div     className={`prefers card max-w-96 mx-auto justify-center  shadow-xl border-2 border-white h-[500px]`}>
                                <figure className='h-[300px]'><img src={item.image} className='w-full  object-cover' /></figure>
                                <div className="card-body p-3">
                                <h3 className='font-sm'>{item.subcategoryName}</h3>
                                <h2 className="font-semibold text-xl text-[#2F5249]">{item.itemName}</h2>
                                <p className="font-semibold "><span className='font-semibold me-3'>Rating:</span>{item.rating} out of 5</p>
                                <p className='font-semibold'>Price: ${" "+item.price}</p>
                                <p className='font-semibold text'>Stock Status :{" "+item.stockStatus}</p>
                                <p className='font-semibold'>Customization:{" "+item.customization}</p>
                                <div className="card-actions items-center justify-center">
                                <Link to={`/updateCraftItem/${item._id}`} className='border-none btn bg-[#29b129] hover:bg-[#29b129] text-white w-[55%]'><button className="">Update</button></Link>
                                <button className="btn bg-[#be2d2d] hover:bg-[#be2d2d] border-none text-white" onClick={()=>document.getElementById(`my_modal_${index}`).showModal()}>Delete</button>
                                </div>
                                </div>
                                </div>
                        
                        </div>
                    })
                }
            </div> : <div className="h-[50vh]">
            <p className="mt-10">You haven't added any craft items</p>
                
                </div>}
        </div>
    );
};

export default MyArts;


