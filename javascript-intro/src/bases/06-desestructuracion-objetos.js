const person = {
    name: "John",
    age: 30,
    codeName: "SuperMan",
  };
  
  const { name, age, codeName, power = "No power" } = person;
  
  console.log(name, age, codeName, power);
  
  const createHero = ({ name, age, codeName, power }) => ({
    id: 1239813,
    name,
    age,
    codeName,
    power,
  });
  
  console.log(createHero(person));
  