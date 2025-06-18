import {
  FaBolt,
  FaGlobe,
  FaHandshake,
  FaHeadset,
  FaLock,
  FaMoneyBill1Wave,
} from "react-icons/fa6";

function WhychooseUs() {
  return (
    <section className="px-4 py-12 lg:py-20 lg:px-20 flex flex-col items-center text-center">
      <div className="text-3xl md:text-5xl font-bold capitalize flex items-center gap-2 justify-center">
        <span>why choose</span>
        <h1 className="text-skyBlue">Us</h1>
      </div>

      <p className="text-sm md:text-lg font-medium mt-3 max-w-2xl text-center md:text-left">
        At Great Hills Logistics, we’re committed to delivering your goods quickly, safely, and affordably — with customer satisfaction at the heart of what we do.
      </p>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          {
            icon: <FaHeadset />,
            title: "24/7 User Support",
            desc: "We’re always here for you day or night.",
          },
          {
            icon: <FaBolt />,
            title: "Fast Delivery",
            desc: "We ensure on time delivery, every time.",
          },
          {
            icon: <FaHandshake />,
            title: "Trusted Company",
            desc: "Over 10 years of experience in logistics.",
          },
          {
            icon: <FaMoneyBill1Wave />,
            title: "Affordable Costs",
            desc: "Get international service at local prices.",
          },
          {
            icon: <FaGlobe />,
            title: "Global Reach",
            desc: "Shipping from multiple countries to Rwanda.",
          },
          {
            icon: <FaLock />,
            title: "Safe Shipping",
            desc: "Your goods are handled with the utmost care.",
          },
        ].map(({ icon, title, desc }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="bg-skyBlue rounded-full h-20 w-20 flex justify-center items-center text-white text-4xl">
              {icon}
            </div>
            <div className="text-lg md:text-xl font-bold mt-3">{title}</div>
            <div className="text-sm md:text-base font-medium mt-1">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhychooseUs;
