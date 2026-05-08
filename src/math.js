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

const DEG_TO_RAD = Math.PI / 180;

export function sin(degrees) {
  return Math.sin(degrees * DEG_TO_RAD);
}

export function cos(degrees) {
  return Math.cos(degrees * DEG_TO_RAD);
}

export function tan(degrees) {
  if (degrees % 180 === 90) throw new Error("tan is undefined at this angle");
  return Math.tan(degrees * DEG_TO_RAD);
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