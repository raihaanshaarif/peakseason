import { Helmet } from "react-helmet-async";
import About from "../Components/Home/About";
import Choose from "../Components/Home/Choose";
import Faq from "../Components/Home/Faq";
import HomeSlider from "../Components/Home/HomeSlider";
// import Pricing from "../Components/Home/Pricing";
import Process from "../Components/Home/Process";
import Services from "../Components/Home/Services";
// import Team from "../Components/Home/Team";
import Testimonial from "../Components/Home/Testimonial";
import Cta from "../Components/Services/Cta";

const Home = () => {
  return (
    <div className="home-area">
      <Helmet>
        <title>
          Service First | Best Heating & Cooling Service in Melbourne
        </title>
        <meta
          name="description"
          content="Expert heating and cooling installation, maintenance, and repair in Melbourne. Reliable, energy-efficient solutions for homes and businesses. 24/7 support."
        />
        <meta
          name="keywords"
          content="Heating, Cooling, Air Conditioning, Melbourne, Installation, Repair, Maintenance, Energy Efficient"
        />
        <meta
          property="og:title"
          content="Service First | Best Heating & Cooling Service in Melbourne"
        />
        <meta
          property="og:description"
          content="Expert heating and cooling installation, maintenance, and repair in Melbourne. Reliable, energy-efficient solutions for homes and businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.servicefirst.com.au/" />
        <meta property="og:image" content="/assets/img/hero_img_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Service First | Best Heating & Cooling Service in Melbourne"
        />
        <meta
          name="twitter:description"
          content="Expert heating and cooling installation, maintenance, and repair in Melbourne. Reliable, energy-efficient solutions for homes and businesses."
        />
        <meta name="twitter:image" content="/assets/img/hero_img_1.png" />
        <link rel="canonical" href="https://www.servicefirst.com.au/" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Service First",
            "image": "/assets/img/hero_img_1.png",
            "@id": "",
            "url": "https://www.servicefirst.com.au/",
            "telephone": "0405 133 761",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "12 The Fairway Hampton Park VIC 3976",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "postalCode": "3976",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -38.033,
              "longitude": 145.270
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "08:00",
              "closes": "20:00"
            }]
          }
        `}</script>
      </Helmet>
      <HomeSlider></HomeSlider>
      <About
        Img="/assets/img/about_img_1.png"
        TitleUp="About Us"
        Title="Melbourne’s Trusted Heating & Cooling Professionals"
        Content="With years of experience, we provide expert installation, maintenance, and repair for all heating and cooling systems. Our team is dedicated to delivering reliable, energy-efficient solutions tailored to your home or business. Breathe easy with our prompt, friendly, and professional service."
        FeatureList={[
          "Expert System Installation",
          "Comprehensive Maintenance",
          "Fast & Reliable Repairs",
          "Energy Efficiency Solutions",
          "Residential & Commercial Services",
          "24/7 Emergency Support",
        ]}
        NumberContent="Call now to book a service"
        Number="0405 133 761"
      ></About>
      <Services></Services>
      <Cta></Cta>
      {/* <Team></Team> */}
      <Choose></Choose>
      <Process></Process>

      {/* <Pricing></Pricing> */}
      <Testimonial></Testimonial>
      <Faq></Faq>
    </div>
  );
};

export default Home;
