'use strict';

//catalog/array of available items
Item.catalog = [];

// Item Constructor to generate items and put them into the catalog

function Item(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  Item.Catalog.push(this);
}


//number of views
Item.prototype.views() {
  //+1 when rendered, push into object
}

//number of clicks
Item.prototype.votes() {
  //+1 on click, push into object
}


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
new Item('img/sweep.jpg', 'sweep'); 
new Item('img/tauntaun.jpg', 'tauntaun'); 
new Item('img/unicorn.jpg', 'unicorn'); 
new Item('img/usb.jpg', 'usb'); 
new Item('img/water-can.jpg', 'watering can'); 
new Item('img/wine-glass.jpg', 'wine glass'); 

//access the element from the DOM

var imgElement = document.getElementById('catalogOption');
// event listener to check for images on click
imgElement.addEventListener('click',randomItem);


//callback function when an image is clicked
function randomItem() {
  var randomIndex = Math.floor(Math.random()*Item.catalog.length);

  imgElement.src = Item.catalog[randomIndex].filepath;
  imgElement.alt = Item.catalog[randomIndex].name;
}

//when clicked, items will be replaced with 3 random images, none of which were just viewed


// each image stores how many times it was viewed, and how many times it was clicked


//Loop displays 3 images at a time, and only displays 25 total sets of images

//after 25 iterations, display each image's total number of clicks and total number of views

// render set on page load