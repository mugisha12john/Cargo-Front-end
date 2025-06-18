import { FaBars, FaBolt, FaGlobe, FaHandshake, FaHeadset, FaLock, FaMoneyBill1Wave, FaUserClock } from "react-icons/fa6";

function WhychooseUs(){
    return(<>
            <section className="mx-4 flex flex-col items-center mt-4 text-center">
            <div className="text-3xl  md:text-5xl font-bold capitalize space-x-2 flex items-center justify-center">
                <span>why choose</span>
                <h1 className="text-skyBlue">Us</h1>
            </div>
    
            <p className="text-sm text-left font-medium md:text-xl mt-2 max-w-xl">
               At Great Hills Logistics, we’re committed to delivering your goods quickly, safely, and affordably 
                 with customer satisfaction at the heart of what we do.
            </p>
            <div className="grid w-full mt-12 grid-cols-2 gap-6 md:grid-cols-3 md:max-w-full">
                <div className="box-1">
                    <div className="max-w-48 text-center flex items-center flex-col ">
                        <div className="bg-skyBlue rounded-full h-20 w-20  flex justify-center items-center text-5xl text-white"><FaHeadset></FaHeadset></div>
                        <div className="text-lg font-bold mt-2 md:text-2xl">24/7 User Support</div>
                        <div className="text-sm font-medium mt-1">We’re always here for you day or night.</div>
                    </div>
                </div>
                <div className="box-2">
                    <div className="max-w-48 text-center flex items-center flex-col">
                        <div className="bg-skyBlue rounded-full h-20  w-20   flex justify-center items-center text-white text-5xl"><FaBolt></FaBolt></div>
                        <div className="text-lg font-bold mt-2">Fast Delivery</div>
                        <div className="text-sm font-medium mt-1">We ensure on time delivery, every time.</div>
                    </div>
                </div>
                <div className="box-3">
                    <div className="max-w-48 text-center flex items-center flex-col">
                        <div className="bg-skyBlue rounded-full h-20  w-20   flex justify-center items-center text-white text-5xl "><FaHandshake></FaHandshake></div>
                        <div className="text-lg font-bold mt-2">Trusted Company</div>
                        <div className="text-sm font-medium mt-1">Over 10 years of  experience in logistics.</div>
                    </div>
                </div>
                <div className="box-4">
                    <div className="max-w-48 text-center flex items-center flex-col">
                        <div className="bg-skyBlue rounded-full h-20  w-20   flex justify-center items-center text-white text-5xl"><FaMoneyBill1Wave></FaMoneyBill1Wave></div>
                        <div className="text-lg font-bold mt-2">Affordable Costs</div>
                        <div className="text-sm font-medium mt-1">Get international service at local prices.</div>
                    </div>
                </div>
                <div className="box-5">
                    <div className="max-w-48 text-center flex items-center flex-col">
                        <div className="bg-skyBlue rounded-full h-20  w-20   flex justify-center items-center text-white text-5xl"><FaGlobe></FaGlobe></div>
                        <div className="text-lg font-bold mt-2">Global Reach </div>
                        <div className="text-sm font-medium mt-1">Shipping from multiple countries to Rwanda.</div>
                    </div>
                </div>
                <div className="box-6">
                    <div className="max-w-48 text-center flex items-center flex-col">
                        <div className="bg-skyBlue rounded-full h-20  w-20   flex justify-center items-center text-white text-5xl"><FaLock></FaLock></div>
                        <div className="text-lg font-bold mt-2">Safe Shipping</div>
                        <div className="text-sm font-medium mt-1">Your goods are handled with the utmost care.</div>
                    </div>
                </div>
            </div>    
            </section>

    
    </>)
}
export default WhychooseUs;