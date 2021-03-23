import {handleSubmit} from '../src/client/js/formHandler'



test('Simple test', () => {
   expect(postData('/url', {url: "URL"})).toBeTruthy();
  });
