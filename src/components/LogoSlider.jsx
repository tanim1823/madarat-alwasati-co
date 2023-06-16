import Slider from "react-infinite-logo-slider";

const LogoSlider = ({ data, text }) => {
  return (
    <>
      <h2 className="text-center my-5">
        {text.length > 0 ? text : "No title found"}
      </h2>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={true}
        blurBoderColor={"#f0f0eb"}
      >
        {data.length > 0
          ? data.map((item) => (
              <span key={item.id} className="mx-2 border pl-2">
                <Slider.Slide>
                  <img src={item.url} alt="any" className="w-36" />
                </Slider.Slide>
              </span>
            ))
          : "No logos found"}
      </Slider>
    </>
  );
};

export default LogoSlider;
