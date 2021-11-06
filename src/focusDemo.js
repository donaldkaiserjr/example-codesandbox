import React from "react";

export default function FocusDemo() {
  const [items, setItems] = React.useState([
    { id: "a", value: "apple" },
    { id: "o", value: "orange" },
    { id: "g", value: "grape" },
    { id: "p", value: "pear" }
  ]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setItems(shuffle(items));
    }, 1000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div>
      <div>
        <h1>Without Key</h1>
        {items.map((item) => (
          <input value={item.value} />
        ))}
      </div>
      <div>
        <h1>With Key as Index</h1>
        {items.map((item, index) => (
          <input key={index} value={item.value} />
        ))}
      </div>
      <div>
        <h1>With Key</h1>
        {items.map((item) => (
          <input key={item.id} value={item.value} />
        ))}
      </div>
    </div>
  );
}

function shuffle(originalArray) {
  const array = [...originalArray];
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
