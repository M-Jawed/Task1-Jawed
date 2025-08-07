export default function Carousel({children: texts}){
    return (
        <div className="overflow-hidden">
            <div className="flex ">{texts}</div>
        </div>
    )
}