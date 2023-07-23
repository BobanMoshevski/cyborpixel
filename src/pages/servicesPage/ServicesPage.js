import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import OurServices from "../../components/pagesContent/ourServicesComponent/ourServices/OurServices";

const ServicesPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });

    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <OurServices />
    </>
  );
};

export default ServicesPage;
