import "./styles.css";
import Box from "./boxes";
import SayHello from "./sayHello";
import CharacterCount from "./charCount";
import Greeting from "./greeting";
import Greeting2 from "./greeting2";
import UsernameForm from "./basic-form";
import UsernameForm2 from "./dynamic-form";
import FruitApp from "./fruitApp";
import CarsApp from "./carsApp";
import NameAnimalApp from "./nameAnimal";
import Multiply from "./curry";
// import FocusDemo from "./focusDemo";
// import Tick from "./timeDate";
import ContactCard from "./ContactCard";
import Joke from "./Joke";

const element = (
  <>
    <div className="contacts">
      <Joke
        information={{
          question: "What's the best thing about Switzerland?",
          punchLine:
            "It's hard to explain puns to kleptomaniacs because they always take things literally."
        }}
      />
      <Joke
        information={{
          question: "What is big an ugly yet small and pretty at the same time"
        }}
      />
      <Joke
        information={{
          question: "What's the best thing about Switzerland?",
          punchLine:
            "It's hard to explain puns to kleptomaniacs because they always take things literally."
        }}
      />
      <Joke
        information={{
          question: "What's the best thing about Switzerland?",
          punchLine:
            "It's hard to explain puns to kleptomaniacs because they always take things literally."
        }}
      />
      <Joke
        information={{
          question: "What's the best thing about Switzerland?",
          punchLine:
            "It's hard to explain puns to kleptomaniacs because they always take things literally."
        }}
      />

      <ContactCard
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/300/300",
          phone: "(212) 555-1234",
          email: "cattyclaw@catnap.meow"
        }}
      />
      <ContactCard
        contact={{
          name: "Big Poo",
          imgUrl: "http://placekitten.com/250/250",
          phone: "(212) 555-3334",
          email: "dattyCalm@catnap.meow"
        }}
      />
      <ContactCard
        contact={{
          name: "Creamy Cake",
          imgUrl: "http://placekitten.com/300/250",
          phone: "(212) 555-2221",
          email: "creamycakes@catnap.meow"
        }}
      />
      <ContactCard
        contact={{
          name: "Nippy",
          imgUrl: "http://placekitten.com/350/250",
          phone: "(212) 555-7994",
          email: "Nippytheman@catnap.meow"
        }}
      />
    </div>
    {/* <Tick /> */}
    {/* <FocusDemo /> */}
    <SayHello firstName={"Anthony"} lastName={"Phillips"} />
    <SayHello firstName={"Jason"} lastName={"Muzzo"} />
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
        Good Night{" "}
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
      <Greeting2 />
      <UsernameForm />
      <UsernameForm2 />
      <FruitApp />
      <CarsApp />
      <NameAnimalApp />
    </div>
  </>
);

export default function App() {
  return <div className="App">{element}</div>;
}
