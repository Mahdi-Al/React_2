const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
const planetsInHTML = planets.map((planet, i) => <li key={i}>{planet}</li>);
const content = <ul className="list-group m-5">{planetsInHTML}</ul>;
function PutPlanets() {
  return content;
}

// 2) Add the array planetsInHTML inside the innerHTML of this <ul>

export default PutPlanets;
