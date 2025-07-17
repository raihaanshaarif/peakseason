import { Link } from "react-router-dom";
import BreadCumb from "../Common/BreadCumb";
import Form2 from "../Form/Form2";
import { useEffect, useRef, useState } from "react";
import data from "../../Data/accordion.json";

const DuctedGasHeating = () => {
  const ServiceCategory = [
    { title: "Air Conditioning", link: "/service/air-conditioning" },
    { title: "Split System", link: "/service/split-system" },
    { title: "Hydronic Heating", link: "/service/hydronic-heating" },
    {
      title: "Ducted Air Conditioning",
      link: "/service/ducted-air-conditioning",
    },
    { title: "Evaporative Coolers", link: "/service/evaporative-coolers" },
    { title: "Space Heater", link: "/service/wall-furnace-space-heater" },
  ];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <div className="service-details">
      <BreadCumb Title="Ducted Air Conditioning" />
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_60">
            <div className="col-lg-8">
              <div className="cs_pr_30">
                <div className="cs_service_details">
                  <img
                    src="/assets/img/service-ducted-air-con-img.jpg"
                    alt="Ducted Air Conditioning Service"
                  />
                  <h2 className="cs_fs_48 cs_mb_20">
                    Ducted Air Conditioning Experts
                  </h2>
                  <p className="cs_mb_25">
                    Enjoy whole-home comfort with our professional ducted air
                    conditioning services. We specialise in the installation,
                    maintenance, repair, and servicing of ducted systems for
                    homes and businesses across Melbourne. Our experienced team
                    ensures your system is designed for maximum efficiency,
                    quiet operation, and reliable performance all year round.
                  </p>
                  <h3 className="cs_fs_30 cs_mb_15">
                    Why Choose Ducted Air Conditioning?
                  </h3>
                  <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Efficiently cools or heats your entire property with one
                      system
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Discreet vents and minimal visual impact for a seamless
                      look
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Zoned temperature control for personalised comfort and
                      energy savings
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Quiet, reliable operation for year-round comfort
                    </li>
                  </ul>
                  <h3 className="cs_fs_30 cs_mb_15">
                    Our Ducted Air Conditioning Services
                  </h3>
                  <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Custom system design and professional installation
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Preventative maintenance for efficiency and longevity
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Fast, reliable repairs for all ducted systems
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Friendly, local service and honest advice
                    </li>
                  </ul>
                  <h3 className="cs_fs_30 cs_mb_15">Our Service Standards</h3>
                  <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Transparent pricing and honest advice
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      On-time arrivals and respect for your property
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Fully licensed, insured, and background-checked
                      technicians
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      100% satisfaction guarantee on all work
                    </li>
                  </ul>
                  <h3 className="cs_fs_30 cs_mb_15">
                    What Are the Benefits of Ducted Air Conditioning?
                  </h3>
                  <div className="cs_accordians cs_style_1">
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className={`cs_accordian ${
                          index === openItemIndex ? "active" : ""
                        }`}
                      >
                        <div
                          className="cs_accordian_head"
                          onClick={() => handleItemClick(index)}
                        >
                          <h2 className="cs_accordian_title cs_fs_18 cs_medium mb-0">
                            {item.title}
                          </h2>
                          <span className="cs_accordian_toggle"></span>
                        </div>
                        <div
                          className="cs_accordian_body"
                          ref={accordionContentRef}
                        >
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_right_sidebar">
                <div className="cs_sidebar_widget cs_color_1"></div>
                <div className="cs_sidebar_widget">
                  <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">
                    Categories
                  </h2>
                  <ul className="cs_category_widget">
                    {ServiceCategory.map((item, i) => (
                      <li key={i}>
                        <Link to={item.link}>
                          <svg
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.9062 7.4375L14.9062 13.4375C14.7188 13.7917 14.4062 13.9792 13.9688 14H2C1.4375 13.9792 0.96875 13.7812 0.59375 13.4062C0.21875 13.0312 0.0208333 12.5625 0 12V2C0.0208333 1.4375 0.21875 0.96875 0.59375 0.59375C0.96875 0.21875 1.4375 0.0416667 2 0H5.6875C6.22917 0 6.69792 0.197917 7.09375 0.59375L8.625 2H13C13.5625 2.02083 14.0312 2.21875 14.4062 2.59375C14.7812 2.96875 14.9792 3.4375 15 4V5H13.5V4C13.4792 3.6875 13.3125 3.52083 13 3.5H8L6.03125 1.65625C5.92708 1.55208 5.8125 1.5 5.6875 1.5H2C1.6875 1.52083 1.52083 1.6875 1.5 2V11L3.71875 6.5625C3.90625 6.20833 4.20833 6.02083 4.625 6H17C17.375 6.02083 17.6562 6.17708 17.8438 6.46875C18.0312 6.76042 18.0521 7.08333 17.9062 7.4375Z"
                              fill="#696969"
                            />
                          </svg>
                          <span>{item.title}</span>
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.7188 6.71875L8.71875 11.7188C8.51042 11.9062 8.27083 12 8 12C7.72917 12 7.48958 11.9062 7.28125 11.7188C7.09375 11.5104 7 11.2708 7 11C7 10.7292 7.09375 10.4896 7.28125 10.2812L10.5938 7H1C0.708333 7 0.46875 6.90625 0.28125 6.71875C0.09375 6.53125 0 6.29167 0 6C0 5.70833 0.09375 5.46875 0.28125 5.28125C0.46875 5.09375 0.708333 5 1 5H10.5938L7.28125 1.71875C7.09375 1.51042 7 1.27083 7 1C7 0.729167 7.09375 0.489583 7.28125 0.28125C7.48958 0.09375 7.72917 0 8 0C8.27083 0 8.51042 0.09375 8.71875 0.28125L13.7188 5.28125C13.9062 5.48958 14 5.72917 14 6C14 6.27083 13.9062 6.51042 13.7188 6.71875Z"
                              fill="#696969"
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cs_sidebar_widget">
                  <Form2 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default DuctedGasHeating;
