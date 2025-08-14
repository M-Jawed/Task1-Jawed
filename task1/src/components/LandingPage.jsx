import Hero from '../assets/Hero.png'
import Header from './Header'
import White from '../assets/White.png'
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


export default function Landing(){

    return (
        <main id='landing' className='relative h-screen w-[100%] flex items-center flex-col '>
            <div className='relative z-20'>
                <Header />
            </div>
            <div className='w-[70%] flex items-center justify-between absolute top-[310px] z-20 max-md:hidden'>
                <button className='text-3xl'> <MdKeyboardArrowLeft className='fill-white cursor-pointer' /> </button>
                <button className='text-3xl'> <MdKeyboardArrowRight className='fill-white cursor-pointer' /> </button>
            </div>
            <div style={{backgroundImage: `url(${Hero})`}} className='absolute inset-0 bg-cover bg-no-repeat bg-center z-0'></div>
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-purple-600 via-purple-700 to-blue-900 opacity-40'></div>
            <div className='relative z-20 mt-[150px] text-center w-[650px] flex flex-col items-center max-md:w-[500px] max-sm:w-[450px] '>
                <h1 className='text-white text-2xl font-semibold mb-[20px] max-md:text-lg'>Startup 3</h1>
                <h1 className='text-white text-6xl font-semibold mb-[20px] max-md:text-4xl'>Forget About Code</h1>
                <p className='text-white text-xl mb-[50px] max-md:text-lg max-sm:text-sm max-[380px]:w-[300px]'>Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding. </p>
                <div className='flex items-center gap-[2px]'>
                    <GoDotFill className='fill-white' />
                    <GoDot className='text-white' />
                    <GoDot className='text-white' />
                    <GoDot className='text-white' />
                    <GoDot className='text-white' />
                </div>
                <button className='mt-[50px] py-3 px-6 bg-[#4B32F7] text-white rounded-full flex items-center justify-center'>Create an account</button>
            </div>
        </main>
    )
}