import { useEffect } from "react";
import Loader from "./assets/Components/Loader";
import MainPage from "./assets/Main/MainPage";
import { useState } from "react";

const App = () => {
  // State to track whether Main has loaded
  const [isMainLoaded, setIsMainLoaded] = useState(false);

  // Simulate the loading process of Main
  useEffect(() => {
    // Simulating an async operation like fetching data
    const loadMain = setTimeout(() => {
      setIsMainLoaded(true); // Mark Main as loaded after 2 seconds
    }, 12000);

    return () => clearTimeout(loadMain); // Cleanup timeout
  }, []);
  return (
    <div>
      {isMainLoaded ? (
        <div>
          <MainPage />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default App;
