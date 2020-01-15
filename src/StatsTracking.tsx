import React from "react";
import { useLocation } from "react-router-dom";

const StatsTracking: React.FC = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (window && (window as any).ga) {
      (window as any).ga("set", "page", location.pathname);
      (window as any).ga("send", "pageview");
    }
  }, [location]);
  return null;
};

export default StatsTracking;
