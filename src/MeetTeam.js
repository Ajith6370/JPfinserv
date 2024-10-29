import React from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa" // Importing icons
import person1 from "../src/assets/images/person_1.jpg"
import person2 from "../src/assets/images/person_2.jpg"
import person3 from "../src/assets/images/person_3.jpg"

const MeetTeam = () => {
  return (
    <section className="site-section border-bottom" id="team-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2
              className="section-title mb-3"
              data-aos="fade-up"
              data-aos-delay
            >
              Meet Team
            </h2>
            <p className="lead" data-aos="fade-up" data-aos-delay={100}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-delay
          >
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
                <img src={person1} alt="Kaiara Spencer" className="img-fluid" />
              </figure>
              <div className="p-3">
                <h3>Kaiara Spencer</h3>
                <span className="position">Accountant</span>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
                <img src={person2} alt="Dave Simpson" className="img-fluid" />
              </figure>
              <div className="p-3">
                <h3>Dave Simpson</h3>
                <span className="position">Bank Teller</span>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
                <img src={person3} alt="Ben Thompson" className="img-fluid" />
              </figure>
              <div className="p-3">
                <h3>Ben Thompson</h3>
                <span className="position">Bank Teller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTeam
