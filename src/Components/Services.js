import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";
const services = [
  {
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, nesciunt."
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, nesciunt."
  },
  {
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, nesciunt."
  },
  {
    icon: <FaBeer />,
    title: "Strongest Berr",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, nesciunt."
  }
];

const Services = () => {
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((item, index) => (
          <article key={item.title} className="service">
            <span>{item.icon}</span>
            <h5>{item.title}</h5>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
