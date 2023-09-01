import React from "react";
import "./hobbies.css";

const Hobbies = () => {
  return (
    <>
      {" "}
      <section className="portfolio section" id="portfolio">
        <h2 className="section_title">Hobbies</h2>
        <span className="section_subtitle">My interesting side</span>

        <div className="portfolio_container container swiper-container mySwiper">
          <div className="swiper-wrapper">
            <div className="portfolio_content grid swiper-slide">
              <img
                src="/assets/image_1.jpg"
                className="portfolio_image"
                alt=""
              />

              <div className="portfolio_data">
                <h3 className="portfolio_title">Humayun's Tomb</h3>
                <p className="portfolio_description">
                  Humayun's tomb is the tomb of the Mughal Emperor Humayun in
                  Delhi, India.
                </p>
              </div>
            </div>

            <div className="portfolio_content grid swiper-slide">
              <img
                src="/assets/image_2.jpg"
                className="portfolio_image"
                alt=""
              />

              <div className="portfolio_data">
                <h3 className="portfolio_title">Palm Tree</h3>
                <p className="portfolio_description">
                  Trying to get a different perspective.
                </p>
              </div>
            </div>

            <div className="portfolio_content grid swiper-slide">
              <img
                src="/assets/image_3.jpg"
                className="portfolio_image"
                alt=""
              />

              <div className="portfolio_data">
                <h3 className="portfolio_title">Flying Birds (Jama Masjid)</h3>
                <p className="portfolio_description">
                  Always try to see something different and new.
                </p>
              </div>
            </div>

            <div className="portfolio_content grid swiper-slide">
              <img
                src="/assets/image_4.jpg"
                className="portfolio_image"
                alt=""
              />

              <div className="portfolio_data">
                <h3 className="portfolio_title">Safdarjang's Tomb</h3>
                <p className="portfolio_description">
                  It makes me wonder how beatifully this is crafted.
                </p>
              </div>
            </div>

            <div className="portfolio_content grid swiper-slide">
              <img
                src="/assets/image_5.jpg"
                className="portfolio_image"
                alt=""
              />

              <div className="portfolio_data">
                <h3 className="portfolio_title">Eyes on the book</h3>
                <p className="portfolio_description">
                  Capture those moments which are unique.
                </p>
              </div>
            </div>

            <div className="portfolio_content grid swiper-slide">
              <img
                src="/assets/image_7.jpg"
                className="portfolio_image"
                alt=""
              />

              <div className="portfolio_data">
                <h3 className="portfolio_title">Flower in the woods</h3>
                <p className="portfolio_description">
                  Standing all alone yet so calm.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <a
            href="https://www.instagram.com/just_about_clicks/"
            className="button button-flex button-small portfolio_button"
          >
            Visit Instagram <i className="fas fa-arrow-right button_icon"></i>
          </a>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default Hobbies;
