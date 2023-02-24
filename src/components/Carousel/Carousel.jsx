import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Loader from "../Loader/Loader";

const MyCarousel = ({ workData }) => {
  return (
    <>
      {workData.length ? (
        <div className="carousel-container">
          <Carousel variant="dark" className="carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={workData[0].images[0]}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={workData[1].images[0]}
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={workData[2].images[0]}
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MyCarousel;
