import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={` ${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-5 ">
            <h1>PEDDLE</h1>
            <p>
              Praesent mollis lobortis nisl nec laoreet. Duis <br /> euismod
              nisl nec ante egestas ullamcorper. <br /> Duis id mauris
              consequat, ultrices ligula at, <br /> laoreet mag.
            </p>
          </div>
          <div className="col-md-7 row">
            <div className="col-md-4 col-4">
              <h4>Product</h4>
              <ul>
                <li>Praesent </li>
                <li> Laoreet </li>
                <li>Server </li>
                <li>Praesent </li>
              </ul>
            </div>
            <div className="col-md-4 col-4">
              <h4>Engage</h4>
              <ul>
                <li>Mauris </li>
                <li> Aenean </li>
                <li>Linsean </li>
                <li>Lingula </li>
              </ul>
            </div>
            <div className="col-md-4 col-4">
              <h4>Earn Money</h4>
              <ul>
                <li>Ultrices</li>
                <li> Fusce </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-1">
          <span>©2020PADDLE</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
