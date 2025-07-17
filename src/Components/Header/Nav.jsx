import DropDown from "./DropDown";
import { Link } from "react-router-dom";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            {/* <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/service/service-details"
                onClick={() => setMobileToggle(false)}
              >
                Service Details
              </Link>
            </li> */}
            <li>
              <Link
                to="/service/air-conditioning"
                onClick={() => setMobileToggle(false)}
              >
                Air Conditioning
              </Link>
            </li>
            <li>
              <Link
                to="/service/split-system"
                onClick={() => setMobileToggle(false)}
              >
                Split System
              </Link>
            </li>
            <li>
              <Link
                to="/service/hydronic-heating"
                onClick={() => setMobileToggle(false)}
              >
                Hydronic Heating
              </Link>
            </li>

            <li>
              <Link
                to="/service/ducted-air-conditioning"
                onClick={() => setMobileToggle(false)}
              >
                Ducted Air Conditioning
              </Link>
            </li>
            <li>
              <Link
                to="/service/evaporative-coolers"
                onClick={() => setMobileToggle(false)}
              >
                Evaporative Coolers
              </Link>
            </li>
            <li>
              <Link
                to="/service/wall-furnace-space-heater"
                onClick={() => setMobileToggle(false)}
              >
                Wall Furnase / Space Heater
              </Link>
            </li>
            <li>
              <Link
                to="/service/cleaning"
                onClick={() => setMobileToggle(false)}
              >
                Cleaning
              </Link>
            </li>
            <li>
              <Link
                to="/service/repairs"
                onClick={() => setMobileToggle(false)}
              >
                Repairs
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      {/* <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/brands" onClick={() => setMobileToggle(false)}>
                Brands
              </Link>
            </li>
            <li>
              <Link
                to="/team/team-details"
                onClick={() => setMobileToggle(false)}
              >
                Team Details
              </Link>
            </li>
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/project/project-details"
                onClick={() => setMobileToggle(false)}
              >
                Project Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      {/* <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
