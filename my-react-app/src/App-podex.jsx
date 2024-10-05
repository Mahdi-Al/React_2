import CardPodex from "./exrecise 1/props-component-architecture/Cartpodex";
import "./index.css";
const dataPodex = {
  pokemon: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ],
};

{
  /* * Start podex */
}

function AppPodex() {
  return (
    <>
      <h1 style={{ color: " #838382" }}>Pokedex</h1>
      {dataPodex.pokemon.map((poke) => (
        <CardPodex
          key={poke.id}
          name={poke.name}
          type={poke.type}
          image={poke.image}
        />
      ))}
    </>
  );
}

export default AppPodex;
