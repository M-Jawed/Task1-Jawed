import fadribble from '../assets/fa-dribbble.png'
import fabehance from '../assets/fa-behance.png'

export default function Header(){
    return (
        <header className="w-[100%] bg-transparent pt-[60px]">
            <nav>
                <ul className='flex items-center justify-center gap-8 text-white font-semibold '>
                    <li className='hover:text-gray-300'><a href="#landing">Home</a></li>
                    <li className='hover:text-gray-300'><a href="#features">Features</a></li>
                    <li className='hover:text-gray-300'><a href="#pricing">Pricing</a></li>
                    <li className='hover:text-gray-300'><a href="#showcase">Blog</a></li>
                    <li className='hover:text-gray-300'><img src={fadribble} className='hover:fill-gray-300 cursor-pointer ' alt="Image of a basketball" /></li>
                    <li className='hover:text-gray-300'><img src={fabehance} className='hover:fill-gray-300 cursor-pointer' alt="Image of a B and E word" /></li>
                </ul>
            </nav>
        </header>
    )
}