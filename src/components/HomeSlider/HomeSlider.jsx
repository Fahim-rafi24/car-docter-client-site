


function HomeSlider() {
    return (
        <>
            <div className='w-4/6 mx-auto' id="HomeSlider">
                <div className="carousel w-[100%] rounded-xl">
                    <div id="slide1" className="carousel-item relative w-full h-[60vh]">
                        <img
                            src="https://i.ibb.co.com/rv9qrZV/5.jpg"
                            className="w-full rounded-xl"/>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-[60vh]">
                        <img
                            src="https://i.ibb.co.com/KXFXmNX/2.jpg"
                            className="w-full rounded-xl" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-[60vh]">
                        <img
                            src="https://i.ibb.co.com/KKjC76N/3.jpg"
                            className="w-full rounded-xl" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full h-[60vh]">
                        <img
                            src="https://i.ibb.co.com/n6DqWsL/4.jpg"
                            className="w-full rounded-xl" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full h-[60vh]">
                        <img
                            src="https://i.ibb.co.com/1Gf72LQ/1.jpg"
                            className="w-full rounded-xl" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full h-[60vh]">
                        <img
                            src="https://i.ibb.co.com/tXvy4z6/6.jpg"
                            className="w-full rounded-xl" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeSlider