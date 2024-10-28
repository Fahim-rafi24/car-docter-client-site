import React from 'react';
import HomeSlider from '../HomeSlider/HomeSlider';
import partsImg from '../../../public/assets_Img/images/about_us/parts.jpg'
import bannerPersonImg from "../../../public/assets_Img/images/about_us/person.jpg"
import { BiCalendar } from "react-icons/bi";
import { MdAddCall } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import groupImg from "../../../public/assets_Img/icons/group.svg"
import checkImg from "../../../public/assets_Img/icons/check.svg"
import deliverytImg from "../../../public/assets_Img/icons/deliveryt.svg"
import clockImg from "../../../public/assets_Img/icons/clock.svg"
import WrenchImg from "../../../public/assets_Img/icons/Wrench.svg"
import personImg from "../../../public/assets_Img/icons/person.svg"



const Home = () => {
    return (
        <>
            {/* home banner */}
            <section className=''>
                <HomeSlider></HomeSlider>
                <div className='relative bottom-[50vh] left-[23vw] text-white w-fit border rounded-xl p-5'>
                    <h2 className='text-5xl font-bold'>
                        Affordable <br />Price For <br />Car Servicing
                    </h2>
                    <p className='mt-20 font-light'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                    <div className='mt-10'>
                        <button className="btn btn-info bg-[#FF3811] text-white border-none mr-5">Discover More</button>
                        <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#FF3811]">Latest Project</button>
                    </div>
                </div>
            </section>
            {/* home about us */}
            <section className='flex justify-between w-4/5 mx-auto'>
                <div className='w-2/6'>
                    <img src={bannerPersonImg} className='w-[40vw] h-[50vh] rounded-md' />
                    <img src={partsImg} className='relative w-[20vw] h-[35vh] bottom-[20vh] left-[15vw] p-2 bg-white rounded-lg' />
                </div>
                <div className='w-3/6'>
                    <h6 className='text-[#FF3811] text-xl font-semibold mt-20 mb-5'>About Us</h6>
                    <h2 className='text-6xl font-semibold mb-10'>We are qualified <br />& of experience <br />in this field</h2>
                    <p className='text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='my-5 text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-info bg-[#FF3811] text-white border-none mr-5">Get More Info</button>
                </div>
            </section>
            {/* service Title */}
            <div className='text-center'>
                <h6 className='text-[#FF3811] text-xl font-bold'>Service</h6>
                <h3 className='text-5xl my-4 font-bold'>Our Service Area</h3>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            {/* dinamic Service card show area */}
            <></>
            {/* see more Btn */}
            <div className='text-center my-5'>
                <button className="btn btn-outline text-[#FF3811] hover:bg-green-300 hover:border-none hover:text-[#FF3811]">More Services</button>
            </div>
            {/* store info Area */}
            <section className='w-4/5 mx-auto bg-[#151515] flex justify-between gap-4 text-white p-16 rounded-xl'>
                <div className='flex'>
                    <BiCalendar className='h-full text-6xl' />
                    <div className='ml-3'>
                        <p className='text-sm'>We are open monday-friday</p>
                        <h3 className='text-2xl'>7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className='flex'>
                    <MdAddCall className='h-full text-6xl' />
                    <div className='ml-3'>
                        <p className='text-sm'>Have a question?</p>
                        <h3 className='text-2xl'>+2546 251 2658</h3>
                    </div>
                </div>
                <div className='flex'>
                    <IoLocationSharp className='h-full text-6xl' />
                    <div className='ml-3'>
                        <p className='text-sm'>Need a repair? our address</p>
                        <h3 className='text-2xl'>Liza Street, New York</h3>
                    </div>
                </div>
            </section>
            {/* Products Title */}
            <div className='text-center mt-20'>
                <h6 className='text-[#FF3811] text-xl font-bold'>Popular Products</h6>
                <h3 className='text-5xl my-4 font-bold'>Browse Our Products</h3>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            {/* product card area */}
            <></>
            {/* see more Btn */}
            <div className='text-center my-5'>
                <button className="btn btn-outline text-[#FF3811] hover:bg-green-300 hover:border-none hover:text-[#FF3811]">More Products</button>
            </div>
            {/* team title */}
            <div className='text-center mt-20'>
                <h6 className='text-[#FF3811] text-xl font-bold'>Team</h6>
                <h3 className='text-5xl my-4 font-bold'>Meet Our Team</h3>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            {/* team card */}
            <></>
            {/* Why Choose Us */}
            <div className='text-center mt-20'>
                <h6 className='text-[#FF3811] text-xl font-bold'>Core Features</h6>
                <h3 className='text-5xl my-4 font-bold'>Why Choose Us</h3>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            {/* card area */}
            <section className='w-5/6 mx-auto flex justify-between p-5 my-5 rounded-lg'>
            <div className='border w-[10%] p-3 rounded-lg grid justify-items-center'>
                <img src={groupImg} alt="" />
                <h4>Expert Team</h4>
            </div>
            <div className='border bg-[#FF3811] w-[10%] p-3 rounded-lg grid justify-items-center'>
                <img src={clockImg} alt="" />
                <h4 className='text-white'>Expert Team</h4>
            </div>
            <div className='border w-[10%] p-3 rounded-lg grid justify-items-center'>
                <img src={personImg} alt="" />
                <h4>Expert Team</h4>
            </div>
            <div className='border w-[10%] p-3 rounded-lg grid justify-items-center'>
                <img src={WrenchImg} alt="" />
                <h4>Expert Team</h4>
            </div>
            <div className='border w-[10%] p-3 rounded-lg grid justify-items-center'>
                <img src={checkImg} alt="" />
                <h4>Expert Team</h4>
            </div>
            <div className='border w-[10%] p-3 rounded-lg grid justify-items-center'>
                <img src={deliverytImg} alt="" />
                <h4>Expert Team</h4>
            </div>
            </section>
            {/* What Customer Says */}
            <div className='text-center mt-20'>
                <h6 className='text-[#FF3811] text-xl font-bold'>Testimonial</h6>
                <h3 className='text-5xl my-4 font-bold'>What Customer Says</h3>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            {/* Customer Card info */}
            <></>
            
        </>
    )
}
export default Home