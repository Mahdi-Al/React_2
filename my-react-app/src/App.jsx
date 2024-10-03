import "./App.css";
import Alert from "./exrecise 1/alert-component/alert.jsx";
import Cart from "./exrecise 1/building-a-layout/Cart.jsx";
import List from "./exrecise 1/maping-array-objects-to-li/List.jsx";

function App() {
  const data = {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/330px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
    cardTitle: "Bob Dylan",
    cardDescription:
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
      url: "https://en.wikipedia.org/wiki/Bob_Dylan",
      label: "Go to wikipedia",
    },
  };
  return (
    <>
      <Alert text="OMG! Something really bad has happened!" />
      <Cart
        title={`${data.cardTitle}`}
        paragraph={`${data.cardDescription}`}
        a={`${data.button.label}`}
        srcurl={`${data.image}`}
        url={`${data.button.url}`}
      />
      <List />
    </>
  );
}

export default App;
