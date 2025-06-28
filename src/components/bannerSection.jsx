import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'


const BannerSection = () => {

    return (
        <div className='mx-auto w-full max-w-[1200px]'>
        <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner1.jpg')] bg-no-repeat bg-cover bg-center h-full">
            <div className='h-[550px] w-10/12 max-w-[1200px] mx-auto flex flex-col justify-center items-start text-white gap-5'>
                <h1 className='text-5xl md:text-7xl font-bold '><Typewriter loop={1} cursor cursorStyle='_'  words={['Discover Natural Elegance']}/></h1>
                <p className='w-11/12 max-w-[700px] '>Immerse yourself in the allure of eco-friendly jute crafts! Our collection showcases a range of handcrafted jute home decor, from exquisite wall hangings to charming coasters. Embrace the earthy tones and rustic textures of jute as you adorn your living space with sustainable elegance. Each piece is thoughtfully designed to bring a touch of nature's beauty into your home.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner2.jpg')] bg-no-repeat bg-cover bg-center h-full">
        <div className='h-[550px] w-10/12 max-w-[1200px] mx-auto flex flex-col justify-center items-start text-white gap-5'>
        <h1 className='text-5xl md:text-7xl font-bold'><Typewriter deleteSpeed={0} loop={2} cursor cursorStyle='_'  words={["Crafted with Nature's Beauty"]}/></h1>
                <p className='w-11/12 max-w-[700px] '>Indulge in the warmth of artisanal wooden craftsmanship! Dive into our curated collection of handmade wooden home decor and kitchenware, meticulously crafted to elevate your living spaces. From graceful serving trays to functional utensils, each piece celebrates the inherent beauty of natural wood. Imbue your home with the timeless charm of handcrafted wooden creations.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner3.jpg')] bg-no-repeat bg-cover bg-center h-full">
        <div className='h-[550px] w-10/12 max-w-[1200px] mx-auto flex flex-col justify-center items-start text-white gap-5'>
        <h1 className='text-5xl md:text-7xl font-bold '><Typewriter loop={3} typeSpeed={100} cursor cursorStyle='_'  words={["Make it Yours!"]}/></h1>
                <p className='w-11/12 max-w-[700px]  '>Transform ordinary objects into cherished treasures with our personalized customization options! Explore the art of personalization and infuse your favorite jute and wooden crafts with a touch of individuality. From engraved initials on wooden photo frames to embroidered monograms on jute tote bags, unleash your creativity and make every piece uniquely yours.</p>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default BannerSection;