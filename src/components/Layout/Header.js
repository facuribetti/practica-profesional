import logoCheckbox from "../../Recursos/logo-checkbox.png";
import logoSiglo21 from "../../Recursos/Logo_de_la_Universidad_Siglo_21.svg.png";
import logoReact from "../../Recursos/React_logo.png";
import logoSpringBoot from "../../Recursos/spring-boot-logo.png";

import classes from "./Header.module.css";

const Header = () => {
  /*
  const introductionHandler = () => {
    navigate("/homepage");
  };
  const presentationHandler = () => {
    navigate("/homepage");
  };
  const propuestaHandler = () => {
    navigate("/homepage");
  };
  const developmentHandler = () => {
    navigate("/homepage");
  };

        <h1 onClick={introductionHandler}>Introducción</h1>
        <h1 onClick={presentationHandler}>Presentación de la empresa</h1>
        <h1 onClick={propuestaHandler}>Propuesta</h1>
        <h1 onClick={developmentHandler}>Desarrollo</h1>
  */
  /*
        <h1>Introducción</h1>
        <h1>Presentación de la empresa</h1>
        <h1>Propuesta</h1>
        <h1>Desarrollo</h1>
*/
  return (
    <>
      <header className={classes.header}>
        <a href="https://checkbox-innovations.com/">
          {" "}
          <img src={logoCheckbox} className={classes.imagen}></img>{" "}
        </a>
        <a href="https://21.edu.ar/">
          {" "}
          <img src={logoSiglo21} className={classes.imagen}></img>{" "}
        </a>
        <a href="https://react.dev/">
          {" "}
          <img src={logoReact} className={classes.imagen}></img>{" "}
        </a>
        <a href="https://spring.io/projects/spring-framework">
          {" "}
          <img src={logoSpringBoot} className={classes.imagen}></img>{" "}
        </a>
      </header>
    </>
  );
};

export default Header;
