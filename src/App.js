import "./styles.css";

const Message = (props) => <div className="message">{props.msg}</div>;

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandboxes</h1>
      <Message msg="Good Morning" />
      <Message msg="Please sign in" />
    </div>
  );
}
