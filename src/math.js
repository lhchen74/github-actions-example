export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

export function mod (a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a % b;
}


export function sqrt (a, b) {
  return Math.sqrt(a, b);
}


export function pow (a, b) {
  return Math.pow(a, b);
}