export function greet(name) {
  if (!name || typeof name !== "string") {
    throw new Error("Name must be a non-empty string");
  }
  return `Hello, ${name.trim()}!`;
}

export function greetAll(names) {
  return names.map(greet);
}
