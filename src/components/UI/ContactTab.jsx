import classes from "../UI/ContactTab.module.css";

export default function ContactTab(props) {
  return (
    <div className={classes.tab}>
      <img src={props.image} />
      <p>{props.text}</p>
    </div>
  );
}
