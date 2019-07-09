const createMultiplyTable = require('../main');

/*
GIVEN: I hava a start number 2 and an end number 4.
WHEN: I ask to create a multiply table with the start number 2 and the end number 4.
THEN: I should have a multiply table such as 
2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16
*/
it ('should create a multiply table with 2 and 4', () => {
    expect(createMultiplyTable(2, 4)).toBe('2*2=4\n'
                                        +'2*3=6\s\s3*3=9\n'
                                        +'2*4=8\s\s3*4=12\s\s4*4=16'
    );
});