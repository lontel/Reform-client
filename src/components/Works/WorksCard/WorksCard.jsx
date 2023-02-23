import "./WorksCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import workService from "../../../services/work.services";
import { Nav } from "react-bootstrap";

const WorksCard = ({ props, user, loadWorks }) => {
  const shortDescription = `${props.description.slice(0, 100)}...`;

  const deleteWork = () => {
    workService
      .delete(props._id)
      .then(() => loadWorks())
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="card-pic" variant="top" src={props.images[0]} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text> {shortDescription} </Card.Text>
          <Button variant="dark">Ver detalles</Button>
          {user?.role === "admin" && (
            <Button onClick={deleteWork} variant="danger">
              Borrar
            </Button>
          )}
          {user?.role === "admin" && (
            <Nav.Link href={`/works-edit/${props._id}`}>Editar</Nav.Link>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default WorksCard;
// <Button  variant="warning">Editar</Button>
