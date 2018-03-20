'use strict';

//catalog/array of available items
Item.catalog = [];
Item.cycles = 0;
// Item Constructor to generate items and put them into the catalog

function Item(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.views = 0;
  this.votes = 0;
  Item.catalog.push(this);
}



// //number of clicks
// Item.prototype.votes() {
//   //+1 on click, push into object
// }

// new instances of Items
new Item('img/bag.jpg', 'robot bag');
new Item('img/banana.jpg', 'Banana');
new Item('img/bathroom.jpg', 'Bathroom');
new Item('img/boots.jpg', 'boots');
new Item('img/breakfast.jpg', 'breakfast');
new Item('img/bubblegum.jpg', 'bubblegum');
new Item('img/chair.jpg', 'chair');
new Item('img/cthulhu.jpg', 'cthulhu');
new Item('img/dog-duck.jpg', 'dog duck');
new Item('img/dragon.jpg', 'dragon');
new Item('img/pen.jpg', 'pen');
new Item('img/pet-sweep.jpg', 'pet sweep');
new Item('img/scissors.jpg', 'scissors');
new Item('img/shark.jpg', 'shark');
new Item('img/sweep.png', 'sweep');
new Item('img/tauntaun.jpg', 'tauntaun');
new Item('img/unicorn.jpg', 'unicorn');
new Item('img/usb.gif', 'usb');
new Item('img/water-can.jpg', 'watering can');
new Item('img/wine-glass.jpg', 'wine glass');


//access the element from the DOM

var imgElement = document.getElementById('catalogOption');
var imgElement2 = document.getElementById('catalogOption2');
var imgElement3 = document.getElementById('catalogOption3');
// event listener to check for images on click
imgElement.addEventListener('click',handleClick);
imgElement2.addEventListener('click',handleClick);
imgElement3.addEventListener('click',handleClick);

var randomIndex = 0;
var randomIndex2 = 0;
var randomIndex3 = 0;
var previousValues = [];

// slice
function handleClick(event) {

  var currentTarget = event.target.currentSrc.slice(46);

  for ( var i = 0; i < Item.catalog.length; i++) {
    if (Item.catalog[i].filepath === currentTarget) {
      Item.catalog[i].votes++;
      // console.log(Item.catalog[i].votes);
    }
  } 
  Item.cycles++;
  if (Item.cycles < 5) {
    randomItem();
  } else {

    }
  }

}

function displayResults() {

      

// //callback function when an image is clicked
function randomItem() {

  randomIndex = Math.floor(Math.random()*Item.catalog.length);
  randomIndex2 = Math.floor(Math.random()*Item.catalog.length);
  randomIndex3 = Math.floor(Math.random()*Item.catalog.length);

  //checking previous numbers & each other
  while (randomIndex === randomIndex2
    || randomIndex3 === randomIndex
    || randomIndex3 === randomIndex2
    || previousValues.includes(randomIndex)
    || previousValues.includes(randomIndex2)
    || previousValues.includes(randomIndex3)) {

    randomIndex = Math.floor(Math.random()*Item.catalog.length);
    randomIndex2 = Math.floor(Math.random()*Item.catalog.length);
    randomIndex3 = Math.floor(Math.random()*Item.catalog.length);
  }
  previousValues.splice(0, 3, randomIndex, randomIndex2, randomIndex3);

  imgElement.src = Item.catalog[randomIndex].filepath;
  imgElement.alt = Item.catalog[randomIndex].name;
  Item.catalog[randomIndex].views++;

  imgElement2.src = Item.catalog[randomIndex2].filepath;
  imgElement2.alt = Item.catalog[randomIndex2].name;
  Item.catalog[randomIndex2].views++;


  imgElement3.src = Item.catalog[randomIndex3].filepath;
  imgElement3.alt = Item.catalog[randomIndex3].name;
  Item.catalog[randomIndex3].views++;


  console.log(Item.catalog[randomIndex].views);
}

randomItem();

//when clicked, items will be replaced with 3 random images, none of which were just viewed

// for (i=0, i< 25, i++)
//   run randomItem,

//   if Item.catalog[i] =/= previous item,
//   run rndItem,

//   if Item.catalog[i] =/= previous items,
//   run rnd,

//   if items1, 2, 3, are found, display



//   pick 3 numbers, pull from array
//   on click, rerun through array - previously selected numbers

//after 25 iterations, display all Item.votes and Item.views



//Loop displays 3 images at a time, and only displays 25 total sets of images

//after 25 iterations, display each image's total number of clicks and total number of views

// render set on page load