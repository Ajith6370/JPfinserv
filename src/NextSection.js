import React from "react"
import walletIcon from "../src/assets/images/flaticon-svg/svg/001-wallet.svg"
import cartIcon from "../src/assets/images/flaticon-svg/svg/004-cart.svg"
import creditCardIcon from "../src/assets/images/flaticon-svg/svg/006-credit-card.svg"
import aboutImage from "../src/assets/images/about_2.jpg" // Adjust path as necessary

const NextSection = () => {
  return (
    <div className="site-section" id="next">
      <div className="container">
        <div className="row mb-5">
          <div
            className="col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay
          >
            <img
              src={walletIcon}
              alt="Money Savings"
              className="img-fluid w-25 mb-4"
            />
            <h3 className="card-title">Money Savings</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div
            className="col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <img
              src={cartIcon}
              alt="Online Shoppings"
              className="img-fluid w-25 mb-4"
            />
            <h3 className="card-title">Online Shoppings</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div
            className="col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <img
              src={creditCardIcon}
              alt="Credit / Debit Cards"
              className="img-fluid w-25 mb-4"
            />
            <h3 className="card-title">Credit / Debit Cards</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay>
            <figure className="circle-bg">
              <img src={aboutImage} alt="About Us" className="img-fluid" />
            </figure>
          </div>
          <div
            className="col-lg-5 ml-auto"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="mb-4">
              <h3 className="h3 mb-4 text-black">
                Banking Solutions Is Our Priority
              </h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="mb-4">
              <ul className="list-unstyled ul-check success">
                <li>Officia quaerat eaque neque</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NextSection
