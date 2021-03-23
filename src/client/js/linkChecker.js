
const  validUrl = require('valid-url');

function urlValidation(url){

  if (validUrl.isUri(url)){
    return true
  }else{
    alert('Please Enter a Valid Link')
  }
}

export {urlValidation}
