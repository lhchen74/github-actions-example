import { add, subtract, multiply, divide, sin, cos, tan } from "../math.js";

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

describe("sin", () => {
  test("sin(0) = 0",    () => expect(sin(0)).toBeCloseTo(0));
  test("sin(30) = 0.5", () => expect(sin(30)).toBeCloseTo(0.5));
  test("sin(90) = 1",   () => expect(sin(90)).toBeCloseTo(1));
  test("sin(180) = 0",  () => expect(sin(180)).toBeCloseTo(0));
});

describe("cos", () => {
  test("cos(0) = 1",    () => expect(cos(0)).toBeCloseTo(1));
  test("cos(60) = 0.5", () => expect(cos(60)).toBeCloseTo(0.5));
  test("cos(90) = 0",   () => expect(cos(90)).toBeCloseTo(0));
  test("cos(180) = -1", () => expect(cos(180)).toBeCloseTo(-1));
});

describe("tan", () => {
  test("tan(0) = 0",  () => expect(tan(0)).toBeCloseTo(0));
  test("tan(45) = 1", () => expect(tan(45)).toBeCloseTo(1));
  test("tan(90) throws", () => {
    expect(() => tan(90)).toThrow("tan is undefined at this angle");
  });
});
