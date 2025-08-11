import contact from '../assets/Contact.png'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuBuilding } from "react-icons/lu";

export default function Contact(){
    return (
        <section id="contact" className="relative w-full h-screen flex items-center justify-center max-md:h-[1200px]">

            <div className="absolute inset-0 bg-cover bg-no-repeat z-0" style={{ backgroundImage: `url(${contact})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#3b2a78]/60 to-[#1E1E1F]/80 z-10"></div>

            <div className='z-20 text-white flex items-center justify-center w-[80%] gap-10 max-md:flex max-md:flex-col max-md:items-center max-md:w-full'>
                <div className='flex flex-col justify-center w-[40%] max-md:w-[70%]'>
                    <h1 className='mb-5 text-5xl font-semibold'>Let's Keep in Touch</h1>
                    <p className='mb-10 w-[60%]'>We have create a new product that will help designers, developers and companies create websites for their startups quickly and easily</p>
                    <div className='flex items-center gap-2 w-[55%]'>
                        <div className='flex flex-col self-start'>
                            <i className='mb-12'><FaPhoneAlt /></i>
                            <i className='mb-12'><MdEmail /></i>
                            <i><LuBuilding /></i>
                        </div>

                        <div className='flex flex-col self-start'>
                            <p className='mb-10 mt-[-5px]'>+1 555 505 5050</p>
                            <p className='mb-10'>info@designmodo.com</p>
                            <p>San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909</p>
                        </div>
                    </div>
                </div>
                <form className='bg-white w-[36%] h-[500px] rounded-[10px] flex flex-col items-center text-black py-7 px-8 max-md:w-[80%]'>
                    <div className='w-[100%] flex items-center justify-between gap-5 mb-6'>
                        <div className='flex flex-col self-start'>
                            <label className='text-[#1E0E62] uppercase tracking-widest text-sm font-semibold mb-3' htmlFor="name">your name</label>
                            <input 
                            type="text" 
                            name='name' 
                            id='name' 
                            placeholder='First name'
                            className='border-2 border-[#EBEAED] rounded-full py-3 px-5'
                             />
                        </div>

                        <div className='flex flex-col self-start'>
                            <label className='text-[#1E0E62] uppercase tracking-widest text-sm font-semibold mb-3' htmlFor="budget">budget</label>
                            <input className='border-2 border-[#EBEAED] rounded-full py-3 px-2 w-[80%] outline-none' type="number" name='budget' id='budget' placeholder='$500' />
                        </div>
                    </div>

                    <div className='flex flex-col self-start w-[100%] mb-6'>
                        <label htmlFor="email" className='text-[#1E0E62] uppercase tracking-widest text-sm font-semibold mb-3'>input field</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='name@mail.com'
                        className='border-2 border-[#EBEAED] rounded-full py-3 px-5'
                         />
                    </div>

                    <div className='flex flex-col self-start w-[100%] mb-6'>
                        <label htmlFor="message" className='text-[#1E0E62] uppercase tracking-widest text-sm font-semibold mb-3'>your message</label>
                        <textarea name="message" id="message" placeholder='Message' className='border-2 border-[#EBEAED] rounded-[7px] py-2 px-5 resize-none h-[100px]'></textarea>
                    </div>

                    <div className='flex items-center justify-between w-[100%]'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name='copy' id='copy' className='accent-[#25DAC5] w-[15px] h-[15px]' />
                            <label className='text-sm text-gray-400' htmlFor="copy">Send me a copy</label>
                        </div>
                        <button type='submit' className='bg-[#25DAC5] text-white w-[30%] rounded-full py-2 cursor-pointer'>Send</button>
                    </div>
                </form>
            </div>

        </section>
    )
}