// App.jsx
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./assets/Components/Loader";
import MainPage from "./assets/Main/MainPage";

const App = () => {
  const [isMainLoaded, setIsMainLoaded] = useState(true);

  // Simulate the loading process of Main (adjust timing as needed)
  useEffect(() => {
    const loadMain = setTimeout(() => {
      setIsMainLoaded(true);
    }, 12000);
    return () => clearTimeout(loadMain);
  }, []);

  return (
    <div>
      {isMainLoaded ? (
        <div>
          <MainPage />
          <Outlet />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default App;
