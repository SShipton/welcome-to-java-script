const fullName = 'Skylar'
const numberOfCupsOfCoffee = 0

console.log(
  `Hi! My name is ${fullName}, and I drink ${numberOfCupsOfCoffee} cups of coffee every day.`
)

const numbers = [
  41,
  89,
  93,
  61,
  51,
  84,
  36,
  3,
  39,
  54,
  83,
  49,
  24,
  30,
  50,
  22,
  22,
  53,
  65,
  40,
]
let smallest = numbers[0]

for (let index = 1; index < numbers.length; index++) {
  if (numbers[index] < smallest) {
    smallest = numbers[index]
  }
}
console.log(smallest)
