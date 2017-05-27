/* get the pictures */
var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/EPIC/api/natural/date/2016-07-05?api_key=";
var api_key = "5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";
var img_url =  "https://epic.gsfc.nasa.gov/archive/natural/2016/07/05/png/";
var img_type = ".png";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    console.log(response[0].image);
    document.getElementById("img1").src = img_url + response[4].image + img_type;
    document.getElementById("img2").src = img_url + response[7].image + img_type;
    document.getElementById("img3").src = img_url + response[10].image + img_type;
  }
})

/* slideshow module */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
