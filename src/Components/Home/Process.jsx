import { useEffect } from "react";
import ProcessCard from "../ProcessCard/ProcessCard";
import ProcessCard2 from "../ProcessCard/ProcessCard2";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import SectionTitle from "../Common/SectionTitle";

const Process = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="cs_bg_filed"
      data-background="/assets/img/how_to_work_bg.svg"
    >
      <div className="cs_height_115 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading_1_with_sub">
          <div className="cs_section_heading cs_style_1">
            <SectionTitle Title="How We Work" SubTitle="Process"></SectionTitle>
          </div>
          <p className="mb-0">
            Our process is designed for your convenience and peace of
            mind—simple steps to fast, reliable comfort for your home or
            business.
          </p>
        </div>
        <div className="cs_height_45 cs_height_lg_45"></div>
        <div className="cs_card_1_wrap">
          <div className="cs_card_1_col">
            <ProcessCard
              Title="Call for Appointment"
              Content="Contact us by phone or online to schedule your heating or cooling service at a time that suits you."
              Img="/assets/img/icons/how_to_work_icon_1.svg"
            ></ProcessCard>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard2
              Title="Expert Assessment"
              Content="Our certified technician discuss with you about your location, assesses your needs, and provides honest, upfront advice."
              Img="/assets/img/icons/how_to_work_icon_2.svg"
            ></ProcessCard2>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard
              Title="Professional Service"
              Content="We carry out the installation, repair, or maintenance work efficiently, ensuring minimal disruption to your day."
              Img="/assets/img/icons/how_to_work_icon_3.svg"
            ></ProcessCard>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard2
              Title="Enjoy Comfort"
              Content="Relax and enjoy a perfectly climate-controlled environment, knowing our team is just a call away for any future needs."
              Img="/assets/img/icons/how_to_work_icon_4.svg"
            ></ProcessCard2>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_70"></div>
    </section>
  );
};

export default Process;
