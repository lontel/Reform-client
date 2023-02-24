import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import workService from "../../../services/work.services";
import Loader from "../../Loader/Loader";
import "./WorkDetails.css";

const WorkDetails = () => {
  const [work, setWork] = useState([]);
  const { work_id } = useParams();

  const getWork = () => {
    workService
      .getOne(work_id)
      .then(({ data }) => setWork(data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getWork();
  }, []);

  return (
    <>
      {work && work.images ? (
        <>
          <h1>{work.title}</h1>
          <p>{work.description}</p>
          {work.images.map((img, i) => {
            return (
              <Container>
                <Row>
                  <Col>
                    <img className="details-img" src={img} alt="" />
                  </Col>
                </Row>
              </Container>
              // <div key={i}>
              //   <img src={img} alt="" />
              // </div>
            );
          })}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default WorkDetails;
