

const ResourceSection = () => {
    return (
        <div className=' flex flex-col lg:flex-row items-center mx-auto w-10/12 max-w-[1000px] gap-10 mt-28'>
        <div className='grid grid-cols-2 grid-rows-2 w-full lg:w-[55%] gap-2 h-[400px] '>
            <div className='col-span-1 '>
                <img src='/images/design1.png' className='w-full h-full object-cover'/>
            </div>
            <div className='col-span-1'>
                <img src='/images/blueprint1.png' className='w-full h-full object-cover'/>
            </div>
            <div className='col-span-1'>
                <img src='/images/design2.jpg' className='w-full h-full object-cover'/>
            </div>
            <div className='col-span-1'>
                <img src='/images/blueprint2.png' className='w-full h-full object-cover'/>
            </div>
        </div>
        <div className='w-full lg:w-[45%] flex flex-col gap-5 '>
        <h1 className='text-5xl font-bold text-center md:text-left'>Crafting Resource Library</h1>
        <p>A treasure trove of invaluable resources for crafters of all levels! Dive into our comprehensive library curated with downloadable guides, templates, patterns, and reference materials tailored specifically for jute and wooden crafts. Explore a variety of categories including beginner's guides, advanced techniques, project ideas, and sustainability tips, designed to empower crafters to unlock their creativity and enhance their skills. Browse, download, and bookmark your favorite resources to embark on a fulfilling and enriching crafting experience!</p>
        <button className='btn bg-[#2F5249] hover:bg-[#97B067] mt-5 text-white'>Go to resources</button>
        </div>
  
    </div>
    );
};

export default ResourceSection;