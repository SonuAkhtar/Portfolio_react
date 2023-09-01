import React from "react";
import "./qualifications.css";

const Qualifications = () => {
  return (
    <>
      <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My achievements</span>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div
              className="qualification_button button-flex qualification_active"
              data-target="#education"
            >
              <i className="fas fa-graduation-cap qualification_icon"></i>
              Education
            </div>
            <div
              className="qualification_button button-flex"
              data-target="#work"
            >
              <i className="fas fa-suitcase qualification_icon"></i>
              Work
            </div>
          </div>

          <div className="qualification_sections">
            <div
              className="qualification_content qualification_active"
              data-content
              id="education"
            >
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Graduation (B.Tech.)</h3>
                  <span className="qualification_subtitle">
                    Lovely Professional University
                  </span>
                  <div className="qualification_calendar">
                    <i className="fas fa-calendar-minus"></i>
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

                <div>
                  <h3 className="qualification_title">Senior Secondary</h3>
                  <span className="qualification_subtitle">
                    Sai Dass Senior Secondary
                  </span>
                  <div className="qualification_calendar">
                    <i className="fas fa-calendar-minus"></i>
                    2012-2013
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Higher Secondary</h3>
                  <span className="qualification_subtitle">
                    Bhartiya Bal Vidhya Mandir
                  </span>
                  <div className="qualification_calendar">
                    <i className="fas fa-calendar-minus"></i>
                    2010-2011
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
            </div>

            <div className="qualification_content" data-content id="work">
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Technical Engineer</h3>
                  <span className="qualification_subtitle">
                    Teleperformance
                  </span>
                  <div className="qualification_calendar">
                    <i className="fas fa-calendar-minus"></i>
                    2017-2018
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

                <div>
                  <h3 className="qualification_title">
                    Software Engineer (Frontend)
                  </h3>
                  <span className="qualification_subtitle">Tech Mahindra</span>
                  <div className="qualification_calendar">
                    <i className="fas fa-calendar-minus"></i>
                    2018-2020
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    Senior Business Analyst
                  </h3>
                  <span className="qualification_subtitle">Evalueserve</span>
                  <div className="qualification_calendar">
                    <i className="fas fa-calendar-minus"></i>
                    2020-Present
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
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
