const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
// Test para fromDollarToYen (nuevo)
test("One dollar should be approximately 146.26 yens", function() {
    const expected = (1 / 1.07) * 156.5; 
    expect(fromDollarToYen(1)).toBeCloseTo(expected, 2);
});
// Test para fromYenToPound (nuevo)
test("One yen should be approximately 0.00556 pounds", function() {
    const expected = (1 / 156.5) * 0.87;
    expect(fromYenToPound(1)).toBeCloseTo(expected, 5);
});