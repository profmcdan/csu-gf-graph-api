const sum = (a: number, b: number): number => {
  return a + b;
};

test('add 1 + 2 to equals 3', () => {
  expect(sum(1, 2)).toBe(3);
});
