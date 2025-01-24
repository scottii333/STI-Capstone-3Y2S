const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 bg-gray-900">
      {/* Loading Text */}
      <div className="text-white font-semibold text-lg flex items-center">
        Loading
        <span className="ml-1 animate-blink">.</span>
        <span className="animate-blink [animation-delay:0.3s]">.</span>
        <span className="animate-blink [animation-delay:0.6s]">.</span>
      </div>

      {/* Loading Bar */}
      <div className="relative flex items-center p-1 w-52 h-6 bg-gray-800 shadow-inner shadow-black rounded-full overflow-hidden">
        {/* Animated Progress Bar */}
        <div
          className="absolute left-0 top-0 h-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 animate-loading"
          style={{ width: "100%" }}
        ></div>

        {/* White Bars */}
        <div className="relative flex justify-between w-full h-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/70 to-transparent w-2 h-9 opacity-30 transform rotate-45"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
