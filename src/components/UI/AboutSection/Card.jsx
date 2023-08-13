import classes from "../AboutSection/Card.module.css";

export default function Card(props) {
  return (
    <div className={classes.card}>
      <img src={props.image} />
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
}
