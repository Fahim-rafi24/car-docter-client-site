import BannerImg from '../../../public/assets_Img/images/checkout/checkout.png'



export default function AddNewService(){
    return(
        <>
        <section className='grid grid-cols-1 justify-items-center mt-5'>
            <img id='contactUsBanner' src={BannerImg} alt="" />
            <p className='relative bottom-[20vh] right-[15vw] text-white font-bold text-4xl'>Add New Service</p>
        </section>
        <form className='grid grid-cols-2 gap-7 w-4/6 mx-auto bg-gray-300 p-20 rounded-xl'>
            <input type="text" name='name' placeholder='Service Name' className='border rounded-lg p-5 pl-9 border-black' required/>
            <input type="number" name='price' placeholder='Service Price' className='border rounded-lg p-5 pl-9 border-black' required/>
            <input type="text" name='url' placeholder='Service  Photo URl' className='border rounded-lg p-5 pl-9 col-span-2 border-black' required/>
            <input type="text" name='video' placeholder='Service video iframe' className='border rounded-lg p-5 pl-9 col-span-2 border-black' required/>
            <textarea name="info" placeholder='Service Info' className='border h-72 rounded-lg p-5 pl-9 col-span-2 border-black' required></textarea>
            <input type="submit" value="Add New Service" className='btn hover:bg-[#FF381199] bg-[#FF3811] col-span-2 w-full h-16 rounded-md text-2xl font-bold text-white'/>
        </form>
        </>
    )
}