import React from "react";
import "./about-us.scss";
import { MyBtn } from "../../components/buttons/buttons";

const AboutUs = () => {
  return (
    <section className="aboutUs">
      <div className="aboutUs__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex flex-column justify-content-center align-items-start mb-4">
              <h2 className="aboutUs__title">
                Обо <span className="red">Mнe</span>
              </h2>
              <h3 className="aboutUs__subtitle red-shadow">
                Я Frontend разработчик
              </h3>
              <p className="aboutUs__text">
                Пф, какой-то текст — кто его вообще читает! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Suscipit cum debitis eius
                dicta. Reprehenderit asperiores sequi numquam, animi dolorem
                amet aliquam corrupti, mollitia quam quis voluptas voluptatibus
                magnam? Autem, odio?
              </p>
              <MyBtn>Читать больше</MyBtn>
            </div>
            <div className="col-md-5">
              <img
                src={process.env.PUBLIC_URL + "/image/aboutUs.jpg"}
                alt=""
                className="aboutUs__img img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
