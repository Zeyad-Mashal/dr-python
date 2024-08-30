import React from "react";
import Navbar from "../Navbar/Navbar";
import image from "../../images/b2.jpg";
import image2 from "../../images/404.png";
import error from "../../images/404.png";
import { Link } from "react-router-dom";
import "./Subjects.css";
const Subjects = () => {
  return (
    <>
      <div className="errorPage">
        <div className="errorPage_container">
          <div className="error_404">
            <h1>404</h1>
            <img src={error} alt="error 404" />
          </div>
          <p>هذه المنصة لا تعمل الا علي شاشة الهاتف</p>
          <p>يرجي استخدام الهاتف لعدم التعرض الي ضياع الحساب</p>
          <span>Dr: Python</span>
        </div>
      </div>

      <div className="view_content">
        <Navbar />
        <section className="subjects">
          <div className="subjects_container">
            <h3>
              <span>Zeyad_Mashaal</span>
            </h3>
            <p>أختار المادة</p>

            <div className="loading_list">
              <div className="loading_item">
                <p></p>
                <div></div>
              </div>
            </div>
            <div className="subjects_list">
              <Link to="/all_lectures">
                <div className="subjects_item">
                  <h3>Programming</h3>
                  <img src={image2} alt="" />
                  <p>سنة تالتة</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Subjects;
