import calltoaction from '../assets/CallToAction.png'
import { IoMdPlay } from "react-icons/io";


export default function CallToAction(){
    return (
        <section id="callToAction" className="relative w-full h-screen flex flex-col items-center justify-center">
            <div style={{backgroundImage: `url(${calltoaction})`}} className='absolute inset-0 bg-cover bg-no-repeat'></div>
            <div className='absolute inset-0 z-10 bg-gradient-to-br from-purple-300 via-indigo-400 to-gray-700 opacity-50'></div>

            <div className='text-white z-20 text-center flex flex-col items-center justify-center'>
                <h1 className='text-7xl font-semibold mb-3 max-md:text-5xl  max-[380px]:text-2xl'>Easy to setup.</h1>
                <span className='text-7xl font-semibold mb-10 max-md:text-5xl max-[380px]:text-2xl'>Easy to maintain</span>
                <p className='w-[40%] text-center mb-10 text-xl max-[380px]:text-sm'>Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.</p>
                <div className='flex items-center gap-5 justify-center w-full'>
                    <button className='bg-[#EA3223] w-[6%] py-5 rounded-[50%] cursor-pointer text-center flex items-center justify-center max-md:w-[10%] max-[380px]:w-[20%]'> <IoMdPlay /> </button>
                    <button className='bg-[#25DAC5] w-[15%] py-5 rounded-full font-semibold cursor-pointer max-md:w-[25%] max-[380px]:w-[55%]'>Get Started</button>
                </div>
            </div>
        </section>
    )
}