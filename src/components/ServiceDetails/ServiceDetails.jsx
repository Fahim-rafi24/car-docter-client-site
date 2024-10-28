import bannerImg from '../../../public/assets_Img/images/checkout/checkout.png'



const video = <iframe width="560" height="315" src="https://www.youtube.com/embed/QEBbygazU5s?si=hJkOXxxATUGbkYjG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>



function ServiceDetails() {
    return (
        <>
            <section className='grid grid-cols-1 justify-items-center mt-5'>
                <img id='ServiceDetailsBanner' src={bannerImg} alt="" />
                <p className='relative bottom-[20vh] right-[15vw] text-white text-3xl font-semibold'>Service Details</p>
            </section>
            <section className="flex justify-center">
                {video}
            </section>
        </>
    )
}
export default ServiceDetails