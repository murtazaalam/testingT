import React from "react";

function ExpertCard(props) {
  return (
    <main className="main">
      <section className="container">
        <article className="review">
          <div className="img-container">
            <img src={props.data.pic} alt="" id="person-img" />
          </div>

          <h4 id="author">{props.data.title1}</h4>
          <h5 id="job">{props.data.title2}</h5>
          <p>{props.data.author}</p>
        </article>
      </section>
    </main>
  );
}

export default ExpertCard;
