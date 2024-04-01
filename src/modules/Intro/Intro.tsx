import React from "react";
import "./intro.scss";
import { SocLink } from "../../components/Links/links";
import { MyBtn } from "../../components/buttons/buttons";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={process.env.PUBLIC_URL + "/image/intro.png"}
                alt=""
                className="intro__img img-fluid"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="intro__title text-center">
                С Вами <span className="red">Nikita Aw1nger</span>
              </h1>
              <h3 className="intro__subtitle text-center">
                Я Frontend разработчик
              </h3>
              <p className="intro__text text-center">
                Пф, какой-то текст — кто его вообще читает! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Suscipit cum debitis eius
                dicta. Reprehenderit asperiores sequi numquam, animi dolorem
                amet aliquam corrupti, mollitia quam quis voluptas voluptatibus
                magnam? Autem, odio?
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-2 d-flex flex-column align-items-center">
              <div className="mb-3 d-flex justify-content-center gap-3">
                <SocLink href="https://t.me/aw1nger">
                  <i className="fa-brands fa-telegram"></i>
                </SocLink>
                <SocLink href="https://vk.com/aw1nger">
                  <i className="fa-brands fa-vk"></i>
                </SocLink>
              </div>
              <MyBtn>Связаться со мной</MyBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
