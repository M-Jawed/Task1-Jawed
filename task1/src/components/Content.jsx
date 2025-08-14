import content from '../assets/Content.png'

export default function Content(){
    return (
        <section className='relative w-[100%] h-screen flex flex-col items-center justify-center'>
            <div style={{backgroundImage:`url(${content})`}} className='absolute inset-0 bg-cover bg-no-repeat bg-center z-0'></div>
            <div className='absolute inset-0 z-10 bg-gradient-to-r from-blue-900 to-blue-500 opacity-60'></div>
            <div className='z-20 w-[60%] text-center text-white px-[100px] max-md:w-full max-[380px]:w-full'>
                <p className='text-lg font-bold tracking-widest mb-[40px] max-md:text-sm'>FREE SAMPLE</p>
                <h1 className='text-5xl font-semibold mb-[40px] max-md:text-4xl'>Powerful Generator and Free Figma Sources</h1>
                <p className='text-lg text-gray-300 max-[380px]:text-sm'>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.</p>
            </div>
        </section>
    )
}