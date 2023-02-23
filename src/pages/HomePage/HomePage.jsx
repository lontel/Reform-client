import "./HomePage.css";
import imgOne from "../../resources/1.jpeg";
import imgTwo from "../../resources/2.jpeg";
import Image from "react-bootstrap/Image";
import ReactPlayer from "react-player";
import video from "../../resources/presentation.mp4";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { AuthContext } from "../../contexts/auth.contexts";
import { useContext, useEffect, useState } from "react";
import workService from "../../services/work.services";
import WorksCard from "../../components/Works/WorksCard/WorksCard";

const HomePage = () => {
  const { user } = useContext(AuthContext);

  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    loadWorks();
  }, []);

  const loadWorks = () => {
    workService
      .getAll()
      .then(({ data }) => setWorkData(data))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Container className="media">
        <Row className="video">
          <Col className="text">
            <h3>Sergio Reformas</h3>
            <p>Referentes en el sector de la construcción en España</p>
            <p>
              El éxito de nuestra empresa es el resultado de la colaboración
              entre nuestros empleados, nuestros clientes, y los productos de la
              empresa.
            </p>
          </Col>
          <ReactPlayer url={video} playing={true} volume={0.2} />
        </Row>
        <h4 className="h4">Construye tus sueños, renueva tus espacios</h4>
        <Row className="pic">
          <Image src={imgOne} />
          <Image src={imgTwo} />
        </Row>
      </Container>
      <Container>
        <h2>Mis últimos trabajos</h2>
        <Row>
          {workData
            ? workData.map((work) => {
                return (
                  <Col key={work._id}>
                    <WorksCard props={work} user={user} loadWorks={loadWorks} />
                  </Col>
                );
              })
            : null}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
