import Header from "../components/Layout/Header";
import Card from "../components/UI/Card";
import ProyectoCarrito from "../Recursos/Proyecto-carrito.png";
import ProyectoPrincipal from "../Recursos/Proyecto-principal.png";
import ProyectoRegistro from "../Recursos/Proyecto-registro.png";
import classes from "./Homepage.module.css";
const Homepage = () => {
  const presentation =
    "Empresa de desarrollo de softare de la ciudad de córdoba, la empresa y su oficina se ubican en el barrio Nueva Córdoba a una cuadra del Patio Olmos." +
    "Los clientes que posee son todos del sector privado, posee tanto clientes nacionales como internacionales";
  const propuesta =
    "La empresa me ofreció la posibilidad de realizar 2 cursos de programación en ReactJs y Spring Boot. Luego de realizados los cursos se me" +
    " asignó un proyecto a realizar para poder prácticar y afianzar estas tecnologías recién aprendidas y también poner en práctica mis conocimientos adquiridos en la universidad";
  //empresa de desarrollo de software con sede en la ciudad de córdoba
  return (
    <>
      <div className={classes.homepage}>
        <div>
          <Header className={classes.header} />
        </div>

        <div className={classes.card}>
          <Card title="Presentación del informe de la práctica profesional"></Card>
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
                title="Cursada en la universidad siglo 21"
                content="La universidad privada más grande del país con cede central en córdoba."
                image={
                  "https://21.edu.ar/static/4bcbf88675cbe14ee0bca724f44902ff/e3771/logo-siglo.avif"
                }
                pageLink={"https://21.edu.ar/"}
              />
            </div>
          </div>
          <Card title="Propuesta" content={propuesta}></Card>

          <div className={classes.proyecto}>
            <Card title="Imagenes del proyecto realizado:"></Card>

            <img src={ProyectoPrincipal} className={classes.imagen} />
            <img src={ProyectoCarrito} className={classes.imagen} />
            <img src={ProyectoRegistro} className={classes.imagen} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
