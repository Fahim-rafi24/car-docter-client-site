import BannerImg from '../../../public/assets_Img/images/checkout/checkout.png'


function ContactUs(){
    return(
        <>
        <section className='grid grid-cols-1 justify-items-center mt-5'>
            <img id='contactUsBanner' src={BannerImg} alt="" />
            <p className='relative bottom-[20vh] right-[15vw] text-white font-bold text-4xl'>Check Out</p>
        </section>
        <form className='grid grid-cols-2 gap-7 w-4/6 mx-auto bg-gray-300 p-20 rounded-xl'>
            <input type="text" name='firstName' placeholder='First Name' className='border rounded-lg p-5 pl-9' required/>
            <input type="text" name='lastName' placeholder='Last Name' className='border rounded-lg p-5 pl-9' required/>
            <input type="number" name='phone' placeholder='Type Your Number' className='border rounded-lg p-5 pl-9' required/>
            <input type="email" name='email' placeholder='Type Your Email' className='border rounded-lg p-5 pl-9' required/>
            <textarea name="massage" placeholder='Your Massage' className='border h-72 rounded-lg p-5 pl-9 col-span-2' required></textarea>
            <input type="submit" value="Order Confirm" className='btn hover:bg-[#FF381199] bg-[#FF3811] col-span-2 w-full h-16 rounded-md text-2xl font-bold text-white'/>
        </form>
        </>
    )
}

export default ContactUs