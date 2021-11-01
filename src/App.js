import "./styles.css";

function SayHello({ firstName, lastName }) {
  return (
    <div className="sayHello">
      Hello {firstName} {lastName}
    </div>
  );
}

function CharacterCount({ text }) {
  return (
    <div className="charCount">
      {`The sentence:  `}
      <i>{` "${text}"`}</i>
      {" has "}
      {text.length ? <strong>{text.length}</strong> : "No"}
      {" characters"}
    </div>
  );
}

function Box({ className = "", style, size, ...rest }) {
  const sizeClassName = size ? `box--${size}` : "box--large";

  const props = {
    className: `box ${sizeClassName}`,
    style: { fontStyle: "normal", fontWeight: "600", color: "#fff", ...style },
    ...rest
  };
  return <div {...props} />;
}

const element = (
  <>
    <CharacterCount text={"Nate is here"} />
    <CharacterCount text={"Jason went home"} />
    <CharacterCount text={"Never plug that in"} />
    <div className="container">
      <Box size="large" style={{ backgroundColor: "purple" }}>
        {" "}
        Good Evening
      </Box>
      <Box style={{ backgroundColor: "skyblue" }} size="large">
        {" "}
        Good Night There{" "}
      </Box>
      <Box style={{ backgroundColor: "skyblue" }} size="medium">
        {" "}
        Good Day{" "}
      </Box>
      <Box style={{ backgroundColor: "skyblue" }} size="small">
        {" "}
        Good Night{" "}
      </Box>
    </div>
  </>
);

export default function App() {
  return (
    <div className="App">
      <SayHello firstName={"Anthony"} lastName={"Phillips"} />
      <h2>{element}</h2>
    </div>
  );
}
