import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


export default function Footer(){
    return (
        <footer id="footer" className="w-full bg-[#2F1893] h-[240px] flex items-center justify-center max-md:h-[440px]">
            
            <div className="text-white w-[80%]">
                <div className="flex items-center justify-between w-[100%]">
                    <div>
                        <h1 className="font-semibold text-2xl">Startup 3</h1>
                    </div>

                    <div className=" flex items-center gap-5">
                        <p>Privacy Policy</p>
                        <p>Terms</p>
                        <div className="flex items-center gap-5">
                            <i><FaTwitter /></i>
                            <i><FaFacebookF /></i>
                            <i><BiLogoGmail /></i>
                        </div>
                    </div>
                </div>

                <div className="w-full border-1 border-gray-300 mt-10"></div>

                <div className="flex items-center justify-between w-full mt-10 max-sm:gap-10">
                    <div className="max-sm:w-[80%]">
                        <nav>
                            <ul className="flex items-center gap-4 max-md:flex-col">
                                <li><a href="#">Tour</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#pricing">Pricing Plans</a></li>
                                <li><a href="#showcase">Our Works</a></li>
                                <li><a href="#callToAction">Brands</a></li>
                                <li><a href="#contact">Contacts</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <p>© 2017 Designmodo. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}