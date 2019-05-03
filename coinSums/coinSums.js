/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

//loop through the first value see if its divisible
//go through to the next value 


var makeChange = (total) => {
    let result = 0;
    let denom = [200, 100, 50, 20, 10, 5, 2, 1]
    let denomRotation = (i = 0, moneyLeft = total) => {
        debugger;
        if (moneyLeft === 0) {
            result++
            return;
        }

        for (; i < denom.length; i++) {
            moneyLeft = moneyLeft - denom[i]
            if (moneyLeft >= 0) {
                denomRotation(i, moneyLeft);

            }
            moneyLeft = moneyLeft + denom[i];
        }
    }

    denomRotation();
    return result;
};

class TestSuite {
    runtest() {
        this.smallNumber();
        this.largeNumber();
        this.zero();
    };

    smallNumber() {
        let actual = makeChange(9);
        let expected = 8;
        (actual === expected) ? console.log('test passed--the function outputs the proper value when given a small number relative to range'): console.log(`test failed-- expected ${expected} instead ${actual}`)
    };

    largeNumber() {
        let actual = makeChange(198);
        let expected = 70407;
        (actual === expected) ? console.log('test passed--the function outputs the proper value when given a large number relative to range'): console.log(`test failed-- expected ${expected} instead ${actual}`)
    };

    zero() {
        let actual = makeChange(0);
        let expected = 1;
        (actual === expected) ? console.log('test passed--the function outputs 1 when given 0'): console.log(`test failed-- expected ${expected} instead ${actual}`)

    };

};

var test = new TestSuite();
test.runtest();


