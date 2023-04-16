const { sum } = require("./calculator");

it("deve somar 2 e 2 e o resultado deve ser 4", () => {
  expect(sum(2, 2)).toBe(4);
});

it("deve somar 2 e 2, mesmo um deles sendo string, e o resultado deve ser 4", () => {
  expect(sum("2", "2")).toBe(4);
});

it("deve dar erro se não puder realizar a soma", () => {
  expect(() => sum("", "2")).toThrowError();

  expect(() => sum(2, "")).toThrowError();

  expect(() => sum("", "")).toThrowError();

  expect(() => sum(true, "")).toThrowError();

  expect(() => sum(true, 1)).toThrowError();
});
