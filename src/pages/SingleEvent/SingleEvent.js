import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleEvent } from "../../components";
import singleEventApi from "../../apis/api/SingleEvent";

const EventDetail = () => {
  const [event, getEvent] = useState();
  const params = useParams();
  useEffect(() => {
    if (!event) {
      singleEventApi(params.id, getEvent);
    }
  }, [event]);
  console.log("event api", event);
  return (
    <>
      <SingleEvent event={event} />
    </>
  );
};
export default EventDetail;
