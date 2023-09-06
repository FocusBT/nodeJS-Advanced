const assert = require('assert');

// Example 1: Using assert.strictEqual
try {
    assert.strictEqual(1, 1, 'Assertion not passed: 1 !== 1');
} catch (error) {
    if (error instanceof assert.AssertionError) {
        console.error('Assertion Error:', error.message);
    }
}

// Example 2: Using assert.deepEqual
try {
    assert.deepEqual([1, 2, 3], [1, 2, 3], 'Arrays are not deeply equal');
} catch (error) {
    if (error instanceof assert.AssertionError) {
        console.error('Assertion Error:', error.message);
    }
}

// Example 3: Custom assertion function
function assertIsEven(value) {
    if (value % 2 !== 0) {
        throw new assert.AssertionError({
            message: `${value} is not even`,
            actual: value,
            expected: 'even',
            operator: 'isEven',
        });
    }
}

try {
    assertIsEven(3);
} catch (error) {
    if (error instanceof assert.AssertionError) {
        console.error('Custom Assertion Error:', error.message);
    }
}

// Example 4: Using assert.throws
try {
    assert.throws(
        () => {
            throw new Error('Custom error message');
        },
        Error,
        'Assertion passed: Error was thrown'
    );
} catch (error) {
    if (error instanceof assert.AssertionError) {
        console.error('Assertion Error:', error.message);
    }
}
