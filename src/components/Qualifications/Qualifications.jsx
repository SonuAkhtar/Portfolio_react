import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [showWork, setShowWork] = useState(false);

  return (
    <>
      <section className="qualification">
        <div className="qualification_container">
          <h2 className="section_title">Qualification</h2>
          <span className="section_subtitle">My achievements</span>

          <div className="qualification_main">
            <div className="qualification_tabs">
              <div
                className={`qualification_button button-flex ${
                  !showWork && "active"
                }`}
                onClick={() => setShowWork(false)}
              >
                <i className="fas fa-graduation-cap qualification_icon" />
                Education
              </div>
              <div
                className={`qualification_button button-flex ${
                  showWork && "active"
                }`}
                onClick={() => setShowWork(true)}
              >
                <i className="fas fa-suitcase qualification_icon" />
                Work
              </div>
            </div>

            <div className="qualification_sections">
              {/* Education */}
              <div
                className={`qualification_content education ${
                  !showWork && "show"
                }`}
              >
                <div className="qualification_data">
                  <div
                    className={`qualification_data_wrapper left ${
                      !showWork && "show"
                    }`}
                  >
                    <h3 className="qualification_title">
                      Graduation (B.Tech.)
                    </h3>
                    <span className="qualification_subtitle">
                      Lovely Professional University
                    </span>
                    <div className="qualification_calendar">
                      <i className="fas fa-calendar-minus" />
                      2013-2017
                    </div>
                  </div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>

                <div className="qualification_data">
                  <div></div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>

                  <div
                    className={`qualification_data_wrapper right ${
                      !showWork && "show"
                    }`}
                  >
                    <h3 className="qualification_title">Senior Secondary</h3>
                    <span className="qualification_subtitle">
                      Sai Dass Senior Secondary
                    </span>
                    <div className="qualification_calendar">
                      <i className="fas fa-calendar-minus" />
                      2012-2013
                    </div>
                  </div>
                </div>

                <div className="qualification_data">
                  <div
                    className={`qualification_data_wrapper left ${
                      !showWork && "show"
                    }`}
                  >
                    <h3 className="qualification_title">Higher Secondary</h3>
                    <span className="qualification_subtitle">
                      Bhartiya Bal Vidhya Mandir
                    </span>
                    <div className="qualification_calendar">
                      <i className="fas fa-calendar-minus" />
                      2010-2011
                    </div>
                  </div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>
              </div>

              {/* Work */}
              <div
                className={`qualification_content work ${showWork && "show"}`}
              >
                <div className="qualification_data">
                  <div
                    className={`qualification_data_wrapper left ${
                      showWork && "show"
                    }`}
                  >
                    <h3 className="qualification_title">
                      Senior Software Engineer
                    </h3>
                    <span className="qualification_subtitle">
                      Optum - (UHG)
                    </span>
                    <div className="qualification_calendar">
                      <i className="fas fa-calendar-minus" />
                      2021 - Present
                    </div>
                  </div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>

                <div className="qualification_data">
                  <div></div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>

                  <div
                    className={`qualification_data_wrapper right ${
                      showWork && "show"
                    }`}
                  >
                    <h3 className="qualification_title">
                      Senior Business Analyst
                    </h3>
                    <span className="qualification_subtitle">Evalueserve</span>
                    <div className="qualification_calendar">
                      <i className="fas fa-calendar-minus" />
                      2020 - 2021
                    </div>
                  </div>
                </div>

                <div className="qualification_data">
                  <div
                    className={`qualification_data_wrapper left ${
                      showWork && "show"
                    }`}
                  >
                    <h3 className="qualification_title">
                      Software Engineer (Frontend)
                    </h3>
                    <span className="qualification_subtitle">
                      Tech Mahindra
                    </span>
                    <div className="qualification_calendar">
                      <i className="fas fa-calendar-minus" />
                      2018 - 2020
                    </div>
                  </div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>

                <div className="qualification_data">
                  <div></div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>

                  <div
                    className={`qualification_data_wrapper right ${
                      showWork && "show"
                    }`}
                  >
                    <h3 className="qualification_title">Technical Engineer</h3>
                    <span className="qualification_subtitle">
                      Tele-Performance
                    </span>
                    <div className="qualification_calendar">
                      <i className="fas fa-calendar-minus" />
                      2017 - 2018
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualifications;
