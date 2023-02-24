import "./WorksCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import workService from "../../../services/work.services";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WorksCard = ({ props, user, loadWorks }) => {
  const shortDescription = `${props.description.slice(0, 60)}...`;
  const navigation = useNavigate();

  const deleteWork = () => {
    workService
      .delete(props._id)
      .then(() => loadWorks())
      .catch((err) => console.error(err));
  };

  const goToDetails = () => {
    navigation(`/details/${props._id}`);
  };
  return (
    <>
      <Card style={{ width: "18rem", height: "30rem" }}>
        <Card.Img className="card-pic" variant="top" src={props.images[0]} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="mb-5"> {shortDescription} </Card.Text>
          <Container>
            <Row>
              <Col>
                <Button onClick={goToDetails} className="m-1" variant="dark">
                  Ver detalles
                </Button>
                {user?.role === "admin" && (
                  <Button className="m-1" onClick={deleteWork} variant="danger">
                    Borrar
                  </Button>
                )}
                {user?.role === "admin" && (
                  <Nav.Link
                    as={Button}
                    variant="warning"
                    href={`/works-edit/${props._id}`}
                  >
                    Editar
                  </Nav.Link>
                )}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default WorksCard;
