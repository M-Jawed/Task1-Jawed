import features from '../assets/Feautures.png'
import laptop2x from '../assets/Mockup2x.png'
import laptop from '../assets/Mockup.png'
import { IoDiamondOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import dbltab from '../assets/dbletab.png'


export default function Features(){
    return (
        <section id="features" className="relative w-[100%] h-screen flex flex-col items-center justify-center">
            <div style={{backgroundImage: `url(${features})`}} className="absolute inset-0 bg-cover bg-no-repeat z-0"></div>
            <div className='absolute inset-0 z-10 bg-gradient-to-br from-purple-300 via-indigo-400 to-gray-700 opacity-50'></div>
            <div className='z-20 flex items-center justify-between w-[100%] h-screen px-[120px]max-sm: px-[80px]'>
                <div className='ml-[-100px] max-md:w-[40%] max-md:mr-15 max-sm:mr-18'>
                    <img className='max-md:w-[100%]' src={laptop} alt="Image of a half cropped laptop" />
                </div>

                <div className=' w-[50%] text-white ml-[-60px] flex flex-col items-start max-md:w-[80%] max-sm:w-full'>
                    <h1 className='text-4xl font-bold mb-[20px] max-md:text-2xl'>We Create Something New</h1>
                    <p className='w-[65%] mb-[50px]'>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
                    
                    <div className='flex items-center gap-10'>
                        <div>
                            <img src={dbltab} className='w-[30px] mb-[20px]' alt="Image of a double tab first one being infront" />
                            <h1 className='uppercase text-[12px] tracking-widest mb-[20px]'>30 new feature pages</h1>
                            <p className='text-[12px] text-white-400'>Startup Frameworks contains <br />components and complex blocks<br /> which can easily.</p>
                        </div>

                        <div>
                            <IoDiamondOutline className='text-3xl mb-[19px]' />
                            <h1 className='uppercase text-[12px] tracking-widest mb-[20px]'>useful symbol components</h1>
                            <p className='text-[12px] text-white-400'>Samples will show you the feeling on<br /> how to play around using the<br /> components.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <GoDotFill className='text-white' />
                    <GoDot className='text-white' />
                    <GoDot className='text-white' />
                    <GoDot className='text-white' />
                    <GoDot className='text-white' />
                </div>
            </div>
        </section>
    )
}