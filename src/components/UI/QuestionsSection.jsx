import classes from "../UI/QuestionsSection.module.css";

import CallButton from "../UI/CallButton";

export default function QuestionsSection() {
  return (
    <div className={classes.component}>
      <div className={classes.blueDiv}>
        <h1>Have any questions?</h1>
        <CallButton />
        <CallButton />
      </div>
      <div></div>
    </div>
  );
}
