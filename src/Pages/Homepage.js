import ProyectoCarrito from "../Recursos/Proyecto-carrito.png";
import ProyectoPrincipal from "../Recursos/Proyecto-principal.png";
import ProyectoRegistro from "../Recursos/Proyecto-registro.png";
import Scrum from "../Recursos/scrumCheckbox.png";
import Youtrack from "../Recursos/youtrack.png";
import Header from "../components/Layout/Header";
import Card from "../components/UI/Card";


import classes from "./Homepage.module.css";
const Homepage = () => {
  const presentation =
    "Empresa de desarrollo de softare de la ciudad de Córdoba, la empresa y su oficina se ubican en el barrio Nueva Córdoba a una cuadra del Patio Olmos." +
    "Los clientes que posee son todos del sector privado, posee tanto clientes nacionales como internacionales.";
  return (
    <>
      <div className={classes.homepage}>
        <div>
          <Header className={classes.header} />
        </div>

        <div className={classes.card}>
          <Card title="Presentación del informe de la Práctica Profesional"></Card>
          <div className={classes.cardPlaces}>
            <div className={classes.cardPlace}>
              <Card
                title="Realizada en Checkbox Innovations"
                content={presentation}
                image={
                  "https://checkbox-innovations.com/wp-content/uploads/2020/10/Recurso-5.png"
                }
                pageLink={"https://checkbox-innovations.com"}
              ></Card>
            </div>
            <div className={classes.cardPlace}>
              <Card
                title="Cursada en Universidad Siglo 21"
                content="La universidad privada más grande del país con sede central en Córdoba."
                image={
                  "https://21.edu.ar/static/4bcbf88675cbe14ee0bca724f44902ff/e3771/logo-siglo.avif"
                }
                pageLink={"https://21.edu.ar/"}
              />
            </div>
          </div>
          <h1>Tecnologías aprendidas: </h1>
          <div className={classes.technologies}>
            <div className={classes.technology}>
              <img
                src="https://www.4x-treme.com/wp-content/uploads/2019/10/spring-boot-logo.png"
                className={classes.imagenTechlogy}
              />
            </div>
            <div className={classes.technology}>
              <img
                src="https://dwglogo.com/wp-content/uploads/2017/09/React_logo.png"
                className={classes.imagenTechnology}
              />
            </div>
          </div>

          <div className={classes.proyecto}>
            <Card title="Imágenes del proyecto realizado:"></Card>

            <img src={ProyectoRegistro} className={classes.imagen} />
            <img src={ProyectoPrincipal} className={classes.imagen} />
            <img src={ProyectoCarrito} className={classes.imagen} />
          </div>
          <h1>Metodología de trabajo</h1>
          <div className={classes.methodologies}>
            <img src={Scrum} className={classes.imagenMethodologies} />
            <img src={Youtrack} className={classes.imagenMethodologies} />
          </div>
          <h1>Tareas que desarollé dentro del proyecto</h1>
          <div className={classes.knowledge}>
          <div className={classes.info}>
                <p>Análisis de requisitos</p>
              </div>
              <div className={classes.info}>
                <p>Diseño de base de datos</p>
              </div>
              <div className={classes.info}>
                <p>Desarrollo del backend</p>
              </div>
              <div className={classes.info}>
                <p>Desarrollo del frontend</p>
              </div>
              <div className={classes.info}>
                <p>Testing del backend</p>
              </div>
          </div>
          <h1>Conocimientos aplicados en el proyecto que aprendí en la universidad: </h1>
          <div className={classes.knowledge}>
          <div className={classes.info}>
                <p>Análisis de requisitos</p>
              </div>
              <div className={classes.info}>
                <p>Diseño de base de datos</p>
              </div>
              <div className={classes.info}>
                <p>Patrones de diseño</p>
              </div>
              <div className={classes.info}>
                <p>Análisis y diseño de software</p>
              </div>
              <div className={classes.info}>
                <p>Testing de software</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
