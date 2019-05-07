'use strict';




///////////////////////////////**** */First and Pike ***////////////////////////

//source mdn math.random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }


//store hours firstAndPike
var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
'6pm','7pm','8pm'];

//var to call elementById
var pikeyFirst = document.getElementById('pikeyFirst');

// pike obj literal
var firstAndPike = {
    minCust: 23,
    maxCust: 65,
    salesPerCust: 6.3,
    hourlySales: [],
    totalDailySales: 0,
    hourlySalesCalc: function(){
        for (var i = 0; i < storeHours.length; i++){
        this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
        } 
    },
}

    //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
render: function(){
        for (var i = 0; i < storeHours.length; i++){
        // create an element
        var liEl = document.createElement('li');
        console.log('liEl is', liEl);
        // give the element content
        liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';
        console.log('liEl with content', liEl);
        // append the element to the dom
        pikeyFirst.appendChild(liEl);
      }
      var totalOne = 0;

      for (i = 0; i < this.hourlySales.length; i++){
        totalOne += this.hourlySales[i];
      }

      var totalEl = document.createElement('li');
      console.log('totalEl is' totalEl);
      totalEl.textContent = 'Total: + totalOne + ' cookies ';
      firstAndPike.appendChild();
    }

  //helper function

// function calcRandomCustomers(min, max){
  // following line from MDN docs on math.random
// return Math.floor)(Math.random() * ( min - max + 1 ))


firstAndPike.hourlySalesCalc();
firstAndPike.render();
// calculateSum[0];
//total cookies





///////////////////////////////**** */Seatac Airport***////////////////////////



//source mdn math.random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }


//store hours SeaTac Airport
var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
'6pm','7pm','8pm'];

//var to call elementById
var seaTac = document.getElementById('seaTac');


// pike obj literal
var seaTacAir = {
    minCust: 3,
    maxCust: 24,
    salesPerCust: 1.2,
    hourlySales: [],
    hourlySalesCalc: function(){
        for (var i = 0; i < storeHours.length; i++){
        this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
        } 
    },

    //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
render: function(){
        for (var i = 0; i < storeHours.length; i++){
        // create an element
        var liEl = document.createElement('li');
        console.log('liEl is', liEl);
        // give the element content
        liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';        
        console.log('liEl with content', liEl);
        // append the element to the dom
        seaTac.appendChild(liEl);
        }
      }
  }

seaTacAir.hourlySalesCalc();
seaTacAir.render();
// totalDailySales[hourlySales];
//total cookies

///////////////////////////////**** */Seattle Center***////////////////////////



//source mdn math.random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


//store hours Seattle Center
var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
'6pm','7pm','8pm'];

//var to call elementById
var seaCen = document.getElementById('seaCen');


// pike obj literal
var seaCenter = {
  minCust: 11,
  maxCust: 38,
  salesPerCust: 3.7,
  hourlySales: [],
  hourlySalesCalc: function(){
      for (var i = 0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
      } 
  },

  //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
render: function(){
      for (var i = 0; i < storeHours.length; i++){
      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';        
      console.log('liEl with content', liEl);
      // append the element to the dom
      seaCen.appendChild(liEl);
      }
    }
}

seaCenter.hourlySalesCalc();
seaCenter.render();
// totalDailySales[hourlySales];
//total cookies

///////////////////////////////**** */Capitol Hill***////////////////////////



//source mdn math.random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


//store hours Seattle Center
var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
'6pm','7pm','8pm'];

//var to call elementById
var capHill = document.getElementById('capHill');


// pike obj literal
var capitolHill = {
  minCust: 20,
  maxCust: 38,
  salesPerCust: 2.3,
  hourlySales: [],
  hourlySalesCalc: function(){
      for (var i = 0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
      } 
  },

  //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
render: function(){
      for (var i = 0; i < storeHours.length; i++){
      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';        
      console.log('liEl with content', liEl);
      // append the element to the dom
      capHill.appendChild(liEl);
      }
    }
}

capitolHill.hourlySalesCalc();
capitolHill.render();
// totalDailySales[hourlySales];
//total cookies

///////////////////////////////**** */Alki***////////////////////////



//source mdn math.random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


//store hours Seattle Center
var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
'6pm','7pm','8pm'];

//var to call elementById
var alkiOne = document.getElementById('alkiOne');


// pike obj literal
var alkiTwo = {
  minCust: 20,
  maxCust: 38,
  salesPerCust: 2.3,
  hourlySales: [],
  hourlySalesCalc: function(){
      for (var i = 0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
      } 
  },

  //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
render: function(){
      for (var i = 0; i < storeHours.length; i++){
      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';        
      console.log('liEl with content', liEl);
      // append the element to the dom
      alkiOne.appendChild(liEl);
      }
    }
}

alkiTwo.hourlySalesCalc();
alkiTwo.render();
// totalDailySales[hourlySales];
//total cookies











