import {idothings} from "../src/main";

describe('characterisation testing', () => {
    it('what is doing with a plain text', () => {
        const aPlainText: string = 'this is a plain text';
        const expectedResult: string = ''

        const result: string = idothings(aPlainText);

        expect(result).toBe(expectedResult)
    })
})
