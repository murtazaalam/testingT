import * as React from "react";
import "./StudentCard.css";

export default function StudentCard(props) {
  return (
    <main className="main">
      <section className="container container-width">
        <article className="review">
          <div className="img-container">
            <img src={props.data.pic} alt="" id="person-img" />
          </div>

          <h4 id="author">{props.data.title}</h4>
          <p id="job">{props.data.destination}</p>
          <p id="info">"{props.data.overview}"</p>
        </article>
      </section>
    </main>
  );
}
