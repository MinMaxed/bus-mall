'use strict';

//catalog/array of available items
Item.catalog = [];

var previousValues = [];

var itemNames = [];

var itemVotes = [];

Item.cycles = 0;

//access the element from the DOM

var imgElement = document.getElementById('catalogOption');
var imgElement2 = document.getElementById('catalogOption2');
var imgElement3 = document.getElementById('catalogOption3');

var sectionElement = document.getElementById('imagesDisplayed');

// event listener to check for images on click
// imgElement.addEventListener('click',handleClick);
// imgElement2.addEventListener('click',handleClick);
// imgElement3.addEventListener('click',handleClick);

var results = document.getElementById('results');
// Item Constructor to generate items and put them into the catalog

function Item(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.views = 0;
  this.votes = 0;
  Item.catalog.push(this);
  itemNames.push(this.name);
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
new Item('img/sweep.png', 'sweep');
new Item('img/tauntaun.jpg', 'tauntaun');
new Item('img/unicorn.jpg', 'unicorn');
new Item('img/usb.gif', 'usb');
new Item('img/water-can.jpg', 'watering can');
new Item('img/wine-glass.jpg', 'wine glass');


// grander callback that'll grab clicks as well as run the random image producer
function handleClick(event) {

  Item.cycles++;

  // var currentTarget = event.target.currentSrc.slice(46);
  for (var i in Item.catalog) {
    if (event.target.alt === Item.catalog[i].name) {
      Item.catalog[i].votes++;
    }
  }

  if (Item.cycles < 25) {
    randomItem();
  } else if (Item.cycles === 25) {
    sectionElement.removeEventListener('click', handleClick);

    displayResults();

    // console.log(itemVotes[i]);
    updateVotes();

    renderChart();
  }

  function displayResults() {
    for (var i = 0; i < Item.catalog.length; i++) {
      var liElement = document.createElement('li');

      console.log(Item.catalog[i]);

      liElement.textContent = (Item.catalog[i].name + ' has ' + Item.catalog[i].votes + ' votes, out of ' + Item.catalog[i].views + ' total views.');

      results.appendChild(liElement);
    }

  }
}

// //callback function when an image is clicked
function randomItem() {

  var randomIndex = Math.floor(Math.random() * Item.catalog.length);
  var randomIndex2 = Math.floor(Math.random() * Item.catalog.length);
  var randomIndex3 = Math.floor(Math.random() * Item.catalog.length);

  //checking previous numbers & each other
  while (randomIndex === randomIndex2
    || randomIndex3 === randomIndex
    || randomIndex3 === randomIndex2
    || previousValues.includes(randomIndex)
    || previousValues.includes(randomIndex2)
    || previousValues.includes(randomIndex3)) {

    randomIndex = Math.floor(Math.random() * Item.catalog.length);
    randomIndex2 = Math.floor(Math.random() * Item.catalog.length);
    randomIndex3 = Math.floor(Math.random() * Item.catalog.length);
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

}

//push votes into the objects
function updateVotes() {
  for (var i in Item.catalog) {
    itemVotes[i] = Item.catalog[i].votes;
  }
}

//connect callback function to DOM
sectionElement.addEventListener('click', handleClick);


randomItem();

// CHART STUFF

function renderChart() {
  //access canvas element from the DOM
  var context = document.getElementById('catalog-chart').getContext('2d');

  var arrayOfColors = ['#800000', '#c000c0', '#f0d000', '#72ba3a', '#0056b3', '#800000', '#c000c0', '#f0d000', '#72ba3a', '#0056b3', '#800000', '#c000c0', '#f0d000', '#72ba3a', '#0056b3', '#800000', '#c000c0', '#f0d000', '#72ba3a', '#0056b3',];

  // for (var i = 0, i < catalog.length, i++)
  //     set backgroundColor = arrayOfColors[j],
  // if ( j > arrayofColors.lenght)
  // reset arrayOfColors;

  new Chart(context, {
    type: 'bar',
    data: {
      labels: itemNames,
      datasets: [{
        label: 'Votes Per Item',
        data: itemVotes,
        backgroundColor: arrayOfColors,
      }]

    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}