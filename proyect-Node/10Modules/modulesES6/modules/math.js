export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function pow(a, b) {
  return a ** b;
}

export function factorial(a) {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
}
