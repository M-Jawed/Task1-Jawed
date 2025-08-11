import pricing from '../assets/Pricing.png'
import { TiTick } from "react-icons/ti";

export default function Pricing(){
    return (
        <section id="pricing" className="w-full h-[1100px] relative flex items-center justify-center max-md:h-[2500px]">
            <div style={{backgroundImage: `url(${pricing})`}} className='absolute inset-0 bg-cover bg-no-repeat z-0'></div>
            <div className='absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-500 to-blue-300 z-10 opacity-50'></div>

            <div className='text-white z-20 w-[80%]'>
                <div className='text-center flex flex-col items-center mb-10'>
                    <h1 className='text-5xl font-semibold mb-5'>Plans & Pricing</h1>
                    <p className='w-[55%] text-xl'>Startup Framework is free forever — you only pay for custom domain hosting or to export your site.</p>
                </div>

                <div className='w-[100%] flex items-center gap-5 max-md:flex-wrap max-md:justify-center'>
                    <div className='border-2 border-gray-300 rounded-[9px] flex flex-col items-center w-[70%] px-8 py-10'>
                        <div className='flex flex-col self-start px-10 mb-5'>
                            <h1 className='text-2xl mb-10'>Starter</h1>
                            <h1 className='text-5xl mb-10 font-bold'>9.99<span className='text-sm'>$</span></h1>
                        </div>

                        <div className='mb-5 flex flex-col self-start'>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> 2 GB of Space</p>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> 14 days of backups</p>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> Social integrations</p>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> Client billing</p>
                            <p className='text-gray-300 flex items-center gap-2 mb-2'> <TiTick className='fill-transparent' /> Remote access</p>
                            <p className='text-gray-300 flex items-center gap-2 mb-2'> <TiTick className='fill-transparent' /> Custom domain</p>
                            <p className='text-gray-300 flex items-center gap-2 mb-2'> <TiTick className='fill-transparent' /> 24 hours support</p>
                            <p className='text-gray-300 flex items-center gap-2 mb-2'> <TiTick className='fill-transparent' /> Admin tools</p>
                            <p className='text-gray-300 flex items-center gap-2 mb-2'> <TiTick className='fill-transparent' /> Collaboration tools</p>
                            <p className='text-gray-300 flex items-center gap-2 mb-2'> <TiTick className='fill-transparent' /> User management</p>
                        </div>
                        <button className='w-[60%] bg-transparent text-white font-semibold text-xl border-2 border-gray-300 py-3 rounded-full'>Get Started</button>
                    </div>
                    
                    <div className='border-2 border-gray-300 rounded-[9px] flex flex-col items-center w-[70%] px-8 py-10'>
                        <div className='flex flex-col self-start px-10 mb-5'>
                            <h1 className='text-2xl mb-10'>Professional</h1>
                            <h1 className='text-5xl mb-10 font-bold'>19.99<span className='text-sm'>$</span></h1>
                        </div>

                        <div className='mb-5 flex flex-col self-start'>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> 2 GB of Space</p>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> 14 days of backups</p>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> Social integrations</p>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> Client billing</p>
                            <p className='flex items-center gap-2 mb-2'> <TiTick className='fill-green-500' /> Remote access</p>
                            <p className='flex items-center gap-2 mb-2'> <TiTick className='fill-green-500' /> Custom domain</p>
                            <p className='flex items-center gap-2 mb-2'> <TiTick className='fill-green-500' /> 24 hours support</p>
                            <p className='text-gray-300 flex items-center gap-2 mb-2'> <TiTick className='fill-transparent' /> Admin tools</p>
                            <p className='text-gray-300 flex items-center gap-2 mb-2'> <TiTick className='fill-transparent' /> Collaboration tools</p>
                            <p className='text-gray-300 flex items-center gap-2 mb-2'> <TiTick className='fill-transparent' /> User management</p>
                        </div>
                        <button className='w-[60%] bg-[#E93A7D] text-white font-semibold text-xl border-2 border-[#E93A7D] py-3 rounded-full'>Get Started</button>
                    </div>

                    <div className='border-2 border-gray-300 rounded-[9px] flex flex-col items-center w-[70%] px-8 py-10'>
                        <div className='flex flex-col self-start px-10 mb-5'>
                            <h1 className='text-2xl mb-10'>Team</h1>
                            <h1 className='text-5xl mb-10 font-bold'>49.99<span className='text-sm'>$</span></h1>
                        </div>

                        <div className='mb-5 flex flex-col self-start'>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> 2 GB of Space</p>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> 14 days of backups</p>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> Social integrations</p>
                            <p className='flex items-center gap-2 mb-2'><TiTick className='fill-green-500' /> Client billing</p>
                            <p className='flex items-center gap-2 mb-2'> <TiTick className='fill-green-500' /> Remote access</p>
                            <p className='flex items-center gap-2 mb-2'> <TiTick className='fill-green-500' /> Custom domain</p>
                            <p className='flex items-center gap-2 mb-2'> <TiTick className='fill-green-500' /> 24 hours support</p>
                            <p className='flex items-center gap-2 mb-2'> <TiTick className='fill-green-500' /> Admin tools</p>
                            <p className='flex items-center gap-2 mb-2'> <TiTick className='fill-green-500' /> Collaboration tools</p>
                            <p className='flex items-center gap-2 mb-2'> <TiTick className='fill-green-500' /> User management</p>
                        </div>
                        <button className='w-[60%] bg-transparent text-white font-semibold text-xl border-2 border-gray-300 py-3 rounded-full'>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}