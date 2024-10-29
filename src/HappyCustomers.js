import React from "react"

const HappyCustomers = () => {
  return (
    <section
      className="site-section testimonial-wrap"
      id="testimonials-section"
      data-aos="fade"
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Happy Customers</h2>
          </div>
        </div>
      </div>
      <div className="slide-one-item home-slider owl-carousel">
        <div>
          <div className="testimonial">
            <blockquote className="mb-5">
              <p>
                “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti tenetur ad perspiciatis quam atque eius quia suscipit
                repudiandae animi voluptatem.”
              </p>
            </blockquote>
            <figure className="mb-4 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="images/person_1.jpg"
                  alt="Image"
                  className="w-50 img-fluid mb-3"
                />
              </div>
              <p>John Smith</p>
            </figure>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <blockquote className="mb-5">
              <p>
                “Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates exercitationem ut totam distinctio magnam quisquam,
                unde iure. Labore!.”
              </p>
            </blockquote>
            <figure className="mb-4 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="images/person_2.jpg"
                  alt="Image"
                  className="w-50 img-fluid mb-3"
                />
              </div>
              <p>Christine Aguilar</p>
            </figure>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <blockquote className="mb-5">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                eligendi odio nihil officia quasi nostrum, ipsa est? Culpa,
                ullam dolorem!”
              </p>
            </blockquote>
            <figure className="mb-4 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="images/person_3.jpg"
                  alt="Image"
                  className="w-50 img-fluid mb-3"
                />
              </div>
              <p>Robert Spears</p>
            </figure>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <blockquote className="mb-5">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                veniam tempora beatae animi in sapiente quos maiores ex aut.”
              </p>
            </blockquote>
            <figure className="mb-4 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="images/person_1.jpg"
                  alt="Image"
                  className="w-50 img-fluid mb-3"
                />
              </div>
              <p>Bruce Rogers</p>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HappyCustomers
