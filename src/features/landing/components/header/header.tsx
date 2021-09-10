import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimateConfig, easeOutQuad, Scrollchor } from "react-scrollchor";
import "./header.sass";
import { langs } from "../../../../translations/i18n";
import { logo, burgerIcon, flagCo, flagUk } from "../../../../assets/img";

export const defaultAnimate: AnimateConfig = {
  offset: -50,
  duration: 400,
  easing: easeOutQuad,
};

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const { t, i18n } = useTranslation();

  const [activeTab, setActiveTab] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = (): void => setShowMobileMenu(!showMobileMenu);

  const toggleActive = (i: number): void => {
    setActiveTab(i);
    setTimeout(() => setShowMobileMenu(false), 230);
  };

  const isActive = (i: number): boolean => activeTab === i;

  const currentFlag = () => {
    let currentFlag: string;
    const lang = i18n.language.substr(0, 2)
    switch (lang) {
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
        if (i18n.language.includes(langs.en.code)) return i18n.changeLanguage(langs.es.code);
        if (i18n.language.includes(langs.es.code)) return i18n.changeLanguage(langs.en.code);
      }}>
        <img src={currentFlag} alt="Flag" /> <span className="code">{lang}</span>
      </figure>
    );
  };

  return (
    <header className="header">
      <section className="wrapper-nav-bar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="mobile-burger-icon" onClick={() => toggleMobileMenu()}>
          <img src={burgerIcon} alt="Burger menu" />
        </div>
        <div className="mobile-language language">{currentFlag()}</div>
        <nav className={`nav ${showMobileMenu ? "show" : ""}`}>
          <Scrollchor
            animate={defaultAnimate}
            beforeAnimate={() => toggleActive(1)}
            to={'services'}
            className={`link ${isActive(1) ? "active" : ""}`}
          >
            {t("landing.header.menu.services")}
          </Scrollchor>
          <Scrollchor
            animate={defaultAnimate}
            beforeAnimate={() => toggleActive(2)}
            to={'about'}
            className={`link ${isActive(2) ? "active" : ""}`}
          >
            {t("landing.header.menu.about")}
          </Scrollchor>
          <Scrollchor
            animate={defaultAnimate}
            beforeAnimate={() => toggleActive(3)}
            to={'portfolio'}
            className={`link ${isActive(3) ? "active" : ""}`}
          >
            {t("landing.header.menu.portfolio")}
          </Scrollchor>
          <Scrollchor
            animate={defaultAnimate}
            beforeAnimate={() => toggleActive(4)}
            to={'workflow'}
            className={`link ${isActive(4) ? "active" : ""}`}
          >
            {t("landing.header.menu.workflow")}
          </Scrollchor>
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
