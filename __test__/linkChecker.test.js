import {urlValidation} from '../src/client/js/linkChecker'


describe('Test if the URL is valid', () => {

    test('Testing the urlValidation function return true for valid url', () => {
      const url = "https://jestjs.io/docs/getting-started";
       expect(urlValidation(url)).toBeTruthy();
    })

    test('Testing the urlValidation function return false for invalid url', () => {
      const url = "Not Valid URL";
       expect(urlValidation(url)).toBeFalsy();
    })
})
