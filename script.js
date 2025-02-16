// script.js

// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  if (typeof length !== 'number' || typeof width !== 'number' || length < 0 || width < 0) {
    return "Invalid input. Length and width must be non-negative numbers.";
  }
  return length * width;
}

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  if (typeof radius !== 'number' || radius < 0) {
    return "Invalid input. Radius must be a non-negative number.";
  }
  return Math.PI * radius * radius;
}

// Function to calculate the area of a triangle (using Heron's formula)
function calculateTriangleArea(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || a < 0 || b < 0 || c < 0) {
    return "Invalid input. Side lengths must be non-negative numbers.";
  }

  // Check if the sides can form a triangle (triangle inequality theorem)
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Invalid input. The given side lengths cannot form a triangle.";
  }

  const s = (a + b + c) / 2; // Semi-perimeter
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}


// Example usage (you can modify these values)
const rectangleLength = 5;
const rectangleWidth = 10;
const rectangleArea = calculateRectangleArea(rectangleLength, rectangleWidth);
console.log(`Area of rectangle with length ${rectangleLength} and width ${rectangleWidth}: ${rectangleArea}`);

const circleRadius = 7;
const circleArea = calculateCircleArea(circleRadius);
console.log(`Area of circle with radius ${circleRadius}: ${circleArea}`);

const triangleSideA = 3;
const triangleSideB = 4;
const triangleSideC = 5;
const triangleArea = calculateTriangleArea(triangleSideA, triangleSideB, triangleSideC);
console.log(`Area of triangle with sides ${triangleSideA}, ${triangleSideB}, and ${triangleSideC}: ${triangleArea}`);


// Example of handling invalid input:
const invalidInput = calculateRectangleArea(-5, 10);
console.log(invalidInput); // Output: Invalid input. Length and width must be non-negative numbers.


// You can add more examples or use these functions in other parts of your script.
