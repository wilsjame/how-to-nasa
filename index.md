# NASA API Overview

This section contains an introduction to NASA's application programming interfaces (APIs), some background, and how to set it up.

## Introduction

APIs provide an interface for machines to talk with each other. NASA's APIs allow developers to use NASA's data, such as imagery, for application development. 

## Background

NASA gathers a lot of data - over 15 Terabytes per day! And by a White House mandate this data is free to the public - in a format useful to you. This is where the APIs come into play. 

Figuring out the best way to distribute, use, and reuse NASA's data is a problem. NASA's APIs provide a solution by lowering the barrier of entry to people outside NASA to easily manipulate and access the public information. 

A list of NASA APIs beginning with the Astronomy Picture Of The Day (APOD) can be found [here](https://api.nasa.gov/api.html#apod). Here are some of the APIs available: 

- **[Near Earth Object Web Service (NeoWs)](https://api.nasa.gov/api.html#NeoWS):** Access to near Earth asteroid information. 
- **[Earth Polychromatic Imaging Camera (EPIC)](https://api.nasa.gov/api.html#EPIC):** Full disc imagery of the Earth. 
- **[Earth Observatory Natural Event Tracker (EONET)](https://api.nasa.gov/api.html#EONET):** Prototype web service providing continously updated natural event metadata, such as storm imagery, gathered from the Earth's surface.  
- **[NASA Image and Video Library](https://api.nasa.gov/api.html#Images):** Access to the [NASA Image and Video Library](https://images.nasa.gov/#/).
- **[Sounds (beta)](https://api.nasa.gov/api.html#sounds):** Access to space sounds via SoundClound with some of the hassle abstracted away.

## How To Set It Up 

Head over to [api.NASA.gov](https://api.nasa.gov/index.html) and follow the _applying for an API key_ link to get your personal API key. The process takes ~5 minutes and NASA will email your key to you.

We will be working with these two APIs:

1. [Astronomy Picture Of The Day](https://api.nasa.gov/api.html#apod)
2. [Earth Observatory Natural Event Tracker (EONET)](https://api.nasa.gov/api.html#EONET)

The following will be covered for each API:

- **Documenation Of The API Call**
  * What it does
  * What gets sent to the server
  * What gets received
- **Example Call** 
  * JSFIddle
  * How it works

Lets get started!

# Astronomy Picture Of The Day

The APOD is a good API to start with because it's easy to work with. 

## Documenation Of The API Call

Documentation can be found [here](https://api.nasa.gov/api.html#apod), it is brief but this is understandable for such a simple call. 

### What it does

The APOD call returns a JSON object containing an image or video, date, explanation, and additional metadata. It's our job to make the call and manipulate the received data however we want. 

### What gets sent to the server

APOD uses a **GET HTTP request method** to request data from the NASA server. GET methods request data from a specified **request url**. The following shows the HTTP method and the request url.

```markdown
GET https://api.nasa.gov/planetary/apod
```
We append parameters to the url to create a **query string** (parameter/value pairs) to tell the NASA server who's making the call (api_key parameter) and if we want something in return besides the defaults. The table below shows the query parameters. 

<p align="center"><b>APOD Query Parameters</b></p>

| **Parameter** | **Type** | **Default Value** | **Description** |
| ------------- | -------- | ----------- | --------------- |
| date | YYYY-MM-DD | _today_ | The date of the APOD image to retrieve |
| hd | bool | False | Retrieve the URL for the high resolution image |
| api_key | string | DEMO_KEY | api.nasa.gov key for expanded usage |

Here is an example query. It begins with the GET request url from above followed a  `?` signifying the beginning of the query string. Follow the link to make the request!

```markdown
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
```

Here is an example request for the first ever APOD image. Append additional parameters to the querystring with with `&` and use `=` to create parameter/value pairs like before.  

```markdown
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16
```

### What gets received

The request returns information in JavaScript Object Notation (JSON). JSON is a syntax used for storing and exchanging data between a client (browser) and a server (NASA database). Here is the JSON returned from our last request:

```markdown
{
  "date": "1995-06-16",
  "explanation": "Today's Picture:    Explanation:  If the Earth could somehow be transformed to the ultra-high density of a neutron star , it might appear as it does in the above computer generated figure. Due to the very strong gravitational field, the neutron star distorts light from the background sky greatly. If you look closely, two images of the constellation Orion are visible. The gravity of this particular neutron star is so great that no part of the neutron star is blocked from view - light is pulled around by gravity even from the back of the neutron star.   We keep an  archive file.  Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert Nemiroff and Jerry Bonnell.",
  "hdurl": "https://apod.nasa.gov/apod/image/e_lens.gif",
  "media_type": "image",
  "service_version": "v1",
  "title": "Neutron Star Earth",
  "url": "https://apod.nasa.gov/apod/image/e_lens.gif"
}
```

Properties and values are in quotes `" "` and are seperated with a colon `:`. This standard notation makes accessing and manipulating received data easy to work with using JavaScript.

## Example call 

We have covered how to make a call to the server and what the server sends back to us. Now it time to access the object we recieve, parse it, and use it in our application. We will be using JavaScript and HTML to display our end product. The following is our code in action.

### JSFiddle

<iframe width="100%" height="800" src="//jsfiddle.net/wilsjame/vc2xwasa/19/embedded/result,js,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe><br>

### How it works

We begin with the variable list:

```markdown
var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "DEMO_KEY";
```
We define a new **XMLHttpRequest** and assign in to the variable **req**. An XMLHttpRequest provides client functionality for transferring data between a client and server. Think of it as a stream that connects our browser (client) the NASA databases (server). For ease of use, we define variables, **url** and **api_key** to hold the GET request url and API Key. Use your own API KEY by simply changing the **api_key** value. 

The XMLHttpRequest **open** method initializes a request. Here are its parameters:

```markdown
req.open(method, url)
```
We are using a **GET** method and have combined the **url** and **api_key** variables to create a valid url. After the request is initialized (opened) we send it to the server.


```markdown
req.open("GET", url + api_key, true);
req.send();
```

the XMLHttpRequest **addEventListener** method listens for an event type and executes a function when the event fires (is fulfilled). 

```markdown
req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})
```

The event type is **load** so when req (our XMLHttpRequest) is finished loading the function exececutes. Inside the function we check two things before manipulating the received data.

The **status** method returns a numerical status code of the response of the XMLHttpRequest. 200 denotes a succesful request.

```markdown
req.status == 200
```
The **readyState** method returns the state an XMLHttpRequest client is in. 4 denotes the operation is complete. 

```markdown
req.readyState == 4
```

When both these properties are true it means the request was a success and we succesfully received the data from the server. The data recieved from the server is raw text in JSON format. We parse it into the variable **response** with the following code. 

```markdown
var response = JSON.parse(req.responseText);
```

Now we have neat variable that holds all the data received in JSON format. We access the **Document Object Model (DOM)** and change HTML elements with final lines of code:

```markdown
document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
```

<br>

# Earth Polychromatic Imaging Camera (EPIC)

## Documentation of the API call

Official documentation can be found on the [EPIC API Documentation Page](https://epic.gsfc.nasa.gov/about/api), it is more in depth than the APOD documentation. 

### What it does

The EPIC API gives access to the pictures taken by [EPIC (Earth Polychromatic Imaging Camera)](https://epic.gsfc.nasa.gov/epic) onboard NOAA's (National Oceanic and Atmospheric Administration) DSCOVR (Deep Space Climate Observatory). Along with imagery, the API provides image metadata in JSON format. 

### What gets sent to the server

EPIC uses a **GET HTTP request method** to request data from the NASA server. GET methods request data from a specified request url. The following shows the HTTP method and the request url.

```markdown
GET https://epic.gsfc.nasa.gov/EPIC/api
```
Create a path with slashes `/` to append parameters to the URL. This is different from the APOD which uses the `paramter=value` query-string format.

<p align="center"><b>EPIC Query Parameters</b></p>

| **Parameter** | **Type** | **Default Value** | **Description** |
| ------------- | -------- | ----------- | --------------- |
| natural | string | Most Recent Natural Color  | Metadata on the most recent date of natural color imagery. |
| natural/date | YYYY-MM-DD | Most Recent Available | Metadata for natural color imagery available for a given date. |
| natural/all | string | Dates for Natural Color | A listing of all dates with available natural color imagery. |
| natural/available | string | Dates for Natural Color | Alternate listing of all dates with available natural color imagery. |
| enhanced |string | Most Recent Enhanced Color | Metadata on the most recent date of enhanced color imagery. |
| enhanced/date | YYYY-MM-DD | Most Recent Available | Metadata for enhanced color imagery for a given date. |
| enhanced/all | string	Dates for Enhanced Imagery | A listing of all dates with available enhanced color imagery. |
| enhanced/available | string | Dates for Enhanced Imagery | Alternate listing of all dates with available enhanced color imagery. |
| api_key | string | DEMO_KEY | api.nasa.gov key for expanded usage |

Here is an example URL requesting the most recent natural color image. It begins with the GET request url from above followed by a `/` signifying the beginning of the path. When the path ends we append our personal **api_key**. Follow the link to make the request!

```markdown
https://api.nasa.gov/EPIC/api/natural?api_key=DEMO_KEY
```
Here is an example request for the enhanced image taken on October 31st, 2015. Append additional parameters to the URL path with `/` and remember to end the URL with your API key.

```markdown
https://api.nasa.gov/EPIC/api/enhanced/date/2015-10-31?api_key=DEMO_KEY 
```

### What gets received

The request returns an **array of JSON objects** enclosed in the outermost most brackets`[ ]`. Each JSON ojbect contains information for a single image. The retrievable metadata includes the image name, date, caption, and positional data. Here is an exceprt of the beginning of the JSON object information returned from our last request:

```markdown
[{
	"image":"epic_RGB_20151031003633_01",
	"caption":"This image was taken by the NASA EPIC camera onboard the NOAA DSCOVR spacecraft",
	"centroid_coordinates":{"lat":-5.07641,"lon":159.547159},
	"dscovr_j2000_position":{"x":-1283061.5,"y":-669893.4375,"z":-130240.867188},
	"lunar_j2000_position":...
}]
```

The actual response is much longer and includes numerous positional data sets such as lunar and sun positions in space. For our application we want access to the image file which is **not** returned. Use the **image name** returned to access the actual image source. Here is the syntax for creating the **image source URL**. Variables are denoted with a `$` and are in all caps.

```markdown
https://epic.gsfc.nasa.gov/archive/$COLLECTION/$YEAR/$MONTH/$DAY/$IMAGE_TYPE/$IMAGE_NAME.$IMAGE_TYPE
```

`$COLLECTION` can be `natural` or `enhanced`.

`$YEAR/$MONTH/$DAY` is in the format YYYY/MM/DD.

`$IMAGE_TYPE` can be `png`, `jpg`, or `thumbs`.

`$IMAGE_NAME`  is the **image name** returned in JSON object. 


Here is the complete URL for a full-sze original PNG image from our last request.

```markdown
https://epic.gsfc.nasa.gov/archive/enhanced/2015/10/31/png/epic_RGB_20151031003633_01.png
```

## Example call

On July 5th, 2016 the moon passed between DSCOVR and the Earth. EPIC snapped images over a period of about 4 hours. The entire set consists of 15 pictures where one can see the far side of the moon, which is never seen from Earth. The following example uses the EPIC API to access 3 of these pictures to create an automatic slideshow showing the lunar Transit!

### JSFidldle

<iframe width="100%" height="900" src="//jsfiddle.net/wilsjame/pwanobnz/19/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe><br>

### How it works

Begin by getting the pictures from the NASA server using the EPIC API. The process is similar to the APOD example above except this time we define two new variables **img_url** and **img_type** to be used to complete the **image source url**.

```markdown
var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/EPIC/api/natural/date/2016-07-05?api_key=";
var api_key = "5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";
var img_url =  "https://epic.gsfc.nasa.gov/archive/natural/2016/07/05/png/";
var img_type = ".png";

req.open("GET", url + api_key);
req.send();
```

Let's take a closer look at the request url.

```markdown
var url = "https://api.nasa.gov/EPIC/api/natural/date/2016-07-05?api_key=";
```

We use the **natural/date** paramter specifying the date **2016-07-05**. In other words, we are requesting all the images and their metadata from July 5th, 2016.

Then we receive and parse our request into JSON just like we did with APOD API. 

```markdown
req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
```

From the __What gets received__ section, we receive an **array of JSON objects**. To access the **image names** in each object we use bracket notation.

```markdown
    document.getElementById("img1").src = img_url + response[4].image + img_type;
    document.getElementById("img2").src = img_url + response[7].image + img_type;
    document.getElementById("img3").src = img_url + response[10].image + img_type;
```

With the **three image source URLs** taken care of, we can implement the slideshow. 

```markdown
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
```

The function `showSlides()` cycles through the images in the _for-loop_ and hides them by setting the `style.display` property  to `"none"`.

```markdown
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
```

Then the `slideIndex` is incremented and checked to see if it needs to reset back to the first image

```markdown
  slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
```

The current image is rendered as a block element by setting the `style.display` property to `"block"`. 

```markdown
  slides[slideIndex-1].style.display = "block"; 
```

Finally, we call the `ShowSlides()` function recursively with the `setTimeout()` function which takes a timing parameter set to 2 seconds for each image in this case. The slideshow cycles indefinitely because there is no base case to halt the recursive call. 

# Where To Find Additional Resources

Here is a list of the primary links used in the making of this guide. They include additional information on the various topics covered.

- **[NASA API Portal](https://api.nasa.gov/)**: Main page for the NASA API
- **[EPIC Website](https://epic.gsfc.nasa.gov/)**: Official DSCOVR: EPIC website 
- **[w3schools How To - Slideshow](https://www.w3schools.com/howto/howto_js_slideshow.asp)**: w3chools guide on how to create slideshow with CSS and JavaScript.  
