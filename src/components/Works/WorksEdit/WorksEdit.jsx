import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import uploadService from "../../../services/upload.services";
import workService from "../../../services/work.services";
import "./WorksEdit.css";

const WorksEdit = () => {
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    images: [],
    category: "",
  });

  const { works_id } = useParams();

  const navigate = useNavigate();

  const getWorkData = () => {
    workService
      .getOne(works_id)
      .then(({ data }) => setEditData(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getWorkData();
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    workService
      .edit(works_id, editData)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  const handleFileInput = (e) => {
    const formData = new FormData();

    for (let i = 0; i < e.target.files.length; i++) {
      formData.append("imagesData", e.target.files[i]);
    }

    uploadService
      .uploadimages(formData)
      .then(({ data }) => {
        console.log(data);
        setEditData({ ...editData, images: data.cloudinary_urls });
      })
      .catch((err) => console.log(err));
  };

  const { title, description, category } = editData;

  return (
    <Container className="work-container">
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Editar obra</h2>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                className="input"
                value={title}
                onChange={handleChange}
                name="title"
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                className="input"
                value={category}
                onChange={handleChange}
                name="category"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="images">
          <Form.Label>Fotos</Form.Label>
          <Form.Control
            type="file"
            className="input"
            onChange={handleFileInput}
            name="images"
            multiple
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            className="input"
            type="text"
            value={description}
            onChange={handleChange}
            name="description"
          />
        </Form.Group>

        <Form.Group className="d-grid">
          <Button variant="dark" type="submit">
            Crea una nueva obra
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default WorksEdit;
