import React from "react"
import { FaSearch } from "react-icons/fa"
import img1 from "../src/assets/images/img_1.jpg"
import img2 from "../src/assets/images/img_2.jpg"
import img3 from "../src/assets/images/img_3.jpg"
import img4 from "../src/assets/images/img_4.jpg"
import img5 from "../src/assets/images/img_5.jpg"

const Gallery = () => {
  return (
    <section className="site-section" id="gallery-section" data-aos="fade">
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Gallery</h2>
          </div>
        </div>
        <div id="posts" className="row no-gutter">
          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img1} className="item-wrap fancybox">
              <FaSearch className="icon-search" />
              <img className="img-fluid" src={img1} alt="Gallery Image 1" />
            </a>
          </div>
          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a
              href={img2}
              className="item-wrap fancybox"
              data-fancybox="gallery2"
            >
              <FaSearch className="icon-search" />
              <img className="img-fluid" src={img2} alt="Gallery Image 2" />
            </a>
          </div>
          <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a
              href={img3}
              className="item-wrap fancybox"
              data-fancybox="gallery2"
            >
              <FaSearch className="icon-search" />
              <img className="img-fluid" src={img3} alt="Gallery Image 3" />
            </a>
          </div>
          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a
              href={img4}
              className="item-wrap fancybox"
              data-fancybox="gallery2"
            >
              <FaSearch className="icon-search" />
              <img className="img-fluid" src={img4} alt="Gallery Image 4" />
            </a>
          </div>
          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a
              href={img5}
              className="item-wrap fancybox"
              data-fancybox="gallery2"
            >
              <FaSearch className="icon-search" />
              <img className="img-fluid" src={img5} alt="Gallery Image 5" />
            </a>
          </div>
          {/* Repeat similar code with imported images for the rest of the gallery items */}
        </div>
      </div>
    </section>
  )
}

export default Gallery
