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
    // cookiesEachHour:[],
    totalDailySales: 0,
    hourlySalesCalc: function(){
        for (var i = 0; i < storeHours.length; i++){
        this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust));
        } 
    },

    dailyTotalCalculator: function(){
      for (var i = 0; i < this.hourlySales.length; i++){
      this.totalDailySales += this.hourlySales[i];
      }
    },
    allCall: function(){
      this.hourlySalesCalc();
      this.dailyTotalCalculator();
      this.render();
    },

    //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
    render: function(){
        for (var i = 0; i < storeHours.length; i++){
        // create an element
        var liEl = document.createElement('li');
        // give the element content
        liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';
        // append the element to the dom
        pikeyFirst.appendChild(liEl);
      }
      var liEl = document.createElement('li');
      liEl.textContent = 'Total: ' + this.totalDailySales;
      pikeyFirst.appendChild(liEl);
    }
  }
     

firstAndPike.allCall();






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
    totalDailySales: 0,
    hourlySalesCalc: function(){
        for (var i = 0; i < storeHours.length; i++){
        this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
        } 
    },
    dailyTotalCalculator: function(){
      for (var i = 0; i < this.hourlySales.length; i++){
      this.totalDailySales += this.hourlySales[i];
      }
    },
    allCall: function(){
      this.hourlySalesCalc();
      this.dailyTotalCalculator();
      this.render();
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
        var liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalDailySales;
        seaTac.appendChild(liEl);
  
      }
  }

seaTacAir.allCall();
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
  totalDailySales: 0,
  hourlySalesCalc: function(){
      for (var i = 0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
      } 
  },
  dailyTotalCalculator: function(){
    for (var i = 0; i < this.hourlySales.length; i++){
    this.totalDailySales += this.hourlySales[i];
    }
  },
  allCall: function(){
    this.hourlySalesCalc();
    this.dailyTotalCalculator();
    this.render();
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
      var liEl = document.createElement('li');
      liEl.textContent = 'Total: ' + this.totalDailySales;
      seaCen.appendChild(liEl);

    }
}

seaCenter.allCall();
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
  totalDailySales: 0,
  hourlySalesCalc: function(){
      for (var i = 0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
      } 
  },
  dailyTotalCalculator: function(){
    for (var i = 0; i < this.hourlySales.length; i++){
    this.totalDailySales += this.hourlySales[i];
    }
  },
  allCall: function(){
    this.hourlySalesCalc();
    this.dailyTotalCalculator();
    this.render();
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
      var liEl = document.createElement('li');
      liEl.textContent = 'Total: ' + this.totalDailySales;
      capHill.appendChild(liEl);

    }
}

capitolHill.allCall();
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
  totalDailySales:0,
  hourlySalesCalc: function(){
      for (var i = 0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
      } 
  },
  dailyTotalCalculator: function(){
    for (var i = 0; i < this.hourlySales.length; i++){
    this.totalDailySales += this.hourlySales[i];
    }
  },
  allCall: function(){
    this.hourlySalesCalc();
    this.dailyTotalCalculator();
    this.render();
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
      var liEl = document.createElement('li');
      liEl.textContent = 'Total: ' + this.totalDailySales;
      alkiOne.appendChild(liEl);

    }
}

alkiTwo.allCall();
// totalDailySales[hourlySales];
//total cookies











