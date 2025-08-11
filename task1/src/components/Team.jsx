import crew from '../assets/crew.png'
import crew2 from '../assets/crew2.png'
import crew3 from '../assets/crew3.png'
import crew4 from '../assets/crew4.png'
import crew5 from '../assets/crew5.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { FaGit } from "react-icons/fa";


export default function Team(){

    return (
        <section id="team" className="w-full h-[900px] bg-[#2F1893] flex items-center justify-center max-md:h-[1300px] max-sm:h-[1700px]">
            <div className="text-white w-[80%] mt-[-40px] max-md:flex max-md:items-center max-md:justify-center max-md:flex-col max-md:w-full">
                <div className=" w-[48%] max-md:w-[70%]">
                    <h1 className="text-4xl font-semibold mb-5">Startup Crew</h1>
                    <p className="text-lg">The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.</p>
                </div>

                <div className="flex flex-wrap items-center gap-y-20 gap-x-36 mt-20 w-[69%]">
                    <div className='flex flex-col items-center'>
                        <div className='mb-3 flex self-start'>
                           <img src={crew} alt="Image of a crew" /> 
                        </div>
                        <div>
                            <h1 className='mb-3 text-xl'>Leah Salomon</h1>
                            <p className='text-sm'>UI Designer</p>
                        </div>
                        <div className='flex self-start gap-5 mt-5'>
                            <i> <FaTwitter /> </i>
                            <i> <FaFacebookSquare /> </i>
                            <i> <FaBasketballBall /> </i>
                            <i> <FaInstagram /> </i>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='mb-3 flex self-start'>
                           <img src={crew2} alt="Image of a crew" /> 
                        </div>
                        <div>
                            <h1 className='mb-3 text-xl'>Collin Timmons</h1>
                            <p className='text-sm'>UX Designer</p>
                        </div>
                        <div className='flex self-start gap-5 mt-5'>
                            <i> <FaTwitter /> </i>
                            <i> <FaBasketballBall /> </i>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='mb-3 flex self-start'>
                           <img src={crew3} alt="Image of a crew" /> 
                        </div>
                        <div>
                            <h1 className='mb-3 text-xl'>Miguel Osborne</h1>
                            <p className='text-sm'>Front-end Developer</p>
                        </div>
                        <div className='flex self-start gap-5 mt-5'>
                            <i> <FaSkype /> </i>
                            <i> <TbBrandGmail /> </i>
                            <i> <FaGit /> </i>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='mb-3 flex self-start'>
                           <img src={crew4} alt="Image of a crew" /> 
                        </div>
                        <div>
                            <h1 className='mb-3 text-xl'>Taylor Simon</h1>
                            <p className='text-sm'>Product Manager</p>
                        </div>
                        <div className='flex self-start gap-5 mt-5'>
                            <i> <FaTwitter /> </i>
                            <i> <FaInstagram /> </i>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='mb-3 flex self-start'>
                           <img src={crew5} alt="Image of a crew" /> 
                        </div>
                        <div>
                            <h1 className='mb-3 text-xl'>Steven MacAlister</h1>
                            <p className='text-sm'>Copyrighter</p>
                        </div>
                        <div className='flex self-start gap-5 mt-5'>
                            <i> <FaTwitter /> </i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}