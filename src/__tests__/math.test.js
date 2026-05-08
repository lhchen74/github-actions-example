import { add, subtract, multiply, divide, mod, sqrt } from "../math.js";

describe("add", () => {
  test("adds two positive numbers", () => expect(add(2, 3)).toBe(5));
  test("adds negative numbers", () => expect(add(-1, -2)).toBe(-3));
  test("adds zero", () => expect(add(5, 0)).toBe(5));
});

describe("subtract", () => {
  test("subtracts two numbers", () => expect(subtract(10, 4)).toBe(6));
  test("result can be negative", () => expect(subtract(2, 5)).toBe(-3));
});

describe("multiply", () => {
  test("multiplies two numbers", () => expect(multiply(3, 4)).toBe(12));
  test("multiplies by zero", () => expect(multiply(5, 0)).toBe(0));
});

describe("divide", () => {
  test("divides two numbers", () => expect(divide(10, 2)).toBe(5));
  test("returns a float", () => expect(divide(1, 3)).toBeCloseTo(0.333));
  test("throws on division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero");
  });
});


describe("mod", () => {
  test("mod two numbers", () => expect(mod(10, 2)).toBe(0));
  test("throws on division by zero", () => {
    expect(() => mod(5, 0)).toThrow("Division by zero");
  });
});


describe("sqrt", () => {
  test("sqrt two numbers", () => expect(sqrt(4, 2)).toBe(2));
});