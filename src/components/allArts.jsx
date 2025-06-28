import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MyArtsAndCrafts = () => {
  const navigate = useNavigate()
    const craftItems = useLoaderData()
    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme', 'light')
    },[])
    return (
      <>
                   <HelmetProvider>

                    <Helmet>
                      <title>Blue Crafts || All Craft Items</title>
                    </Helmet>
                    </HelmetProvider>
                    <ToastContainer/>
        <div className='w-11/12 mx-auto mt-5 max-w-[1200px] pb-24'>
  
           <div className="overflow-x-auto">
           <button className='btn' onClick={()=>  navigate(-1)}><IoMdArrowRoundBack className='text-xl'/> Go Back</button>
           <h1 className='text-center text-2xl md:text-4xl font-bold mt-5 md:m-0'>All Arts and Crafts</h1>
  <table className="table mt-3">
    {/* head */}
    <thead>
      <tr>

        <th className='w-2/6'>Name</th>
        <th className='w-1/6 text-center'>Stoke Status</th>
        <th className='w-1/6 text-center'>Pricing</th>
        <th className='w-1/6 text-center'>Rating</th>
        <th className='w-2/6 text-center'></th>
      </tr>
    </thead>
    <tbody>
        {craftItems.map(item=>{
            return  <tr key={item._id}>

            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={`${item.image}`}/>
                  </div>
                </div>
                <div className='max-w-[150px]'>
                  <div className="font-bold ">{item.itemName}</div>
                  <div className="text-sm opacity-50">{item.subcategoryName}</div>
                </div>
              </div>
            </td>
            <td className=''>
            {item.stockStatus === 'In stock' ? <p className='bg-green-400 text-white text-center p-3 rounded-md font-bold w-full'>{item.stockStatus}</p> : <p className='w-full bg-gray-400 text-white text-center p-3 rounded-md font-bold'>{item.stockStatus}</p>}
            </td>
            <td className='text-center'>${item.price}</td>
            <td className='text-center'>{item.rating}</td>
            <th>
              <Link to={`/craftDetails/${item._id}`}><button className="border-none btn bg-[#2F5249] hover:bg-[#97B067] text-white">details</button></Link>
            </th>
          </tr>
        })}
    </tbody>

    
  </table>
</div>
        </div>
        </>
    );
};

export default MyArtsAndCrafts;