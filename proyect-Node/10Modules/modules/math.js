function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function pow(a, b) {
  return a ** b;
}

function factorial(a) {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
}

module.exports = {
    sum,
    multiply,
    pow,
    factorial
}

