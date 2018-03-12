import React from "react";

const AstronomyCard = props => {
  const { title, url, hdurl, explanation, date, copyright } = props.data;

  return (
    <div>
      <h6>{title}</h6>
      <a href={hdurl} title={title}>
        <img src={url} alt={title} />
      </a>
      <p>{explanation}</p>
      <p>{date}</p>
      <p>{copyright}</p>
    </div>
  )
};

export default AstronomyCard;