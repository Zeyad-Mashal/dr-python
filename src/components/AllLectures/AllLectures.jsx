import React from "react";
import Navbar from "../Navbar/Navbar";
import "./allLectures.css";
import error from "../../images/404.png";
import { Link } from "react-router-dom";

const AllLectures = () => {
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
        <section className="AllLectures">
          <div className="AllLectures_container">
            <h1 className="AllLectures_title">جميع المحاضرات</h1>
            <div className="all_lectures_list">
              <Link to={"/lectures"}>
                <div className="all_lectures_item">
                  <p>Day 1</p>
                </div>
              </Link>
              <Link to={"/lectures"}>
                <div className="all_lectures_item">
                  <p>Day 2</p>
                </div>
              </Link>
              <Link to={"/lectures"}>
                <div className="all_lectures_item">
                  <p>Day 3</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllLectures;
