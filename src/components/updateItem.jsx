import { useContext, useEffect } from 'react';
import {toast,ToastContainer} from 'react-toastify'
import { AuthContext } from '../providers/authProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const UpdateItem = () => {
  const craftItem = useLoaderData()
  const {userLoggedin} = useContext(AuthContext)
  const navigate = useNavigate()
    const updateItemHandler = (e)=>{
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const itemName = form.itemName.value
        const subcategoryName = form.subcategoryName.value
        const shortDescription = form.shortDescription.value
        const price = form.pricing.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processingTime = form.processingTime.value
        const stockStatus = form.stockStatus.value

        fetch('https://blue-craft-sarver.vercel.app/crafts',{
          method: 'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({formData:{image, itemName, subcategoryName, shortDescription, price, rating ,customization, processingTime, stockStatus}, id:craftItem._id})
        })
        .then(res=> res.json())
        .then(status=>{
            if(status.acknowledged){
              toast.success('Updated item successfully')
              setTimeout(()=>{
                navigate(`/myArtsAndCrafts/${userLoggedin.uid}/all`)
              },2000)
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
      <>

      <HelmetProvider>

      <Helmet>
        <title>Blue Crafts || Update Craft Item</title>
      </Helmet>
      </HelmetProvider>

      
       <ToastContainer/>
       
        <div className="flex flex-col justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/additem.jpg')] bg-no-repeat bg-cover pt-5 pb-20">
        <div className='w-11/12 max-w-[1200px]'>
                <button className='btn mt-5' onClick={()=>  navigate(-1)}><IoMdArrowRoundBack className='text-xl'/> Go Back</button>
            </div>
        <div className='flex flex-col w-11/12 max-w-[500px] gap-5 mt-10'>
        <h1 className='text-center text-3xl font-bold text-white'>Update craft item</h1>
            <form className="p-0 flex flex-col items-center" onSubmit={updateItemHandler}>
        <div className="form-control w-full">
          <label className="label">
            <span className=" text-white">Image</span>
          </label>
          <input type="text" placeholder="Image URL" name='image' defaultValue={craftItem.image} className="input input-bordered" required />
        </div>
        <div className='flex flex-col w-full gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className=" text-white">Item Name</span>
          </label>
          <input defaultValue={craftItem.itemName}  type="text" placeholder="Item name" name='itemName' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className=" text-white">Subcategory Name</span>
          </label>
          <select name='subcategoryName' defaultValue={craftItem.subcategoryName} className='input bg-none text-black input-bordered'  required>
             <option value="">- - Select a subcategory - -</option>
             <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
             <option value="Wooden Home Decor">Wooden Home Decor
</option>
             <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
             <option value="Jute Home Decor">Jute Home Decor</option>
             <option value="Jute Kitchenware & utensils">Jute Kitchenware & utensils</option>
             <option value="Jute and wooden jewellery">Jute and wooden jewellery
</option>
          </select>
        </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className=" text-white">Short description</span>
          </label>
          <textarea defaultValue={craftItem.shortDescription} placeholder="Short description" name='shortDescription' className="input input-bordered pt-2 h-[100px]" required />
        </div>
        <div className='flex w-full flex-col md:flex-row gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className=" text-white">Pricing (USD)</span>
          </label>
          <input defaultValue={craftItem.price}  type="number" step='any' min='0' placeholder="Pricing" name='pricing' className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className=" text-white">Rating</span>
          </label>
          <input defaultValue={craftItem.rating}  type="number" step='any' max='5' min='0' placeholder="Rating" name='rating' className="input input-bordered" required />
        </div>
        </div>
        <div className='flex w-full justify-between flex-col pt-3 px-1'>
        <div className="flex items-center gap-2">
          <span className=" text-white">Customization:</span>
          <div className='flex gap-2'>
          <label htmlFor='Yes' className=' text-white'>Yes</label>
         <input defaultChecked={craftItem.customization === 'Yes'? true : false}  id='Yes' required type='radio' name='customization' value='Yes'/>
          </div>
         <div className='flex gap-2'>
          <label htmlFor='No' className=' text-white'>No</label>
         <input defaultChecked={craftItem.customization === 'No'?  true : false}  id='No' required type='radio' name='customization' value='No'/>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className=" text-white ">Stock Status:</span>
          <div className='flex gap-2'>
          <label htmlFor='inStock' className=' text-white'>In stock</label>
         <input defaultChecked={craftItem.stockStatus === 'In stock'?  true : false}  id='inStock' required type='radio' name='stockStatus' value='In stock'/>
          </div>
         <div className='flex gap-2'>
          <label htmlFor='madeToOrder' className=' text-white'>Made to order</label>
         <input defaultValue={craftItem.image} defaultChecked={craftItem.stockStatus === 'Made to Order'?  true : false}  id='madeToOrder' required type='radio' name='stockStatus' value='Made to Order'/>
          </div>
        </div>
          
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className=" text-white">Processing Time</span>
          </label>
          <input defaultValue={craftItem.processingTime}  type="text" placeholder="Processing time" name='processingTime' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6 w-full">
          <button className="btn bg-[#2F5249] border-none text-white hover:bg-[#2F5249]" >Update Item</button>
        </div>
        </form>
            </div>
        </div>
       </>
    );
};

export default UpdateItem;