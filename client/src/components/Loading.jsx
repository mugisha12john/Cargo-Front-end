const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col items-center space-y-4">

        <div className="w-16 h-16 border-4 border-skyBlue border-t-transparent rounded-full animate-spin" />
        <p className="text-skyBlue font-semibold text-lg sm:text-xl animate-pulse text-center">
          Loading, please wait...
        </p>

        <span className="text-sm text-gray-400 sm:text-base">
          Great Hills Logistics
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
