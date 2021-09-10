import React from "react";
import { useTranslation } from "react-i18next";
import { Scrollchor } from "react-scrollchor";
import "./footer.sass";
import { logo } from "../../../../assets/img";
import { defaultAnimate } from "../header/header";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="content">
        <div className="page-description">
          <figure className="figure">
            <img src={logo} alt="Footer Logo" className="logo" />
          </figure>
          <div className="text">
            Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at
            placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies
            fringilla massa.
          </div>
        </div>
        <div className="links-section">
          <div className="links">
            <h6 className="title">Services</h6>
            <Scrollchor
              to={"services"}
              animate={defaultAnimate}
              className={`link`}
            >
              {t("landing.header.menu.services")}
            </Scrollchor>
            <Scrollchor
              to={"about"}
              animate={defaultAnimate}
              className={`link`}
            >
              {t("landing.header.menu.about")}
            </Scrollchor>
            <Scrollchor
              to={"portfolio"}
              animate={defaultAnimate}
              className={`link`}
            >
              {t("landing.header.menu.portfolio")}
            </Scrollchor>
            <Scrollchor
              to={"workflow"}
              animate={defaultAnimate}
              className={`link`}
            >
              {t("landing.header.menu.workflow")}
            </Scrollchor>
          </div>
          <div className="links">
            <h6 className="title">Contact</h6>
            <span className="link">
              <strong className="bold">Phone: </strong> 321 281 3458
            </span>
            <span className="link">
              <strong className="bold">Email: </strong> jfrojas251@gmail.com
            </span>
            <span className="link">
              <strong className="bold">Location: </strong> Bogotá, Colombia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
