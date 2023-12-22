import { useEffect } from "react";
import AOS from "aos";
const useAOS = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return;
};

export default useAOS;
