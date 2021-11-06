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
import FocusDemo from "./focusDemo";
import Tick from "./timeDate";
import ContactCard from "./ContactCard";

const element = (
  <>
    <div className="contacts">
      <ContactCard
        name="Mr. Whiskerson"
        imgUrl="http://placekitten.com/250/250"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        name="Fluffykins"
        imgUrl="http://placekitten.com/400/200"
        phone="(212) 555-2324"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        name="Oscar Baby"
        imgUrl="http://placekitten.com/400/300"
        phone="(212) 555-2344"
        email="oscar@catnap.meow"
      />
      <ContactCard
        name="Peanut"
        imgUrl="http://placekitten.com/300/300"
        phone="(212) 555-1234"
        email="peanut.cookie@catnap.meow"
      />
    </div>
    <Tick />
    <FocusDemo />
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
