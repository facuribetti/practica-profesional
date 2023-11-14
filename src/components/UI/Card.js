import React from "react";
import classes from "./Card.module.css";
//import imagen from "../../Recursos/logo-checkbox.png"

const Card = ({ title, content, image, pageLink }) => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        {title ? <h1>{title}</h1> : null}
        {image ? (
          <a href={pageLink}>
            <img
              src={image}
              className={classes.imagen}
            ></img>
          </a>
        ) : null}
      </div>
      {content ? <p>{content}</p> : null}
    </div>
  );
};

export default Card;
