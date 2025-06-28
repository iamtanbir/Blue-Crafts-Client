import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CraftItemDetails = () => {
    const navigate = useNavigate()
    const data = useLoaderData()


    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme', 'light')
    },[])
    return (
        <div className='mt-10 w-10/12 max-w-[1000px] mx-auto pb-32'>
                      <HelmetProvider>

                        <Helmet>
                        <title>Blue Crafts || Craft Item Details</title>
                        </Helmet>
                        </HelmetProvider>
            <div className=''>
                <button className='btn' onClick={()=>  navigate(-1)}><IoMdArrowRoundBack className='text-xl'/> Go Back</button>
            </div>
            <h1 className='text-center text-2xl md:text-4xl font-bold mt-5 md:m-0'>Craft Details</h1>
            <div className='mt-10 flex flex-col md:flex-row items-center md:items-start gap-10'>
            <img className='w-full md:w-1/2 object-cover h-[450px]' src={`${data.image}`}/>
            <div className='flex flex-col gap-5'>
            <p className='text-sm'><span className=' font-bold'>Added By </span>: {data.userName}</p>
            <p className='text-sm font-bold'>Subcategory: {data.subcategoryName}</p>
            <p className='text-2xl font-bold'> {data.itemName}</p>
            <p className='text-xl text-[#2F5249] font-bold'>${data.price}</p>
            <p className='text-xl text-[#FB923C] flex items-center gap-4'><span className=' font-bold'>Rating:</span> 
            <div className='rating'>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
            {data.rating} out of 5</p>
            <div className='text-xl'>
 
                <p>{data.shortDescription}</p>
            </div>
            <p className='text-xl'><span className=' font-bold'>Customization</span>: {data.customization}</p>
            <p className='text-xl'><span className=' font-bold'>Processing Time</span>: {data.processingTime}</p>
            <p className='text-xl flex gap-5 items-center'><span className=' font-bold'>Stock Status:</span> <span className={`p-2  text-white rounded-md ${data.stockStatus === 'In stock'? 'bg-green-500':'bg-gray-300' }`}>{data.stockStatus}</span></p>
            </div>
            </div>
        </div>
    );
};

export default CraftItemDetails;