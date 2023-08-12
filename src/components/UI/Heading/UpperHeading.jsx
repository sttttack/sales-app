import React from "react";

import classes from "../Heading/UpperHeading.module.css";

export default function UpperHeading() {
  return (
    <div className={classes.conteiner}>
      <div className={classes.trending}>
        <div className={classes.hot}>Trending</div>
        <p>2023 Bmw 340i</p>
      </div>
      <h1>Buy your next car with us</h1>
      <p>
        Search millions of new and used cars for sale. Save favorites for price
        drop alerts and tailored recommendations.
      </p>
    </div>
  );
}
