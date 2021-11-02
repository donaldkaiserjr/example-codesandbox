import "./styles.css";
import Box from "./boxes";
import SayHello from "./sayHello";
import CharacterCount from "./charCount";
import Greeting from "./greeting";

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
      <Greeting />
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
