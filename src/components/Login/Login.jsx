import React from "react";
import "./Login.css";
import error from "../../images/404.png";
import { Link } from "react-router-dom";
const Login = () => {
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
        <section className="login">
          <div className="login_container">
            <div className="login_form">
              <h3>Login</h3>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <Link to="/subjects">
                <button>تسجيل</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
