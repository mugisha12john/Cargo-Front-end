import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-skyBlue">404</h1>
        <p className="text-xl sm:text-2xl font-semibold text-gray-700">
          Page Not Found
        </p>
        <p className="text-gray-500 max-w-md mx-auto">
          The page you are looking for doesn't exist or was moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-skyBlue text-white px-6 py-2 rounded-full shadow hover:bg-sky-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
