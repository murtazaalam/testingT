import React from "react";
import "./List.css";
import CourseCard from "../../TopCourses/CourseCard/CourseCard";

const List = ({ list }) => {
  const discount = 0;
  return (
    <div className="list-wrap">
      {list.map((data, index) => (
        <CourseCard
          key={index}
          id={data.id}
          title={data.title}
          pic={data.thumbnail}
          gradient={data.gradient}
          price={data.price}
          discount={discount}
          rating={data.rating}
        ></CourseCard>
      ))}
    </div>
  );
};

export default List;
