import bgimage from '../assets/air.jpg'
function WhoweAre(){
    return(<>
        <section className="mx-4 flex flex-col items-center mt-4 text-center">
        <div className="text-3xl  md:text-5xl font-bold capitalize space-x-2 flex items-center justify-center">
            <h1 className="text-skyBlue">Who</h1>
            <span>we are</span>
        </div>

        <p className="text-sm font-medium md:text-xl mt-2 max-w-xl">
            Great Hills Logistics – Bringing the World to Rwanda, One Hill at a Time
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <img src={bgimage} alt="who we are" className="w-60 h-auto object-cover rounded-xl" />

            <div className="text-[18px] md:text-[22px] text-left max-w-2xl font-light px-4 md:px-0">
            Founded in 2012, Great Hills Logistics has become one of Rwanda’s most trusted shipping and delivery companies. With over a decade of experience, we specialize in transporting goods from international destinations directly to Rwanda, ensuring safe, fast, and reliable service for individuals and businesses alike.
            </div>
        </div>
        </section>

    </>)
}
export default WhoweAre;