import "./styles.css";

function SayHello({ firstName, lastName }) {
  return (
    <div>
      Hello {firstName} {lastName}
    </div>
  );
}

function CharacterCount({ text }) {
  return (
    <div className="container">
      {`Text:  `}
      <i>{` "${text}"`}</i>
      {" has "}
      {text.length ? <strong>{text.length}</strong> : "No"}
      {" characters"}
    </div>
  );
}

const element = (
  <>
    <CharacterCount text={"Nate is here"} />
    <CharacterCount text={"Jason went home"} />
    <CharacterCount text={"Never plug that in"} />
  </>
);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandboxes</h1>
      <SayHello firstName={"donald"} lastName={"Kaiser"} />
      <h2>{element}</h2>
    </div>
  );
}
