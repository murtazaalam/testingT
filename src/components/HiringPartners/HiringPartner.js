/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import "./HiringPartners.css";
import AliceCarousel from "react-alice-carousel";

const HiringPartner = (props) => {
  const responsive = {
    400: { items: 1 },
    500: { items: 2 },
    1024: { items: 4 },
    1280: { items: 5 },
  };
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    const topClients = importAll(
      require.context("../../assets/images/hiring", false, /\.(png|jpe?g|svg)$/)
    );
    // console.log(images, "read images");
    setImages(topClients);
  }, []);

  function importAll(r) {
    let img = [];
    r.keys().map((item, index) =>
      img.push(
        <img
          className="techvanto-hiring-partner"
          data-value={index + 1}
          src={`${r(item).default}`}
          alt=""
          key={index}
        />
      )
    );
    return img;
  }
  return (
    <>
      <section>
        {/* <h4 className="text-small">{props.title}</h4> */}
        <div className="techvanto-top-client-slider">
          <AliceCarousel
            responsive={responsive}
            autoPlayDirection={"rtl"}
            autoPlayStrategy={"none"}
            disableButtonsControls={true}
            animationDuration={9000}
            animationEasingFunction={"linear"}
            autoPlayInterval={0}
            infinite={true}
            autoPlay={true}
            controlsStrategy="alternate"
            mouseTracking
            items={images}
          />
        </div>
      </section>
    </>
  );
};

export default HiringPartner;

// <section style={{ marginLeft: "25px" }} className="section-spacing row">
//   {images.map((img) => {
//     return img;
//   })}
// </section>
