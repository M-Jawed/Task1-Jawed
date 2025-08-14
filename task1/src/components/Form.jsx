import Content from '../assets/Content.png'

export default function Form(){
    return (
        <section id="form" className="relative w-[100%] h-screen flex flex-col items-center justify-center max-[380px]:px-5">
            <div style={{backgroundImage: `url(${Content})`}} className="absolute inset-0 bg-cover bg-no-repeat z-0"></div>
            <div className='absolute inset-0 z-10 bg-gradient-to-r from-blue-900 to-blue-500 opacity-60'></div>

            <div className='z-20 flex items-center justify-center gap-30 w-[100%] h-screen'>
                <div className='text-white w-[20%] max-md:hidden'>
                    <h1 className='text-4xl font-semibold mb-[20px]'>We solve digital problems with an outstanding creative flare</h1>
                    <p className='text-[12px] w-[90%]'>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
                </div>
                <form className='w-[470px] h-[550px] flex flex-col items-center bg-white py-5 rounded-[8px]'>
                    <div className='w-[100%] flex items-center text-center'>
                        <button className='w-[100%] uppercase font-semibold tracking-wider text-[#1E0E62] border-b-4 border-[#1E0E62] pb-5'>sign up</button>
                        <button className='w-[100%] uppercase font-semibold tracking-wider text-gray-300 border-b-4 border-gray-300 pb-5'>login</button>
                    </div>

                    <div className='flex flex-col items-center mt-[50px] w-[100%]'>
                        <input 
                        type="text"
                        id='email'
                        name='email'
                        placeholder='Your email'
                        className='border-3 border-gray-300 rounded-full w-[70%] py-3 px-5 mb-[30px]' 
                        />

                        <input 
                        type="text" 
                        name="password" 
                        id="password"
                        placeholder='Your password'
                        className='border-3 border-gray-300 rounded-full w-[70%] py-3 px-5 mb-[50px]' 
                        />

                        <button type='submit' className='w-[70%] bg-[#25DAC5] rounded-full py-3 text-white text-lg'>Create an Account</button>

                        <div className='flex items-center text-gray-400 mt-5 w-[70%]'>
                            <div className='flex-grow border-t-2 border-gray-300'></div>
                            <span className='mx-4 text-sm'>or</span>
                            <div className='flex-grow border-t border-gray-300'></div>
                        </div>
 
                        <button type='submit' className='w-[70%] bg-[#1DA1F2] rounded-full py-3 text-white text-lg mt-5'>Login via Twitter</button>
                    </div>
                </form>
            </div>
        </section>
    )
}