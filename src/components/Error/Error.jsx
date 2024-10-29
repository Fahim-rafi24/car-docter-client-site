import errorImg from '../../../public/assets_Img/images/error.svg'
import NavBar from '../NavBar/NavBar'



const Error = () =>{
    return(
        <>
        <NavBar></NavBar>
        <section className='flex justify-center mt-[10%]'>
        <img src={errorImg}/>
        </section>
        </>
    )
}
export default Error