// const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(logo);
// app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-75AC2547-F923-4961-BDBB-973353F29CD8&format=JSON', true);

request.onload = function () {

  var data = JSON.parse(this.response);
  // Begin accessing JSON data here
  console.log(data)

}

request.send();