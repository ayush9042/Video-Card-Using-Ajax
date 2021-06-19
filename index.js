// Targeted the element inside html page which is container of all videos
var videoGrid = document.getElementById('video-container');

// var now will get the data from backend using Ajax

var http = new XMLHttpRequest();
http.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", true);
http.onreadystatechange = function () {
  if (this.readyState === 4) {
    var res = JSON.parse(this.response);
    console.log(res);
    for (i = 0; i < res.length; i++) {
      var oneVideoOneDiv = document.createElement("div");
      var imgContainer = document.createElement("div");
      var imgElem = document.createElement("img");
      imgElem.src = res[i].thumbnail;

      oneVideoOneDiv.className = "video-div";
      imgElem.className = "img";
      imgContainer.className = "img-container";
      imgContainer.appendChild(imgElem);
      oneVideoOneDiv.appendChild(imgContainer);
      videoGrid.appendChild(oneVideoOneDiv);

      // Adding Title to thumbnails

      var title = document.createElement("h3");
      title.innerHTML = res[i].title;
      title.className = "title";
      oneVideoOneDiv.appendChild(title);
    }

  }
}
http.send();





