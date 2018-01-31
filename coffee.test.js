const functions = require('./coffee');

test('Tests the default office and situation', () => {
    let result = functions.distanceToCoffee(3, 4, [1,0], [[0,2], [2,1]], [[2,0], [1,1], [1,2]])
    expect(result).toEqual(3)
})

test('Tests the default office but different starting point', () => {
    let result = functions.distanceToCoffee(3, 4, [1,3], [[0,2], [2,1]], [[2,0], [1,1], [1,2]])
    expect(result).toEqual(2)
})

test('Tests using a 4x4 office', () => {
    let result = functions.distanceToCoffee(4, 4, [1,0], [[2,1]], [[2,0], [1,1], [1,2]])
    expect(result).toEqual(8)
})

test('Tests using a 4x4 office', () => {
    let result = functions.distanceToCoffee(5, 5, [4,4], [[3,1], [0,0]], [[2,1], [2,2], [3,2], [4,2]])
    expect(result).toEqual(8)
})

test('Tests using a complex 12x11 office', () => {
    let result = functions.distanceToCoffee(12, 11, [5,5], [ [0,9], [8,7], [11,2] ], [ [0,4], [0,6], [1,1], [1,2], [1,8], [1,9], [2,3], [2,4], [2,7], [2,8], [3,0], [3,1], [3,5], [3,9], [4,3], [4,8], [5,1], [5,7], [5,9], [5,10], [6,2], [6,3], [7,0], [7,4], [7,6], [7,7], [7,8], [7,9], [8,3], [8,6], [8,9], [9,1], [9,2], [9,6], [9,9], [10,2], [10,8], [11,0], [11,3], [11,6], [11,8], [11,10] ])
    expect(result).toEqual(9)
})

