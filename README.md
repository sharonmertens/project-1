# project-1
Project 1 for GA

#### Description
Learn more about your favorite Star Wars Characters!

#### Prerequisites

- html
- CSS
- jQuery
- JavaScript

## Getting Started
- app.js
- index.html
- style.css

1. link them all up
2. add jQuery

(insert image - link up docs)

## Star Wars Characters

#### Set up html
- Create an h1 with: 'STAR WARS: A Character Story'
- Create a div class called characters
- Create divs for each characters like this:

(insert image div class luke)


#### app.js
- Start with calling jquery and make sure all code goes inside it
- We will be creating click events for each of our characters that we created in the HTML page
- Create a click event for our first character, luke:
  - $('input[id="luke"]').on('click', (event) => {
- Call AJAX and use the url: "https://swapi.co/api/people/1"
- Create an arrow function for data and here we will compile our info for each character:
  const $div = $('<div>')
  $('.luke').append($div);

  const $luke = $('<h2>').text(data.name);
  $div.append($luke);

  const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
  $div.append($birthYear);

  const $gender = $('<li>').text('Gender: ' + data.gender);
  $div.append($gender);

  const $height = $('<li>').text('Height: ' + data.height);
  $div.append($height);

  const $mass = $('<li>').text('Mass: ' + data.mass);
  $div.append($mass);

  const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
  $div.append($eyeColor);

  const $hairColor = $('<li>').text('Hair Color: ' + data.hair_color);
  $div.append($hairColor);

  const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
  $div.append($skinColor);

## Star Wars Image CAROUSEL

#### Set up html
- Create a div class "container"
- Add h1: STAR WARS: Memorable Moments
- Create a div called "carousel-container"
- Inside that, add a div for:
  - previous button
  - images
  - next button
- Add the images using img src tag inside the image div you just created

#### Move to your css file
- hide all the images in the carousel by adding display: none to carousel-images img
- Show just the first image in the  carousel by adding: .carousel-images img:first-of-type

#### Move to your app.js file
- Add event listener onto our next button
- Keep track of what image is currently showing by setting a global index counter variable: let currentImgIndex = 0;
- Increment the currentImgIndex so that we cycle to the next image: currentImgIndex++
- Define another global variable named highestIndex so we can count the highest index of images we have in our carousel by using: $('.carousel-images').children().length - 1;
- We want the current image to hide so add: $('.carousel-images').children().eq(currentImgIndex).hide;
- Inside our event handler for our next class, let's write an if/else statement so that if we go above the amount of images we have, it'll reset the currentImgIndex back to the first one
- And then we want the next image to show so add $('.carousel-images').children().eq(currentImgIndex).show();
- Follow same instructions for 'previous' button, except we want to decrement not increment.
