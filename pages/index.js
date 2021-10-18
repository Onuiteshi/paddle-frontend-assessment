import Image from "next/image";
import Header from "../components/layout/Header";
import styles from "../styles/Home.module.css";
import WebDev from "../public/images/web-developer.png";
import Piano from "../public/images/piano.png";
import Pricing1 from "../public/images/pricing1.png";
import Pricing2 from "../public/images/pricing2.png";
import Pricing3 from "../public/images/pricing3.png";
import Netflix from "../public/images/Netflix1.png";
import Spotify from "../public/images/spotify.png";
import Amazon from "../public/images/amazon1.png";
import Discord from "../public/images/discord.png";
import Reddit from "../public/images/reddit.png";
import Man from "../public/images/polish-man.png";
import User from "../public/user.png";
import Location from "../public/location.png";
import Servers from "../public/Server.png";
import Check from "../public/vector.png";
import Footer from "../components/layout/Footer";
import Testimonial from "./api/Testimonials.json";

export default function Home() {
  const data = Testimonial;
  return (
    <div className="">
      <div className="container">
        <Header />
        {/* HOME */}
        <div className="row  mt-4 mb-4">
          <div className={`col-md-6 ${styles.leftText} `}>
            <h1>We Are Everything We Aspire To BE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              orci condimentum lectus efficitur tempor vel eu massa. Sed
              molestie turpis eget ipsum malesuada dignissim
            </p>
            <button className="btn ">Get Started</button>
          </div>
          <div className="col-md-6">
            <Image src={WebDev} alt="webdev" />
          </div>
        </div>

        <div
          style={{
            padding: "45px",
            border: "none !important",
            marginTop: "100px",
          }}
          className="card  mb-5 shadow-lg"
        >
          <div className={`card-body row text-center ${styles.cardBody}`}>
            <div className="border-end d-flex   col-md-4  justify-content-center align-content-center ps-5 pe-5 ">
              <div className="">
                <Image src={User} alt="webdev" />
              </div>

              <div className="text-start ms-4">
                <h1>90+</h1>
                <p>Users</p>
              </div>
            </div>
            <div className="border-end col-md-4 d-flex  justify-content-center align-content-center ps-5 pe-5">
              <div className="">
                <Image src={Location} alt="webdev" />
              </div>
              <div className="text-start ms-4">
                <h1>30+</h1>
                <p>Locations</p>
              </div>
            </div>
            <div className="col-md-4 d-flex  justify-content-center align-content-center ps-5 pe-5">
              <div className="">
                <Image src={Servers} alt="webdev" />
              </div>
              <div className="text-start ms-4">
                <h1>50+</h1>
                <p>Servers</p>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div
          style={{ marginTop: "150px", marginBottom: "150px" }}
          className="row  mb-5"
        >
          <div className="col-md-6 mt-4">
            <Image src={Piano} alt="piano" />
          </div>
          <div className={`col-md-6 ${styles.features}`}>
            <h1>Features We Provide For You </h1>
            <p>
              Curabitur tempor justo non turpis malesuada cursus. Mauris ac
              libero eu sem finibus lacinia nec pulvinar.
            </p>
            <ul>
              <li>Curabitur tempor justo</li>
              <li>Curabitur tempor justo</li>
              <li>Curabitur tempor justo</li>
              <li>Curabitur tempor justo</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PLANS */}
      <div className={`${styles.choosePlan}  text-center`}>
        <div className="container">
          <h1>Choose Your Plan</h1>
          <p>
            Let's choose the package that is best for you and explore it happily
            and <br /> cheerfully.
          </p>
          <div
            style={{ marginTop: "50px", marginBottom: "150px" }}
            className="row"
          >
            <div className="col-md-4">
              <div className={`card mt-3 ${styles.cards}`}>
                <div className="card-body pt-3">
                  <div>
                    <Image src={Pricing3} alt="webdev" />
                  </div>
                  <h3>Free Plan</h3>
                  <div className="text-center">
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "60%",
                    }}
                    className={`text-center ${styles.buttonDiv}  `}
                  >
                    <h2>Free</h2>
                    <button className={`btn  `}>Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`card mt-3 ${styles.cards}`}>
                <div className="card-body pt-5">
                  <div>
                    <Image src={Pricing2} alt="webdev" />
                  </div>
                  <h3
                    style={{
                      marginTop: "6px !important",
                    }}
                  >
                    Standard Plan
                  </h3>
                  <div className="text-center">
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "51%",
                    }}
                    className={`text-center ${styles.buttonDiv}  `}
                  >
                    <h2>$9 / mo</h2>
                    <button className={`btn  `}>Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`card mt-3 ${styles.cards}`}>
                <div className="card-body pt-3">
                  <div>
                    <Image src={Pricing1} alt="webdev" />
                  </div>
                  <h3>Premium Plan</h3>
                  <div className="text-center">
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                    <div className="mb-2">
                      <Image src={Check} alt="webdev" />
                      <span className="ms-3">Mauris sem neque</span>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "34%",
                    }}
                    className={`text-center ${styles.buttonDiv}  `}
                  >
                    <h2>$12 / mo</h2>
                    <button className={`btn  `}>Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1>
              Get Started With <br /> Paddle Today
            </h1>
            <p>
              Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
              ante <br /> egestas ullamcorper
            </p>
            <button
              style={{ color: "#fff", backgroundColor: "#ba55d3" }}
              className="btn"
            >
              Start Today
            </button>
          </div>

          <div
            style={{ margin: "100px 0px" }}
            className="d-flex justify-content-between"
          >
            <div style={{ height: "100px" }} className="">
              <Image height="100%" src={Netflix} alt="webdev" />
            </div>
            <div style={{ height: "100px" }} className="">
              <Image height="100%" src={Reddit} alt="webdev" />
            </div>
            <div style={{ height: "100px" }} className="">
              <Image height="100%" src={Amazon} alt="webdev" />
            </div>
            <div className="">
              <Image height="100%" src={Discord} alt="webdev" />
            </div>
            <div className="">
              <Image height="100%" src={Spotify} alt="webdev" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        {/* TESTIMONIALS */}
        <div className={`${styles.testimonials} container text-center`}>
          <h1>
            Trusted by Thousands of <br /> Happy Customer
          </h1>
          <p>
            Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse
            et <br />
            suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies.{" "}
          </p>

          <div className="row mt-4 ">
            {data.map((item) => {
              return (
                <div key={item.id} className="col-md-4 mt-3">
                  <div className={`${styles.card2}  card`}>
                    <div className="card-body text-start">
                      <div>
                        <Image src={Man} alt="man" />
                        <div className="d-inline-block ms-2">
                          <h4>{item.name}</h4>
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <div>
                        <p style={{ color: "#0b132a !important" }}>
                          “Mauris sem neque, ultrices nec sapien id, consequat
                          laoreet dolor. Ut rhoncus sollicitudin metus, ac
                          lobortis felis dignissim et. Fusce arcu ex”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`${styles.subscription} container text-center`}>
          <div className="card">
            <div className="card-body d-flex justify-content-between">
              <div>
                <h1>
                  Subscribe Now for <br /> Get Special Features!
                </h1>
                <p>Praesent mollis lobortis nisl nec laoreet.</p>
              </div>
              <div>
                <button className="btn">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
