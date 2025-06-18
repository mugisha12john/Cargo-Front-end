import { FaArrowRight, FaEnvelope, FaLocationArrow, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import youtube from '../assets/youtube.png';
import instagram from '../assets/instagram.png';
import x from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import linked from '../assets/linkedin.png';
import tiktok from '../assets/tik-tok.png';
function Footer() {
  return (
    <footer className="px-4 py-12 lg:py-20 lg:px-20 flex flex-col items-center text-center">
    <div className="flex flex-col text-left">
        <div className="mt-4">
            <span className="text-xl font-bold capitalize">company info:</span>
            <ul className="list-none text-lg mt-4">
                <li className="flex gap-2 items-center"><FaLocationDot></FaLocationDot><a href="">Kigali, Rwanda</a></li>
                <li className="flex gap-2 items-center"><FaPhoneVolume></FaPhoneVolume><a href="">+250 784 961 277</a></li>
                <li className="flex gap-2 items-center"><FaEnvelope></FaEnvelope><a href="">Greathillslogostics@gmail.com</a></li>
            </ul>
        </div>
        <div className="mt-4">
            <span className="text-xl font-bold capitalize">Quick links:</span>
            <ul className="list-none text-lg mt-4">
                <li className="flex gap-2 items-center"><FaArrowRight></FaArrowRight><a href="">Home</a></li>
                <li className="flex gap-2"><FaArrowRight></FaArrowRight><a href="">Services</a></li>
                <li className="flex gap-2"><FaArrowRight></FaArrowRight><a href="">Who we are</a></li>
                <li className="flex gap-2 items-center"><FaArrowRight></FaArrowRight><a href="">What we do</a></li>
                <li className="flex gap-2"><FaArrowRight></FaArrowRight><a href="">Call to action</a></li>
                <li className="flex gap-2"><FaArrowRight></FaArrowRight><a href="">Login</a></li>
            </ul>
        </div>

        <div className="mt-4">
            <span className="text-xl font-bold capitalize">social media:</span>
            <ul className="list-none text-lg flex gap-4 mt-4">
                <li className=""><img src={instagram} alt="instagram link" className="size-8" /></li>
                <li className=""><img src={youtube} alt="youtube image link" className="size-8" /></li>
                <li className=""><img src={facebook} alt="facebook image link" className="size-8" /></li>
                <li className=""><img src={x} alt="twitter image link" className="size-8" /></li>
                <li className=""><img src={tiktok} alt="tiktok image link" className="size-8" /></li>
                <li className=""><img src={linked} alt="linkedin image link" className="size-8" /></li>
            </ul>
        </div>
    </div>
    </footer>
  );
}

export default Footer;
