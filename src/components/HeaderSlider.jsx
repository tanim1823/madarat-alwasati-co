import image_1 from "../assets/images/slides/image-1.jpg";
import image_2 from "../assets/images/slides/image-2.jpg";
import image_3 from "../assets/images/slides/image-3.jpg";

const slideData = [
  {
    id: 1,
    url: image_1,
    text1: "World Best Leading Construction Company ",
    text2: " To be the highest value provider of global construction services.",
  },
  {
    id: 2,
    url: image_2,
    text1: "World Best Leading Construction Company Inc.",
    text2: " To be the highest value provider of global construction services.",
  },
  {
    id: 3,
    url: image_3,
    text1: "World Best Leading Construction Company Inc.",
    text2: " To be the highest value provider of global construction services.",
  },
];

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        style={{
          marginTop: "55px",
        }}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicator */}
        <div className="carousel-indicators">
          {slideData.map((_, id) => (
            <button
              key={id}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={id}
              className={id === 0 ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${id}`}
            />
          ))}
        </div>
        {/* Single item list */}
        <div className="carousel-inner" style={{ height: "fit-content" }}>
          {slideData.map((data, id) => (
            <div key={id} className={`carousel-item ${id === 0 && "active"}`}>
              <img src={data.url} className="d-block w-100" alt="..." />
              <div className="carousel-caption ">
                <h2>{data.text1}</h2>
                <h5>{data.text2}</h5>
              </div>
            </div>
          ))}
        </div>

        <button
          style={{
            color: "black !important",
          }}
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
