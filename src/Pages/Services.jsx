import { Helmet } from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta from "../Components/Services/Cta";
import Services2 from "../Components/Services/Services2";

const Services = () => {
  return (
    <div className="service-area">
      <Helmet>
        <title>
          Our Services | Service First - Heating & Cooling Solutions Melbourne
        </title>
        <meta
          name="description"
          content="Explore our full range of heating and cooling services in Melbourne. Installation, repair, maintenance, and more for homes and businesses."
        />
        <meta
          name="keywords"
          content="Services, Heating, Cooling, Installation, Repair, Maintenance, Melbourne"
        />
        <meta
          property="og:title"
          content="Our Services | Service First - Heating & Cooling Solutions Melbourne"
        />
        <meta
          property="og:description"
          content="Explore our full range of heating and cooling services in Melbourne. Installation, repair, maintenance, and more for homes and businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.servicefirst.com.au/service"
        />
        <meta property="og:image" content="/assets/img/hero_img_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Services | Service First - Heating & Cooling Solutions Melbourne"
        />
        <meta
          name="twitter:description"
          content="Explore our full range of heating and cooling services in Melbourne. Installation, repair, maintenance, and more for homes and businesses."
        />
        <meta name="twitter:image" content="/assets/img/hero_img_1.png" />
        <link rel="canonical" href="https://www.servicefirst.com.au/service" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>
      <BreadCumb Title="Services"></BreadCumb>
      <Services2></Services2>
      <Cta></Cta>
      {/* <Pricing></Pricing> */}
    </div>
  );
};

export default Services;
