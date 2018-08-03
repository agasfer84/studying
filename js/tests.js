function testPow() {
    describe("pow", function() {

        describe("возводит x в степень n", function() {

            function makeTest(x) {
                var expected = x * x * x;
                it("при возведении " + x + " в степень 3 результат: " + expected, function() {
                    assert.equal(pow(x, 3), expected);
                });
            }

            for (var x = 1; x <= 5; x++) {
                makeTest(x);
            }

            function makeTestNegative(x) {
                var expected = 1/(x * x * x);
                it("при возведении " + x + " в степень -3 результат: " + expected, function() {
                    assert.equal(pow(x, -3), expected);
                });
            }

            for (var n = 1; n <= 5; n++) {
                makeTestNegative(n);
            }

            function makeTestFractional(x) {
                var expected = Math.pow(x, 0.5);
                it("при возведении " + x + " в степень 0.5 результат: " + expected, function() {
                    assert.equal(pow(x, 0.5), expected);
                });
            }

            for (var f = 1; f <= 5; f++) {
                makeTestFractional(f);
            }

        });

        it("при возведении в нулевую степень результат 1", function() {
            assert.equal(pow(2, 0), 1);
        });

        it("при возведении ноля в нулевую степень результат NaN", function() {
            assert(isNaN(pow(0, 0)),  "0 в степени 0 не NaN");
        });
    });
}

//testPow();
