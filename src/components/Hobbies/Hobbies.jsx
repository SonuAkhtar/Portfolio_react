import React from "react";

// imported Library
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// imported Data
import { hobbiesData } from "../../../appData";

// imported CSS
import "./hobbies.css";

const Hobbies = () => {
  return (
    <>
      <section className="hobbies even" id="hobbies">
        <div className="container">
          <h2 className="section_title">Hobbies</h2>
          <span className="section_subtitle">Interesting Side</span>

          <main className="hobbies_main">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {hobbiesData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="hobbies_card grid swiper-slide">
                    <div className="hobbies_image">
                      <img src={item.image} alt={item.image} />
                    </div>

                    <div className="hobbies_data">
                      <h3 className="hobbies_title">{item.title}</h3>
                      <p className="hobbies_description">{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="hobbies_button">
                <a
                  href="https://www.instagram.com/just_about_clicks/"
                  className="button button-flex button-small"
                >
                  Visit Instagram
                  <i className="fas fa-arrow-right button_icon" />
                </a>
              </div>
            </Swiper>
          </main>
        </div>
      </section>
    </>
  );
};

export default Hobbies;
