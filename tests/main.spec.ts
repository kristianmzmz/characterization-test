import {idothings} from "../src/main";

describe('characterisation testing', () => {
    it.each
    ([
        ["this is a plain text"],
        ["hello world"],
        ["charmander"],
        ["characterization tests examples"]
    ])
    ('should not apply any change to a plain string', (aPlainText: string) => {
        const expectedResult: string = aPlainText

        const result: string = idothings(aPlainText);

        expect(result).toBe(expectedResult)
    })
})
