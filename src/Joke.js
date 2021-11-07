export default function Joke(props) {
  return (
    <div>
      <h3>
        Question:{" "}
        {props.information.question
          ? props.information.question
          : "No Question Asked"}
      </h3>
      <h3>
        Punchline:{" "}
        {props.information.punchLine
          ? props.information.punchLine
          : "No Punchline for this one"}
      </h3>
      <hr />
    </div>
  );
}
