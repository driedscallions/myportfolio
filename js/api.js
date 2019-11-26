

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(logo);
// app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-75AC2547-F923-4961-BDBB-973353F29CD8&format=JSON', true);
request.responseType = 'json';
request.send();


  // const weather = document.getElementById('weather');
  const weatherPlace = document.getElementById('location');
  

request.onload = function () {

  var weatherContent = request.response;
  // Begin accessing JSON data here
  console.log(weatherContent)

  
  var weatherPlace = records.location[0].locationName;
  for(i = 0; i < location.length; i++) { // 用迴圈跑各個縣市


  }


}

