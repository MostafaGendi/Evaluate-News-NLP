
const fetch = require('node-fetch');


function handleSubmit(event){
  event.preventDefault()
  const userURL = document.getElementById('link').value
  //
if (Client.urlValidation(userURL)) {
  postData('/url', {url: userURL})
  .then(()=>{updateUI()})
}



const postData = async ( url = '', data = {})=>{
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    }
    ,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  try {
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
}
// Update user inetrface
  const updateUI = async ()=>{
    const request = await fetch('/allData')
    try {
      const allData = await request.json();

      document.getElementById('score_tag').innerHTML = `Score Tag: ${allData.score_tag}`;
      document.getElementById('agreement').innerHTML = `Agreement: ${allData.agreement}`;
      document.getElementById('subjectivity').innerHTML = `Subjectivity: ${allData.subjectivity}`;
      document.getElementById('confidence').innerHTML = `Confidence: ${allData.confidence}`;
      document.getElementById('irony').innerHTML = `Irony: ${allData.irony}`;

    } catch (error) {
      console.log("error", error)
    }
  }
}

export {
  handleSubmit,
  postData,
  updateUI
};
