const characters = ['Mario', 'Luigi', 'Peach', 'Toad', 'Yoshi'];

const [first, second, ...rest] = characters;

// Get last character in array using spread operator
const last = [...rest].pop();

console.log(first); // Mario
console.log(rest); // [Peach, Toad, Yoshi]
console.log(last); // Yoshi

const returnArray = () => {
  return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters, numbers);