import React, { useState } from "react";
import "./Mission.css";
import { CheckCircle } from "lucide-react";
import Heading from "./Heading";

const data = [
  {
    title: "Vision",
    description: [
      "To contribute for sustainable development of nation through achieving excellence in technical education and research while facilitating transformation of students into responsible citizens and competent professionals.",
    ],
  },
  {
    title: "Mission",
    description: [
      "To impart affordable and quality education in order to meet the needs of industries and achieve excellence in teaching-learning process.",
      "To create a conducive research ambience that drives innovation and nurtures research-oriented scholars and outstanding professionals.",
      "To collaborate with other academic & research institutes as well as industries in order to strengthen education and multidisciplinary research.",
      "To promote equitable and harmonious growth of students, academicians, staff, society and industries, thereby becoming a center of excellence in technical education.",
      "To practise and encourage high standards of professional ethics, transparency and accountability."
    ],
  },
];

const Mission = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  return (
    <>
      <Heading title="Vision & Mission"/>
    <section className="accordion">
      <div className="accordion__tabs">
        {data.map((item, index) => (
          <button
            key={index}
            className={`accordion__tab ${index === activeTab ? "active" : ""}`}
            onClick={() => toggleTab(index)}
            data-actab-group="0"
            data-actab-id={index}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="accordion__content">
        {data.map((item, index) => (
          <article
            key={index}
            className={`accordion__item ${index === activeTab ? "active" : ""}`}
            data-actab-group="0"
            data-actab-id={index}
          >
            <h4 className="accordion__label" onClick={() => toggleTab(index)}>
              {item.title}
            </h4>
            <div className="accordion__container">
              <ul>
                {item.description.map((d, index) => (
                  <li>
                    <div><CheckCircle /></div>
                    <p>{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      </section>
      </>
  );
};

export default Mission;
