import React from "react"

const ContactUs = () => {
  return (
    <section
      className="site-section bg-light"
      id="contact-section"
      data-aos="fade"
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Contact Us</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4 text-center">
            <p className="mb-4">
              <span className="icon-room d-block h2 text-primary" />
              <span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p className="mb-4">
              <span className="icon-phone d-block h2 text-primary" />
              <a href="#">+1 232 3235 324</a>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p className="mb-0">
              <span className="icon-mail_outline d-block h2 text-primary" />
              <a href="#">youremail@domain.com</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <form action="#" className="p-5 bg-white">
              <h2 className="h4 text-black mb-5">Contact Form</h2>
              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" htmlFor="fname">
                    First Name
                  </label>
                  <input type="text" id="fname" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="text-black" htmlFor="lname">
                    Last Name
                  </label>
                  <input type="text" id="lname" className="form-control" />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="email">
                    Email
                  </label>
                  <input type="email" id="email" className="form-control" />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="subject">
                    Subject
                  </label>
                  <input type="subject" id="subject" className="form-control" />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Write your notes or questions here..."
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="btn btn-primary btn-md text-white"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
