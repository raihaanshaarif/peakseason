import About2 from "../Components/About/About2";
import BreadCumb from "../Components/Common/BreadCumb";
import Faq from "../Components/Home/Faq";
import Process from "../Components/Home/Process";
import Testimonial from "../Components/Home/Testimonial";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="about-area">
      <Helmet>
        <title>
          About Us | Service First - Melbourne’s Trusted Heating & Cooling
          Specialists
        </title>
        <meta
          name="description"
          content="Learn about Service First, Melbourne’s experts in heating and cooling solutions for homes and businesses. Custom installations, repairs, and maintenance."
        />
        <meta
          name="keywords"
          content="Service First, About, Heating, Cooling, Melbourne, Installation, Repair, Maintenance, Energy Efficient"
        />
        <meta
          property="og:title"
          content="About Us | Service First - Melbourne’s Trusted Heating & Cooling Specialists"
        />
        <meta
          property="og:description"
          content="Learn about Service First, Melbourne’s experts in heating and cooling solutions for homes and businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.servicefirst.com.au/about"
        />
        <meta property="og:image" content="/assets/img/about_img_2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Service First - Melbourne’s Trusted Heating & Cooling Specialists"
        />
        <meta
          name="twitter:description"
          content="Learn about Service First, Melbourne’s experts in heating and cooling solutions for homes and businesses."
        />
        <meta name="twitter:image" content="/assets/img/about_img_2.png" />
        <link rel="canonical" href="https://www.servicefirst.com.au/about" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>
      <BreadCumb Title="About Us - Service First"></BreadCumb>
      <About2
        Img="/assets/img/about_img_2.png"
        TitleUp="About Us"
        Title="Melbourne’s Trusted Heating & Cooling Specialists - Service First"
        Content="At Service First, we deliver expert heating and cooling solutions for homes and businesses across Melbourne. Our experienced team ensures every installation, repair, and maintenance job is completed with precision, efficiency, and a commitment to your comfort. From air conditioning to hydronic heating, we tailor our services to suit your needs and budget."
        FeatureList={[
          "Custom Heating & Cooling Solutions by Service First",
          "Energy-Efficient Installations",
          "Prompt Repairs & Maintenance",
        ]}
        Experience="35K+"
        BioImg="/assets/img/avatar_1.png"
        BioName="Faisal"
        BioContent="0405 133 761"
      ></About2>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Process></Process>
    </div>
  );
};

export default About;
