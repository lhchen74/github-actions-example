import { greet, greetAll } from "../greet.js";

describe("greet", () => {
  test("greets a name", () => expect(greet("Alice")).toBe("Hello, Alice!"));
  test("trims whitespace", () => expect(greet("  Bob  ")).toBe("Hello, Bob!"));
  test("throws on empty string", () => {
    expect(() => greet("")).toThrow("Name must be a non-empty string");
  });
  test("throws on non-string", () => {
    expect(() => greet(42)).toThrow("Name must be a non-empty string");
  });
});

describe("greetAll", () => {
  test("greets multiple names", () => {
    expect(greetAll(["Alice", "Bob"])).toEqual(["Hello, Alice!", "Hello, Bob!"]);
  });
  test("returns empty array for empty input", () => {
    expect(greetAll([])).toEqual([]);
  });
});
