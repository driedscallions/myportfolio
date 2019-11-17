


var requestURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-75AC2547-F923-4961-BDBB-973353F29CD8&format=JSON' //api網址
var request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json'; //要資料
request.send();

request.onload = function() {

  var weather = request.response;  // 取得資料並顯示
  showWeather(weather);
};

function showWeather(jsonobj) {  // 要執行的動作

  var weatherPlace = jsonobj['records.location[0].locationName'];
  for(i = 0; i < location.length; i++) {   // 用迴圈跑各個縣市

    document.getElementById("location").innerHTML = weatherPlace[i].county;

    // var myH2 = document.createElement('h2');   // 新增一個html標籤  或是用getElementById 取代 
		// myH2.textContent = weatherPlace[i].county;  //在<h2>這裡新增內容</h2>  你取到的json資料 
		// myArticle.appendChild(myH2);
  
  }


  var weatherStatus = jsonobj['records.location[0].weatherElement[0].time[0].parameterName'];
  for(i = 0; i < location.length; i++) {   // 用迴圈跑各個縣市

    document.getElementById("status").innerHTML = weatherStatus[i].county;

}



}



