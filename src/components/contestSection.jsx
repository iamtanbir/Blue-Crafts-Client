

const ContestSection = () => {
    return (
        <div className='h-[450px] p-0 flex items-center md:flex-row flex-col-reverse mx-auto w-10/12 max-w-[1000px] gap-5 mt-96 md:mt-24 '>
            <div className='w-full md:w-1/2 flex flex-col'>
            <h1 className='text-5xl font-bold text-center md:text-left'>Craft Masters Challenge</h1>
            <p className='mt-5 text-center md:text-start'>Embark on the Craft Masters Challenge and put your crafting skills to the test! Create stunning jute and wooden masterpieces that showcase your talent and creativity. Compete against fellow crafters, earn recognition for your craftsmanship, and win fabulous prizes. Unleash your imagination and join the ultimate crafting showdown today!</p>
            <button className='btn bg-[#2F5249] hover:bg-[#97B067] mt-5 text-white md:w-fit'>Participate</button>
            </div>
 
            <img src='/images/contest.jpg' className='md:w-1/2 h-full object-cover'/>

        </div>
    );
};

export default ContestSection;