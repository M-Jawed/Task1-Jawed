import user from '../assets/user.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import user4 from '../assets/user4.png'


export default function Testimonial(){
    const users = [
        {
            img: user,
            info: 'Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support',
            name: 'Rayhan Curran'
        },
        {
            img: user2,
            info: 'As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website',
            name: 'Kayley Frame'
        },
        {
            img: user3,
            info: 'The most important part of the Startup Framework is the samples',
            name: 'Gene Whitfield'
        },
        {
            img: user4,
            info: "I've built my website with Startup just in one day, and it was ready-to-go.",
            name: 'Allan Kim'
        }
    ]

    const usersElement = users.map((item, index) => {
        return (
            <div key={index} className='border-2 border-[#615691] flex items-center gap-5 rounded-[9px] w-[470px] h-[237px] px-8 max-sm:w-[380px] max-[380px]:w-[300px]'>
                <div className='w-[270px] h-[70px] mt-[-110px] max-[380px]:w-[200px] max-[380px]:h-[50px]'>
                    <img className='w-full h-full object-cover rounded-[9px]' src={item.img} alt="Image of a person" />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='h-[170px]'>
                        <p className='max-[380px]:text-sm'> {item.info} </p>
                    </div>
                    <span className='text-[#615691] uppercase tracking-widest text-sm font-semibold'> {item.name} </span>
                </div>
            </div>
        )
    })
    return (
        <section id="testimonial" className="w-[100%] h-screen bg-[#1E0E62] flex items-center justify-center max-md:h-[1200px] max-md:justify-start max-md:pl-10">
            <div className="text-white w-[70%] px-10 max-[380px]:w-full">
                <h1 className="text-4xl font-semibold mb-10 max-[380px]:text-lg">Our Happy Clients</h1>

                <div className='flex items-center flex-wrap gap-7'>
                    {usersElement}
                </div>
            </div>
        </section>
    )
}