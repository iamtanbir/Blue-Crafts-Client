import { useEffect } from "react";
import Lottie from "lottie-react";
import loading from '../../public/animations/loading.json'

const Loader = () => {
    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme', 'light')
    },[])
    return (
        <div className='flex justify-center items-center h-[80vh]'>
              <Lottie animationData={loading} loop={true}/>
            </div>
        
    );
};

export default Loader;