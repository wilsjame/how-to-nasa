# NASA API Overview

This section contains an introduction to the NASA's Application Programming Interfaces (APIs), some background, and how to set it up with a link to the original API documentation.

## Introduction

API's provide an interface for machines to talk with each other. NASA's APIs allow developers to use NASA's data, such as imagery, for application development. 

## Background

NASA gathers a lot of data - over 15 Terabytes per day! And by a White House mandate this data is free to the public - in a format useful to you. This is where the API comes into play. 

Figuring out the best way to distribute, use, and reuse NASA's data is a problem. NASA's APIs provide a solution by lowering the barrier of entry to people outside NASA to easily manipulate and access the public information. 

A list of NASA APIs beginning with the Astronomy Picture Of The Day (APOD) can be found [here](https://api.nasa.gov/api.html#apod). Here are some of the other APIs available: 

- **[Near Earth Object Web Service (NeoWs)](https://api.nasa.gov/api.html#NeoWS):** Access to near Earth asteroid information. 
- **[Earth Polychromatic Imaging Camera (EPIC)](https://api.nasa.gov/api.html#EPIC):** Full disc imagery of the Earth. 
- **[Earth Observatory Natural Event Tracker (EONET)](https://api.nasa.gov/api.html#EONET):** Prototype web service providing continously updated natural event metadata, such as storm imagery, gathered from the Earth's surface with the option to link to thematically-related web service-enabled image sources.  
- **[NASA Image and Video Library](https://api.nasa.gov/api.html#Images):** Access to the NASA Image and Video Library site at [images.nasa.gov](https://images.nasa.gov/#/)
- **[Sounds (beta)](https://api.nasa.gov/api.html#sounds):** Access to space sounds via SoundClound with some of the hassle abstracted away.

## How To Set It Up 

Head on over to [api.NASA.gov](https://api.nasa.gov/index.html) and follow the _applying for an API key_ link to get your personal API key. The process takes ~5 minutes and NASA will email your key to you.

We will be working with these three APIs:

1. [Astronomy Picture Of The Day](https://api.nasa.gov/api.html#apod)
2. [Earth Observatory Natural Event Tracker (EONET)](https://api.nasa.gov/api.html#EONET)
3. [Sounds (beta)](https://api.nasa.gov/api.html#sounds)

For each API the following will be covered:

- **Documenation of the API call**
  * What it does
  * What gets sent to the server
  * What get received
- **Example call** 
  * What _they_ (NASA) send back to us
  * What we recieve 
- **Runnable code**

Lets get started!

# Astronomy Picture Of The Day

The APOD is a good API to start with because it's easy to work with. 

## Documenation of the API call

Documentation can be found [here](https://api.nasa.gov/api.html#apod), it is brief but this is understandable for such a simple call. 

### What it does

The APOD call returns a JSON object containing an image or video, date, explanation, and additional metadata. It's our job to make the call and manipulate the received data however we want. 

### What gets sent to the server

APOD uses a GET HTTP request method to request data from the NASA server. GET methods request data from a specified source url. The following shows the HTTP method and the request url.

```markdown
GET https://api.nasa.gov/planetary/apod
```
We can append parameters to the url to create a query string (name/value pairs) to tell the NASA server who's making the call and if we want something in return besides the defaults. The table below shows the query parameters. 

**Query Parameters**

| **Parameter** | **Type** | **Default** | **Description** |
| ------------- | -------- | ----------- | --------------- |
| date | YYYY-MM-DD | _today_ | The date of the APOD image to retrieve |
| hd | bool | False | Retrieve the URL for the high resolution image |
| api_key | string | DEMO_KEY | api.nasa.gov key for expanded usage |







### What gets received
## Example call 






# This Guide (must) Contains
- What the NASA API is
- How to set it up
- How to interact with it
- Some sample code
- Where to find additional resources

- High-level overview of API (INTRO, BACKGROUND, SETUP, LINK TO OG API DOCS, etc..
- Details of at least 2 API method/functionality
  1. documentation of API call: what it does, what gets sent to the server, what get recieved
  2. example of call: what *they* sent, and what was actually received
  3. live or runnable code (js fiddle, code block)
  



















You can use the [editor on GitHub](https://github.com/wilsjame/how-to-nasa/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/wilsjame/how-to-nasa/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
