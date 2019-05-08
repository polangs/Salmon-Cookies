'use strict';


//global variables
var allStores = [];
var hourlyTotals = [];
var grandTotal = 0;

//source mdn math.random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is inclusive and the minimum is inclusive
}


//store hours
var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm','8pm'];

//var to call elementById
var storeTable = document.getElementById('store-table');

//constructor function
function Store (min,max,avg,name) {
  this.minCust = min;
  this.maxCust = max;
  this.salesPerCust = avg;
  this.storeName = name;
  this.hourlySales = [];
  this.totalDailySales = 0;
  this.hourlySalesCalc = function(){
    for (var i = 0; i < storeHours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust));
    }
  };

  //record of sales per hour
  this.dailyTotalCalculator = function(){
    for (var i = 0; i < this.hourlySales.length; i++){
      this.totalDailySales += this.hourlySales[i];
    }
  };
  this.allCall = function(){
    this.hourlySalesCalc();
    this.dailyTotalCalculator();
    this.render();
  };

  // render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
  this.render = function(){
    var trEl = document.createElement ('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);

    for ( var i = 0; i < storeHours.length; i ++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.hourlySales[i];
      trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.totalDailySales;
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  };
  //populating all shops array
  allStores.push(this);
}


//generates header row of the table
function tableHeaderRow (){
  var trEl = document.createElement ('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  for ( var i = 0; i < storeHours.length; i ++){
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}
function renderAllStores(){
  for (var i = 0; i < allStores.length; i++){
    allStores[i].allCall();
  }
}
//footer row function
function totalPerDayFooter (){
  var tFoot= document.createElement('tfoot');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for (var i = 0; i < storeHours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotals[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);
  tFoot.appendChild(trEl);
  storeTable.appendChild(tFoot);
}

//hourly store total per day
function getAllSumFooter (){
  for (var i = 0; i < storeHours.length; i++){
    var columnTotal = 0;
    for (var j = 0; j < allStores.length; j++){
      columnTotal += allStores[j].hourlySales[i];
    }
    grandTotal += columnTotal;
    hourlyTotals[i] = columnTotal;
  }
}

new Store (23, 65, 6.3, 'First and Pike');
new Store (3, 24, 1.2, 'Seatac Airport');
new Store (11, 38, 3.7, 'Seattle Center');
new Store (20, 38, 2.3, 'Capital Hill');
new Store (2, 16, 4.6, 'Alki');

tableHeaderRow();
renderAllStores();
// rendertotalPerHour();
getAllSumFooter();
totalPerDayFooter();


