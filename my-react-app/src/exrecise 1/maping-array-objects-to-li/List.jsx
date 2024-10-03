function List() {
  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];
  return (
    <ul>
      {animals.map((oneAnimal, i) => {
        return <li key={i}>{oneAnimal.label}</li>;
      })}
    </ul>
  );
}

export default List;
