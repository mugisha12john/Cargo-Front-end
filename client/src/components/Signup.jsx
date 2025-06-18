import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <section className="px-4 py-12 lg:py-20 lg:px-20 flex flex-col items-center text-center">

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize">
        Create Your Account
      </h1>

  
      <p className="text-base md:text-lg mt-4 max-w-xl text-center md:text-left font-medium">
        Create your account and bring the world closer, One hill at a time.
      </p>


      <form className="mt-10 flex flex-col items-center w-full max-w-md gap-4">
        <input
          type="email"
          className="border border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue text-base md:text-lg px-4 py-3 w-full rounded-xl placeholder:text-skyBlue placeholder:font-medium"
          placeholder="Email"
        />
        <input
          type="password"
          className="border border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue text-base md:text-lg px-4 py-3 w-full rounded-xl placeholder:text-skyBlue placeholder:font-medium"
          placeholder="Password"
        />
        <input
          type="password"
          className="border border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue text-base md:text-lg px-4 py-3 w-full rounded-xl placeholder:text-skyBlue placeholder:font-medium"
          placeholder="Confirm Password"
        />
        <button className="w-full bg-skyBlue text-white text-base md:text-lg font-semibold py-3 rounded-xl mt-6 hover:bg-skyHover transition">
          Sign up
        </button>
      </form>


      <div className="mt-4 text-sm md:text-base space-y-1">
        <div>
          Already have an account?{" "}
          <span className="text-skyBlue font-semibold cursor-pointer">
            <Link to="/login">Login Here</Link>
          </span>
        </div>
      </div>

      <div className="mt-6 w-full max-w-md space-y-4">
        <div className="flex gap-3 items-center border rounded-xl px-4 py-3 border-black cursor-pointer hover:bg-gray-200 transition">
          <img src={google} className="w-6 h-6" alt="Google" />
          <span className="text-sm md:text-base">Sign Up with Google</span>
        </div>
        <div className="flex gap-3 items-center border border-black rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-200 transition">
          <img src={microsoft} className="w-6 h-6" alt="Microsoft" />
          <span className="text-sm md:text-base">Sign Up with Microsoft</span>
        </div>
      </div>
      
    </section>
  );
}

export default Signup;
