import Card from "./Card";

import icon1 from "../../../assets/1.png";
import icon2 from "../../../assets/2.png";
import icon3 from "../../../assets/3.png";

import classes from "../AboutSection/AboutSection.module.css";

export default function AboutSection(props) {
  const cardText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

  return (
    <div className={classes.main}>
      <div className={classes.heading}>
        <span>About</span>
        <h1>About the Mobile</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea.
        </p>
      </div>
      <div className={classes.cardSection}>
        <Card image={icon3} heading={"Exclusive"} text={cardText} />
        <Card image={icon1} heading={"Update"} text={cardText} />
        <Card image={icon2} heading={"Secure"} text={cardText} />
      </div>
    </div>
  );
}
