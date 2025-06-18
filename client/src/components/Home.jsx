import image from '../assets/bg.png';

function Home() {
  return (
 <main>
      <div
        className="h-screen mx-4 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${image})`,
        }}
      >
        {/* Centered content with safe horizontal padding */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="container mx-auto px-4 md:px-8 text-white text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Great Lake Logistics</h1>

            <hr className="border-2 border-white mt-5 w-2/3 md:w-1/2 mx-auto" />

            <h4 className="mt-4 text-sm md:text-base">
              Bring the world to Rwanda, one hill at a time
            </h4>

            <div className="mt-6 space-x-4">
              <button className="bg-skyBlue text-white px-4 py-2 rounded-2xl font-semibold transition duration-300 ease-out hover:bg-skyHover hover:border-skyHover">
                Learn more
              </button>
              <button className="border-2 border-skyBlue px-4 py-2 rounded-2xl font-semibold transition duration-300 ease-out hover:bg-skyHover hover:border-skyHover">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
