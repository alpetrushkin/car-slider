import React from 'react';
import './app.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./assets/images/logo.svg";
import appstore from "./assets/images/appstore.svg";
import googlePlay from "./assets/images/googleplay.svg";
import slide1 from './assets/images/slide-1.jpg';
import slide2 from './assets/images/slide-2.jpg';
import slide3 from './assets/images/slide-3.jpg';
import slide4 from './assets/images/slide-4.jpg';
import slide5 from './assets/images/slide-5.jpg';
import slide6 from './assets/images/slide-6.jpg';

function App() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  return (
    <div className="wrapper">
      <header className="header-main">
        <div className="container">
          <div className="header__inner">
            <a href="#" className="logo">
              <img src={logo} alt="logo" className="logo__img"/>
            </a>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__list-item">
                  <a href="#" className="menu__list-link">NEW CARS</a>
                </li>
                <li className="menu__list-item">
                  <a href="#" className="menu__list-link">PRE-OWNED CARS</a>
                </li>
                <li className="menu__list-item">
                  <a href="#" className="menu__list-link">FINANCE</a>
                </li>
                <li className="menu__list-item">
                  <a href="#" className="menu__list-link">LEASE VS BUY</a>
                </li>
                <li className="menu__list-item">
                  <a href="#" className="menu__list-link">CONTACT US</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="top">
          <div className="container">
            <h1 className="title">
              Leasing From D&M
            </h1>
            <a href="#" className="top__link">FIND A CAR</a>
          </div>
        </section>
        <section className="fullscreen">
          <Slider {...settings}>
            <div className="fullscreen__body">
              <img src={slide1} alt="slide 1"/>
            </div>
            <div className="fullscreen__body">
              <img src={slide2} alt="slide 2"/>
            </div>
            <div className="fullscreen__body">
              <img src={slide3} alt="slide 3"/>
            </div>
            <div className="fullscreen__body">
              <img src={slide4} alt="slide 4"/>
            </div>
            <div className="fullscreen__body">
              <img src={slide5} alt="slide 5"/>
            </div>
            <div className="fullscreen__body">
              <img src={slide6} alt="slide 6"/>
            </div>
          </Slider>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <p className="footer__menu-title">Products</p>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">Used</a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">New</a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">Sell your car</a>
              </li>
            </ul>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <p className="footer__menu-title">Resources</p>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">Blog</a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">FAQ</a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">Contact us</a>
              </li>
            </ul>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <p className="footer__menu-title">Work With TrueCar</p>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">Dealers</a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">Partners</a>
              </li>
            </ul>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <p className="footer__menu-title">About</p>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">About us</a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">Team</a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">Careers</a>
              </li>
            </ul>
          </nav>
          <ul className="app">
            <li className="app__item">
              <a className="app__item-link" target="_blank" href="https://www.apple.com/ru/app-store/">
                <img className="app__item-img" src={appstore} alt="appstore"/>
              </a>
            </li>
            <li className="app__item">
              <a className="app__item-link" target="_blank" href="https://store.google.com/account?pli=1">
                <img className="app__item-img" src={googlePlay} alt="googlePlay"/>
              </a>
            </li>
          </ul>
          <div className="footer__copy">
            <p className="footer__copy-text">
              For questions about the TrueCar Auto Buying Service please call 1-888-878-3227.
              Certified Dealers are contractually obligated by TrueCar to meet certain customer service requirements and
              complete the TrueCar Dealer Certification Program.
            </p>
            <p className="footer__copy-text">
              TrueCar does not broker, sell, or lease motor vehicles. Unless otherwise noted, all vehicles shown on this
              website are offered for sale by licensed motor vehicle dealers. All vehicles are subject to prior sale. By
              accessing this website, you agree to the TrueCar Terms of Service and Privacy Policy.
            </p>
          </div>
          <nav className="copy__nav">
            <ul className="copy__nav-list">
              <li className="copy__nav-item">
                <a href="#" className="copy__nav-link">Terms of Service
                </a>
              </li>
              <li className="copy__nav-item">
                <a href="#" className="copy__nav-link">Privacy Policy</a>
              </li>
              <li className="copy__nav-item">
                <a href="#" className="copy__nav-link">Do Not Sell My Personal Information</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
