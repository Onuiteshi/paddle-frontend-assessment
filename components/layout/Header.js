import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Header.module.css";

const Header = () => {
  const router = useRouter();
  let pageName = "";

  switch (router.pathname) {
    case "/":
      pageName = "Landing Page";
      break;
    case "/github":
      pageName = "GitHub";
      break;
    default:
      pageName = "Default Page";
      break;
  }

  return (
    <header className="header  w-100">
      <Head>
        <title>Peddle | {pageName}</title>
        <meta name="description" content="Insert Description Here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className={styles.navbarBrand} name="navbar-brand" href="#">
            PEDDLE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.navLink} active`}
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navLink} `} href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navLink} `} href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navLink} `} href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navLink} `} href="/github">
                  Github
                </a>
              </li>
            </ul>
            <button style={{ color: "#0b132a" }} className="btn fw-bold ">
              Sign In
            </button>
            <button className={`btn ${styles.btnOutlinePurple} `}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
