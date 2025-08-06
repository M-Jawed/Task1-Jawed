import Hero from '../assets/Hero.png'
import Header from './Header'

export default function Landing(){
    return (
        <main style={{backgroundImage: `url(${Hero})`}} className='h-screen w-[100%] bg-no-repeat bg-cover'>
            <Header />
            <h1>This is the landing page</h1>
        </main>
    )
}