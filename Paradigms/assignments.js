//Name: Ryan Kyaka
//Date: 6th July 2025
const radius = 7;

function calculateCircumference(r) {
  return 2 * Math.PI * r;
}

console.log(calculateCircumference(radius));
// 2A. Rewrite this using Object-Oriented Programming (OOP)
class Circle {
  constructor(radius) {
    this.radius = radius;  // assigns this radius property to the circle object
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const myCircle = new Circle(7);
console.log(myCircle.getCircumference());

// 2B. Rewrite this using Functional Programming
//1.Use a pure function, takes in an input and returns an output.
function circleCircumference(radius) {
  return 2 * Math.PI * radius;
}
//2. Using map to use the pure function to act upon the list of radii and give their respective circumferences back as output
const radii = [3, 5, 7];
const circumferences = radii.map(circleCircumference);

console.log(circumferences);

//Part 4
