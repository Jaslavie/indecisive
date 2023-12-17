import React from 'react'
import axios from 'axios'

// yelp api request
function getUserValue () {
    // dummy data for now
}
function getYelpApi () {
    // get user input
    const userValue = getUserValue()
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

function Rest () {
    return (
        <>
        <h1>Select a Random Place to Eat</h1>
        </>
    )
}
export default Rest