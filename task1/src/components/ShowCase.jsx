import work from '../assets/work.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'


export default function ShowCase(){
    const works = [
        {
            img: work,
            name: 'ui kit',
            description: 'Mozart Project'
        },

        {
            img: work2,
            name: 'framework',
            description: 'Startup Framewrk 2.0'
        },

        {
            img: work3,
            name: 'photos',
            description: 'From the Sky'
        },

        {
            img: work4,
            name: 'pictures',
            description: 'Air Forces'
        }
    ]

    const worksElements = works.map((item, index) => {
        return (
            <div key={index} className='flex flex-col items-center text-center text-white'>
                <div className='w-[470px] h-[280px] mb-10'>
                    <img src={item.img} className='w-full h-full object-cover' alt={`Image of a project with the name of ${item.name}`} />
                </div>

                <div>
                    <p className='uppercase tracking-widest font-semibold mb-5 text-[12px]'>{item.name}</p>
                    <h2 className='font-semibold text-lg'> {item.description} </h2>
                </div>
            </div>
        )
    })


    return (
        <section id="showcase" className="w-full h-[1100px] bg-[#2F1893] flex items-center justify-center py-[120px] max-md:h-[2100px] max-md:justify-start">
            <div className="w-[80%] mx-auto flex flex-col items-center justify-center max-md:w-full">
                <div className="w-[81%] flex items-center justify-between text-white mb-[50px]">
                    <h1 className="text-4xl font-semibold">Last works</h1>
                    <button className="border-2 border-[#615691] rounded-full w-[13%] py-2 cursor-pointer max-md:w-[30%]">View all Works</button>
                </div>

                <div className="w-[81%] flex flex-wrap items-center gap-10 gap-y-20">
                    {worksElements}
                </div>
            </div>
        </section>
    )
}