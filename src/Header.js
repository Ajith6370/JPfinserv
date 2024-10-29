import React, { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa" // Importing React Icons for the mobile menu icon
import "./Header.css"

const Header = () => {
  const [isSticky, setSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // State to handle mobile menu open/close

  const handleScroll = () => {
    setSticky(window.scrollY > 0)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen) // Toggle the menu open state
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`site-navbar js-sticky-header site-navbar-target ${
        isSticky ? "is-sticky" : ""
      }`}
      role="banner"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-xl-2">
            <h1 className="mb-0 site-logo">
              <a href="index.html" className="h2 mb-0">
                JPFinserv<span className="text-primary"></span>
              </a>
            </h1>
          </div>
          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav
              className="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li>
                  <a href="#home-section" className="nav-link icon-white">
                    Home
                  </a>
                </li>
                <li className="has-children icon-white">
                  <a href="#about-section" className="nav-link icon-white">
                    About Us
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#team-section" className="nav-link icon-white">
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="#pricing-section"
                        className="nav-link icon-white"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#faq-section" className="nav-link icon-white">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#gallery-section"
                        className="nav-link icon-white"
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services-section"
                        className="nav-link icon-white"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#testimonials-section"
                        className="nav-link icon-white"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li className="has-children">
                      <a href="#" className="icon-white">
                        More Links
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="#" className="nav-link icon-white">
                            Menu One
                          </a>
                        </li>
                        <li>
                          <a href="#" className="nav-link icon-white">
                            Menu Two
                          </a>
                        </li>
                        <li>
                          <a href="#" className="nav-link icon-white">
                            Menu Three
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#blog-section" className="nav-link icon-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact-section" className="nav-link icon-white">
                    Contact
                  </a>
                </li>
                <li className="social">
                  <a href="#contact-section" className="nav-link icon-white">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="social">
                  <a href="#contact-section" className="nav-link icon-white">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="social">
                  <a href="#contact-section" className="nav-link icon-white">
                    <span className="icon-linkedin" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="col-6 d-inline-block d-xl-none ml-md-0 py-3"
            style={{ position: "relative", top: 3 }}
          >
            <a
              href="#"
              className="site-menu-toggle js-menu-toggle float-right"
              onClick={toggleMenu}
            >
              <FaBars className="h3 icon-white" />{" "}
              {/* React Icons for the menu icon */}
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      <div className={`site-mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="site-nav-wrap">
          <ul className="site-menu main-menu js-clone-nav mr-auto d-lg-block">
            <li>
              <a href="#home-section" className="nav-link icon-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about-section" className="nav-link icon-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#blog-section" className="nav-link icon-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact-section" className="nav-link icon-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
