import "./Loading.css";

const Loading = () => (
  <div className="backdrop">
    <div className="loading">
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <span style={{ color: "black" }}>Loading</span>
      </div>
    </div>
  </div>
);
export default Loading;
