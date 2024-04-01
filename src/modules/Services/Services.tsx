import React, { useEffect, useState } from "react";
import "./serrvices.scss";
import axios from "axios";

const Services = () => {
  const [cards, setCards] = useState<
    {
      id: number;
      title: string;
      body: string;
    }[]
  >([]);

  const fetchCards = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: 6,
          _page: 1,
        },
      }
    );
    const data = await response.data;
    console.log(data);
    setCards(data);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <section className="services">
      <div className="services__wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="services__title mb-4">Сервис</h2>
            {cards.map((item, index) => (
              <div
                key={index}
                className="services__card col-md-4 col-sm-6 col-12 mb-4"
              >
                <div className="services__card-wrapper d-flex flex-column justify-content-between gap-3 h-100">
                  <h4 className="services__card-title text-center">{item.title}</h4>
                  <p className="services__card-text">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
