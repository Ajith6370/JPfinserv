import React, { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import AOS from "aos"
import "aos/dist/aos.css"
import img1 from "../src/assets/images/img_1.jpg"
import img2 from "../src/assets/images/img_2.jpg"
import img3 from "../src/assets/images/img_3.jpg"

const HowItWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [img1, img2, img3]
  const texts = [
    {
      title: "01. Online Applications",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum neque voluptas?",
    },
    {
      title: "02. Get an approval",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum neque voluptas?",
    },
    {
      title: "03. Card delivery",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sapiente labore eius ullam? Iusto?",
    },
  ]

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <section className="site-section">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up">
              How It Works
            </h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              fugiat molestiae eligendi repudiandae error?
            </p>
          </div>
        </div>

        <div className="row align-items-lg-center">
          {/* Carousel Section */}
          <div className="col-lg-6 mb-5" data-aos="fade-up">
            <div className="slide-one-item-alt">
              <TransitionGroup component={null}>
                <CSSTransition
                  key={currentSlide}
                  timeout={500}
                  classNames="slide"
                >
                  <img
                    src={images[currentSlide]}
                    alt="Carousel Slide"
                    className="img-fluid"
                  />
                </CSSTransition>
              </TransitionGroup>
            </div>
            <div className="custom-direction">
              <button className="custom-prev" onClick={handlePrev}>
                <FaChevronLeft />
              </button>
              <button className="custom-next" onClick={handleNext}>
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Slide Text Section */}
          <div
            className="col-lg-5 ml-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <TransitionGroup component={null}>
              <CSSTransition key={currentSlide} timeout={500} classNames="fade">
                <div className="slide-one-item-alt-text">
                  <h2 className="section-title mb-3">
                    {texts[currentSlide].title}
                  </h2>
                  <p>{texts[currentSlide].description}</p>
                  <p>
                    <a href="#" className="btn btn-primary mr-2 mb-2">
                      Learn More
                    </a>
                  </p>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
