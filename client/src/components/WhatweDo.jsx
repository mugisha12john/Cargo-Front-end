import { FaOpencart } from "react-icons/fa";
import {
  FaBolt,
  FaBoxOpen,
  FaEarthAfrica,
  FaFileCircleCheck,
  FaGlobe,
  FaHandshake,
  FaHeadset,
  FaLock,
  FaMoneyBill1Wave,
  FaWarehouse,
} from "react-icons/fa6";

function WhatweDo() {
  return (
    <section className="px-4 py-12 lg:py-20 lg:px-20 flex flex-col items-center text-center">
      <div className="text-3xl md:text-5xl font-bold capitalize flex items-center gap-2 justify-center">
        <span>what</span>
        <h1 className="text-skyBlue">we</h1>
        <span>do</span>
      </div>

      <p className="text-sm md:text-lg font-medium mt-3 max-w-2xl text-center md:text-left">
        We offer reliable logistics and delivery solutions from international countries to Rwanda tailored to meet your needs
      </p>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          {
            icon: <FaEarthAfrica />,
            title: "International Shipping",
            desc: "Ship goods from major global cities to Rwanda with tracking and support.",
          },
          {
            icon: <FaFileCircleCheck />,
            title: "Customs Clearance",
            desc: "We handle the paperwork and processes so you don’t have to.",
          },
          {
            icon: <FaWarehouse />,
            title: "Warehousing & Holding",
            desc: "Short-term or long-term package storage available before delivery.",
          },
        ].map(({ icon, title, desc }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="bg-skyBlue rounded-full md:text-3xl md:h-12 md:w-12 h-20 w-20 flex justify-center items-center text-white text-4xl">
              {icon}
            </div>
            <div className="text-lg md:text-xl font-bold mt-3">{title}</div>
            <div className="text-sm md:text-base font-light mt-1">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatweDo;
