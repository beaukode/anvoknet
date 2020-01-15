import React from "react";
import { useLocation } from "react-router-dom";

const StatsTracking: React.FC = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (typeof (window as any).gtag == "function") {
      (window as any).gtag("config", "UA-132856623-2", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);
  return null;
};

export default StatsTracking;
