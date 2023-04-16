const { sum } = require("./calculator");

it("deve somar 2 e 2 e o resultado deve ser 4", () => {
  expect(sum(2, 2)).toBe(4);
});
