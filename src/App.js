import "./styles.css";

const element = document.createElement("div");
element.textContent = "Hello World";
element.className = "container";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandboxes</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
