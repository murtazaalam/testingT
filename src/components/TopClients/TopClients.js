/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import "./TopClients.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  400: { items: 1 },
  568: { items: 2 },
  1024: { items: 5 },
};
const TopClient = (props) => {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    const topClients = importAll(
      require.context(
        "../../assets/images/topclients",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
    console.log(images, "read images");
    setImages(topClients);
  }, []);

  function importAll(r) {
    let img = [];
    r.keys().map((item, index) =>
      img.push(
        <img
          height="134px"
          className="topclient-item"
          data-value={index + 1}
          src={`${r(item).default}`}
          onDragStart={handleDragStart}
          alt=""
          key={index}
        />
      )
    );
    return img;
  }
  return (
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
          autoPlay={false}
          controlsStrategy="alternate"
          mouseTracking
          items={images}
        />
      </div>
    </section>
  );
};

export default TopClient;
