import {idothings} from "../src/main";

describe('characterisation testing', () => {
    it('should not apply any change to a plain string', () => {
        const aPlainText: string = 'this is a plain text';
        const expectedResult: string = aPlainText

        const result: string = idothings(aPlainText);

        expect(result).toBe(expectedResult)
    })
})
