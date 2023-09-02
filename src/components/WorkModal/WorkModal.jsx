import React from "react";
import "./workModal.css";

const WorkModal = () => {
  return (
    <>
      <div className="works_modal">
        <div className="works_modal-content">
          <h4 className="works_modal-title">UI/UX Designer</h4>
          <i className="fas fa-times works_modal-close"></i>

          <ul className="works_modal-works grid">
            <li className="works_modal-work">
              <i className="far fa-check-square works_modal-icon"></i>
              <p>I design high quality user interface.</p>
            </li>
            <li className="works_modal-work">
              <i className="far fa-check-square works_modal-icon"></i>
              <p>I design UX element interactions.</p>
            </li>
            <li className="works_modal-work">
              <i className="far fa-check-square works_modal-icon"></i>
              <p>I design website animations.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkModal;
