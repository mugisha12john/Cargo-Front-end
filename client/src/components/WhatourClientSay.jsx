import { FaStar } from 'react-icons/fa6';
import profileImg from '../assets/plofile.jpg';
function WhatourClientSay() {
  return (
    <section className="px-4 py-12 lg:py-20 lg:px-20 flex flex-col items-center text-center">
      <div className="text-3xl md:text-5xl font-bold capitalize flex items-center gap-2 justify-center">
        <span>what our </span>
        <h1 className="text-skyBlue">client</h1>
        <span>say</span>
      </div>

      <p className="text-sm md:text-lg font-medium mt-3 max-w-2xl text-center md:text-left">
       Our clients’ satisfaction reflects our commitment to delivering the world to Rwanda  one hill at a time.
      </p>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {[
          {
            profile: profileImg,
            name: "Sandrine T., Kigali",
            desc:`“Great Hills delivered my package from China in just    5 days — very smooth!”`,
          },
          {
            profile: profileImg,
            name: "Buban M., Rubavu",
            desc: `“Great Hills delivered my package from Uk in just  2 days — very good!”`,
          },
        ].map(({ profile, name, desc }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4"
          >
           <div
  className="rounded-full h-40 w-40 bg-cover bg-center"
  style={{ backgroundImage: `url(${profile})` }}
>
</div>

            <div className="text-yellow-400  mt-2 flex"><FaStar></FaStar><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <div className="text-lg md:text-xl font-bold mt-3">{name}</div>
            <div className="text-sm md:text-base font-light mt-1">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatourClientSay;
