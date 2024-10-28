import LogoImg from '../../../public/assets_Img/logo.svg'
import { FcGoogle } from "react-icons/fc";
import { CiTwitter } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <>
            <footer className="footer mt-10 bg-[#151515] text-white p-10">
                <aside>
                    <div className='w-20 h-20'>
                    <img src={LogoImg}/>
                    </div>
                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                    <div className='flex space-x-2 mt-2 text-3xl'>
                    <Link to={'https://www.google.com/'}><FcGoogle /></Link>
                    <Link to={'https://x.com/home'}><CiTwitter /></Link>
                    <Link to={'https://www.instagram.com/'}><FaInstagramSquare /></Link>
                    <Link to={'https://www.linkedin.com/'}><IoLogoLinkedin /></Link>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Why Car Doctor</a>
                    <a className="link link-hover">About</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accesbility</a>
                </nav>
            </footer>
        </>
    )
}
export default Footer