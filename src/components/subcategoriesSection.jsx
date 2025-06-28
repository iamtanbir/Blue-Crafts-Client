import React, { useEffect, useRef } from 'react';
import Subcategory from './subcategory';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import useMediaQuery from '@mui/material/useMediaQuery';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { A11y, Autoplay, FreeMode , Navigation} from 'swiper/modules';


const SubcategoriesSection = () => {
    const min800 = useMediaQuery('(min-width:800px)');
    const min600 = useMediaQuery('(min-width:600px)');

    const swiperRef = useRef();
    const [subcategories,setSubcategories] = React.useState([])
    
    useEffect(()=>{
        fetch('https://blue-craft-sarver.vercel.app/subcategories')
        .then(res=> res.json())
        .then(data=> setSubcategories(data))
    },[])

    return (
        <div className='mt-24 w-11/12 max-w-[1200px] mx-auto'>
            <h1 className='text-5xl font-bold text-center'>Choose a category</h1>
            <p className='text-center mt-7 w-10/12 mx-auto'>Choose your category and embark on a journey of imagination and craftsmanship.</p>
            <Swiper
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
        slidesPerView={
            min800 ? 3 : min600 ? 2 : 1
        }
        spaceBetween={30}
        freeMode={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        modules={[FreeMode,Autoplay,Navigation,A11y]}
        className="mySwiper mt-7 relative w-10/12"
      >
        {subcategories.map(subcategory=>{
            return <SwiperSlide className='hover:border-black border border-transparent ' key={subcategory._id}><Subcategory subcategory={subcategory}/></SwiperSlide>
           })} 
          <div className='flex justify-between w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-10'>
          <FaChevronLeft role='button' onClick={()=>{
            swiperRef.current.slidePrev()
            }} className='text-black bg-slate-300 p-2 ms-5 text-4xl rounded-full'/> <FaChevronRight onClick={()=>swiperRef.current.slideNext()} className='text-black bg-slate-300 text-4xl me-5 p-2 rounded-full' role='button'/>
          </div>
      </Swiper>
          
        </div>
    );
};

export default SubcategoriesSection;