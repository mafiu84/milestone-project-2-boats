# Merseyside Boating Guide

Stream Two Project: Interactive Frontend Development - Code Institute

Interactive website showing locations and short description of best places of interests for fans of boats and everything what's related to them in Merseyside, 
North West of England with possibility to book a bus with guide to any of them via contact form. Website is directed to private people.

## DEMO

Live demo you will found [here](https://mafiu84.github.io/milestone-project-2-boats/)

## UX

### User stories

* *As a person who is new to boating I want to read about basics.*
* *As a person new to boating I want to see price ranges for new boats.*
* *As a person who is new to boating I want to go to talk with boat sellers and see building process.*
* *As a person who is new to boating I want to check mooring possibilities and costs.*
* *As a person who is interested in history I want to read about and see old docks.*
* *As a person who is interested in going for a family day out I would like to go on ferry trip.*
* *As a person who already own a boat and want to swap it on new I want to read about boat builders and see their offer.*
* *As a person who already have a boat I want to join club to meet other boaters.*

### Strategy

My goal was to build mobile friendly, responsive and interactive website with all the information easily accessible 
just scrolling up or down and with links whitin website.

### Scope

* For people who are interested in getting to know more about boating I wanted to provide good starting information to read everything about living abroad.
* For people who want to see how much different range of new boats cost I've provided online configurator/price checker.
* For people who want to talk with boat builders I wanted to provide possibility to travel with person who will oranise bus travel and meeting with representative of boat building company.
* For people who want to see marina and talk about mooring costs I wanted to provide possibility to travel with person who will organise bus travel and meeting with representative.
* For people who are looking for family day out I wanted to provide possibility to travel with guide to show and tell about history of old dock.
* For people who are looking for family day out I wanted to provide possibility to travel and organise trip with ferry on Mersey river.
* For people who have a boat and are looking for boating club I wanted to provide information about one of the oldest boating club and possibility to bus travel to meet other boaters.

### Structure

In contact form I wanted to provide possibility to send email by emailJS. Footer stays collapsed regardless to screen size for easy acces. On map there are marked places with choosen points.


### Skeleton

1. [Balsamiq Wireframes](https://github.com/mafiu84/milestone-project-2-boats/blob/master/assets/wireframes%20for%20milestone%20project%202.bmpr)
2. [PDF Wireframes](https://github.com/mafiu84/milestone-project-2-boats/blob/master/assets/wireframes%20for%20milestone%20project%202.pdf)

### Surface

Images compressed in [Compress JPEG online compresser](https://compressjpeg.com/)for better performance.

## TECHNOLOGIES

HTML - Hypertext Markup Language - used for building basic structure of website, allows to view it on modern web brosers [official description](https://whatwg.org/)

CSS - Cascading Style Sheets - adding styles to website like fonts, colours, layout etc. [official description](https://www.w3.org/Style/CSS/)

JS - Java Script - I've used Java Script to implement Google maps API and EmailJS API. [JavaScript wikipedia article](https://en.wikipedia.org/wiki/JavaScript)

Bootstrap 4.4.1 - library that I've used to build responsive grid layout and as base for some smaller elements available [here](https://getbootstrap.com/)

Additional font from Google Fonts library (Lato) available [here](https://fonts.google.com/)

## FEATURES

Footer is sticky and it scrolls with website. 

### Features left to implement

In future I would like to add extended booking option with calendar showing which dates are available.

## TESTING


HTML tested in [NU HTML Checker](https://validator.w3.org/nu/)


CSS tested in [CSS LINT](http://csslint.net) with warnings:

* warning	12	5	Beware of broken box size	Using height with padding can sometimes make elements larger than you expect.
    padding: 1em;
* warning	51	1	Disallow IDs in selectors	Don't use IDs in selectors.
#price {
* warning	81	1	Headings should only be defined once	Heading (h3) has already been defined.
h3 {
* warning	89	3	Headings should only be defined once	Heading (h2) has already been defined.
  h2 {
* warning	133	1	Disallow IDs in selectors	Don't use IDs in selectors.
#LiverpoolMarina:hover {
* warning	137	1	Disallow IDs in selectors	Don't use IDs in selectors.
#MerseyMotorBoatClub:hover {
* warning	141	1	Disallow IDs in selectors	Don't use IDs in selectors.
#StanleyDock:hover {
* warning	145	1	Disallow IDs in selectors	Don't use IDs in selectors.
#CollingwoodBoatBuilders:hover {
* warning	149	1	Disallow IDs in selectors	Don't use IDs in selectors.
#MerseyFerries:hover {
* warning	156	1	Disallow IDs in selectors	Don't use IDs in selectors.
#LiverpoolMarina {
* warning	160	1	Disallow IDs in selectors	Don't use IDs in selectors.
#MerseyMotorBoatClub {
* warning	164	1	Disallow IDs in selectors	Don't use IDs in selectors.
#StanleyDock {
* warning	168	1	Disallow IDs in selectors	Don't use IDs in selectors.
#CollingwoodBoatBuilders {
* warning	172	1	Disallow IDs in selectors	Don't use IDs in selectors.
#MerseyFerries {
* warning	216	5	Require use of known properties	Expected (static | relative | absolute | fixed) but found 'sticky'.
    position: sticky;
* warning	234	1	Disallow IDs in selectors	Don't use IDs in selectors.
#map {
* warning	(rollup)	(rollup)	Disallow too many font sizes	Too many font-size declarations (11), abstraction needed.	All
* warning	(rollup)	(rollup)	Headings should only be defined once	You have 2 h2s, 2 h3s defined in this stylesheet.	All


CSS tested also in [jigsaw validator](https://jigsaw.w3.org/css-validator/validator) without any errors or warnings


JS tested in [jshint](https://jshint.com/)


Tested for performance, accessibility, best practices and SEO for mobile and desktop machines in chrome dev tools-Lighthouse.\


Also I've tested website in chrome devtools for responsiveness and on multiple browsers and mobile devices.\


## DEPLOYMENT

This site is hosted using GitHub pages.
The live site updates automatically each time there is a new push to the repository.

First you need to created github account. Project is deployed from master branch.

Project is hosted at:

https://github.com/mafiu84/milestone-project-2-boats

You can clone the code to run it locally on your machine from my github:

https://mafiu84.github.io/milestone-project-2-boats/

To clone it simply type in terminal `git clone https://github.com/mafiu84/milestone-project-2-boats`

## CREDITS

### Content

For content I've used mostly descriptions from websites that are linked as attractions. Only About section is written by me.

### Media

All photos are from stock libraries and from linked websites.

### Acknowledgements

Linked pages are:

* [Liverpool Marina](https://www.liverpoolmarina.com/)
* [Mersey Motor Boat Club](http://www.mmbc.co.uk/)
* [Stanley Dock](https://stanleydock.com/)
* [Collingwood Boat Builders](https://www.collingwoodboatbuilders.co.uk/)
* [Mersey Ferries](https://www.merseyferries.co.uk/)
* [GitHub Pages](https://pages.github.com)
* [Compress JPEG](https://compressjpeg.com/)
