import React from "react";
import axios from "axios";
import Form from "../components/Form.jsx"
import Filter from "../components/Filter.jsx"

// yelp api request
function getUserValue() {
  // dummy data for now
}
function getYelpApi() {
  // get user input
  const userValue = getUserValue();
  // recipe instructions for what to extract from data
  const config = {
    headers: {
      Authorization:
        "Bearer {iUACnZY0wouG_UZHNqxMpQ48sr6_WU8AFbjN8VnWY0rsJXI-6uRyX-OzAd67YnIIHSBUPH01_PcPhk1EDTaK7j6OFxMxFO4sHZbkdbCfbuDG1m5UNv-XPwyzcWpcZXYx}",
    },
    params: {
      term: "restaurants",
      location: userValue.location,
      price: userValue.price,
      //   preset props
      radius: 16093,
      sort_by: "relevance",
      limit: 1,
    },
  };
}

function Rest() {
  return (
    <>
      <div className="header-contain">
        <div className="tag">I'm feeling hungry</div>
        <h2>Select a Random Place to Eat</h2>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="input-contain">
        <div className="input-item">
            <Form />
           
        </div>
        <div className="input-item">
            <Filter />
        </div>
      </div>
    </>
  );
}
export default Rest;
