function CallToAction() {
  return (
    <section className="px-4 py-12 lg:py-20 lg:px-20 flex flex-col items-center text-center">
      <div className="text-3xl md:text-3xl font-bold capitalize flex items-center gap-2 justify-center">
        <span>call to action </span>
      </div>

      <p className="text-lg md:text-lg font-medium mt-3 max-w-2xl text-center md:text-left">
      Ready to Ship or Receive?
      </p>
      <p className="text-sm italic md:text-lg font-light mt-3 max-w-2xl text-center md:text-left">
      Get fast, affordable shipping from anywhere in the world   directly to Rwanda.
      </p>
      <button className=" text-xl capitalize md:text-lg font-medium mt-3 md:w-48 duration-300 ease  w-1/2 hover:bg-skyBlue hover:text-white text-center  border-2 px-2 py-2 border-skyBlue rounded-2xl text-skyBlue">contact us</button>
    </section>
  );
}

export default CallToAction;
