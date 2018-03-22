'use strict';

//catalog/array of available items
Item.catalog = [];
var previousValues = [];
// var itemNames = [];
var itemVotes = [];
var maxVotes = 25;

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

// var results = document.getElementById('results');
// Item Constructor to generate items and put them into the catalog

function Item(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.views = 0;
  this.votes = 0;
  Item.catalog.push(this);
}
// itemNames.push(this.name);

//when to store
// immediately on page load
//Pro: they are there for next time
// Con: Zeros

// At the very end of page load
//Pro: stores all the values of clicks and views
//cons: partial data not captured

// after a pic load/click
// pro: consistent and acurate data
// con: potential scale issue (huge data)
// con: Chatter (lots of actions happening)



// new instances of Items
function setupPictures() {

  var picAsString = localStorage.getItem('items');
  var usablePics = JSON.parse(picAsString);
  if (usablePics && usablePics.length) {
    Item.catalog = usablePics;
    console.log('loaded from LS');
    return;
  }

  console.log('doing it the hardway');

  new Item('img/bag.jpg', 'Robot Bag');
  new Item('img/banana.jpg', 'Banana');
  new Item('img/bathroom.jpg', 'Bathroom');
  new Item('img/boots.jpg', 'Boots');
  new Item('img/breakfast.jpg', 'Breakfast');
  new Item('img/bubblegum.jpg', 'Bubblegum');
  new Item('img/chair.jpg', 'Chair');
  new Item('img/cthulhu.jpg', 'Cthulhu');
  new Item('img/dog-duck.jpg', 'Dog Duck');
  new Item('img/dragon.jpg', 'Dragon');
  new Item('img/pen.jpg', 'Pen');
  new Item('img/pet-sweep.jpg', 'Pet Sweep');
  new Item('img/scissors.jpg', 'Scissors');
  new Item('img/shark.jpg', 'shark');
  new Item('img/sweep.png', 'Sweep');
  new Item('img/tauntaun.jpg', 'Tauntaun');
  new Item('img/unicorn.jpg', 'Unicorn');
  new Item('img/usb.gif', 'Usb');
  new Item('img/water-can.jpg', 'Watering Can');
  new Item('img/wine-glass.jpg', 'Wine Glass');
}

// grander callback that'll grab clicks as well as run the random image producer
function handleClick(event) {

  Item.cycles++;

  // var currentTarget = event.target.currentSrc.slice(46);
  for (var i in Item.catalog) {
    if (event.target.alt === Item.catalog[i].name) {
      Item.catalog[i].votes++;
    }
  }

  if (Item.cycles < maxVotes) {
    randomItem();
  } else if (Item.cycles === maxVotes) {


    sectionElement.removeEventListener('click', handleClick);

    complete();
    // displayResults();
    updateVotes();

    renderChart();
  }

  // function displayResults() {
  //   for (var i = 0; i < Item.catalog.length; i++) {
  //     var liElement = document.createElement('li');
  //     liElement.textContent = (Item.catalog[i].name + ' has ' + Item.catalog[i].votes + ' votes, out of ' + Item.catalog[i].views + ' total views.');

  //     results.appendChild(liElement);
  //   }
  // }
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
    itemVotes.push(Item.catalog[i].votes);
  }
}

//connect callback function to DOM
sectionElement.addEventListener('click', handleClick);


function complete() {
  //save to local storage
  var saveResults = JSON.stringify(Item.catalog);
  localStorage.setItem('items', saveResults);
}

setupPictures();

randomItem();



// CHART STUFF
function renderChart() {
  //access canvas element from the DOM

  var labels = [];
  var voteData = [];
  var colors = [];

  //my RNG for colors array psuedocode from before 
  // for (var i = 0, i < Item.catalog.length, i++)
  //     set backgroundColor = arrayOfColors[j],
  // if ( j > arrayofColors.lenght)
  // reset arrayOfColors;


  // using John's RNG for colors
  for (var i in Item.catalog) {
    labels.push(Item.catalog[i].name);
    var pct = Math.round(Item.catalog[i].clicks / Item.catalog[i].views * 100);
    voteData.push(pct);
    // Google search for "JS Random HEX Color" ... magic!
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }

  console.log(itemVotes);

  var context = document.getElementById('catalog-chart').getContext('2d');
  var chart = new Chart(context, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        // barPercentage: 1,
        label: 'Votes Per Item',
        data: itemVotes,
        backgroundColor: colors,
      }]

    },
    options: {
      legend: {
        labels: {
          fontColor: "white",
          fontSize: 18,
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'white',
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "white",
            fontSize: 14,
            stepSize: 1,
            beginAtZero: true
          }
        }]
      }
    }
  });
}