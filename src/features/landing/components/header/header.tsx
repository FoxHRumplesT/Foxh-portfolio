import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./header.sass";
import { langs } from "../../../../translations/i18n";
import burgerIcon from "../../../../assets/img/burger.svg";
import flagCo from "../../../../assets/img/flag-co.svg";
import flagUk from "../../../../assets/img/flag-uk.svg";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const { t, i18n } = useTranslation();

  const [activeTab, setActiveTab] = useState(1);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = (): void => setShowMobileMenu(!showMobileMenu);

  const toggleActive = (i: number): void => {
    setActiveTab(i);
    setTimeout(() => setShowMobileMenu(false), 230);
  };

  const isActive = (i: number): boolean => activeTab === i;

  const currentFlag = () => {
    let currentFlag: string;
    switch (i18n.language) {
      case langs.en.code:
        currentFlag = flagUk;
        break;
      case langs.es.code:
        currentFlag = flagCo;
        break;
      default:
        currentFlag = flagUk;
        break;
    }
    return (
      <figure onClick={() => {
        console.log(i18n.language);
        
        if (i18n.language.includes(langs.en.code)) return i18n.changeLanguage(langs.es.code);
        if (i18n.language.includes(langs.es.code)) return i18n.changeLanguage(langs.en.code);
      }}>
        <img src={currentFlag} alt="Flag" />
      </figure>
    );
  };

  return (
    <header className="header">
      <section className="wrapper-nav-bar">
        <div className="logo-container">
          <div className="logo">Logo</div>
        </div>
        <div className="mobile-burger-icon" onClick={() => toggleMobileMenu()}>
          <img src={burgerIcon} alt="Burger menu" />
        </div>
        <div className="mobile-language language">{currentFlag()}</div>
        <nav className={`nav ${showMobileMenu ? "show" : ""}`}>
          <span
            onClick={() => toggleActive(2)}
            className={`link ${isActive(1) ? "active" : ""}`}
          >
            {t("landing.header.menu.services")}
          </span>
          <span
            onClick={() => toggleActive(1)}
            className={`link ${isActive(2) ? "active" : ""}`}
          >
            {t("landing.header.menu.about")}
          </span>
          <span
            onClick={() => toggleActive(3)}
            className={`link ${isActive(3) ? "active" : ""}`}
          >
            {t("landing.header.menu.portfolio")}
          </span>
          <span
            onClick={() => toggleActive(4)}
            className={`link ${isActive(4) ? "active" : ""}`}
          >
            {t("landing.header.menu.workflow")}
          </span>
          <div className="language">{currentFlag()}</div>
          <span className={`link main-button`}>
            {t("landing.header.menu.contact")}
          </span>
        </nav>
      </section>
    </header>
  );
};

export default React.memo(Header);
