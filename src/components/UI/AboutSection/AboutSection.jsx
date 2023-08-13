import Card from "./Card";

import icon1 from "../../../assets/1.png";
import icon2 from "../../../assets/2.png";
import icon3 from "../../../assets/3.png";

import classes from "../AboutSection/AboutSection.module.css";

export default function AboutSection(props) {
  return (
    <div className={classes.cardSection}>
      <Card image={icon1} heading={"Secure"} text={"lorem"} />
      <Card image={icon2} heading={"Secure"} text={"lorem"} />
      <Card image={icon3} heading={"Secure"} text={"lorem"} />
    </div>
  );
}
