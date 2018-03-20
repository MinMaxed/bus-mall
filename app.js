'use strict';

//catalog/array of available items
Item.catalog = [];

// var previousvalue1 = 0;
// var previousvalue2 = 0;
// var previousvalue3 = 0;




// Item Constructor to generate items and put them into the catalog

function Item(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  Item.catalog.push(this);
  // this.previouslyShown === false;
}


// //number of views
// Item.prototype.views() {
//   //+1 when rendered, push into object
// }

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
imgElement.addEventListener('click',randomItem);
imgElement2.addEventListener('click',randomItem);
imgElement3.addEventListener('click',randomItem);

var randomIndex = 0;
var randomIndex2 = 0;
var randomIndex3 = 0;
var previousValues = [];

// //callback function when an image is clicked
function randomItem() {
  randomIndex = Math.floor(Math.random()*Item.catalog.length);
  randomIndex2 = Math.floor(Math.random()*Item.catalog.length);
  randomIndex3 = Math.floor(Math.random()*Item.catalog.length);
  
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

  imgElement2.src = Item.catalog[randomIndex2].filepath;
  imgElement2.alt = Item.catalog[randomIndex2].name;

  imgElement3.src = Item.catalog[randomIndex3].filepath;
  imgElement3.alt = Item.catalog[randomIndex3].name;
}






  // while (newIndexes.length < 3) {
  //   var newIndex = randomIndex;
  //   var isUnique = true;
  
  
  //   for (var i = 0; i < previousValues.length; i++) {
  
  //     if (previousValues[i] === newIndex) {
  //       isUnique = false;
  //     }
  //   }
  
  //   for ( i < newIndexes.length) {
  //     if (newIndexes[i] === newIndex)
  
  //       if(isUnique) {
  //         newIndexes.push(newIndex);
  //       }
  //   }
  // }
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