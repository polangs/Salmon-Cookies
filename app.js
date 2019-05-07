'use strict';


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
    hourlySalesCalc: function(){
        for (var i = 0; i < storeHours.length; i++){
        this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust));

        } 
    },


    //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
render: function(){
        // create an element
        var piEl = document.createElement('pi');
        console.log('piEl is', piEl);
        // give the element content
        piKey.textContent = this.nickname;
        console.log('piEl with content', piEl);
        // append the element to the dom
        pikeyFirst.appendChild(piEl);
        pikeyFirst[i].render()
      }
};
firstAndPike.hourlySalesCalc();




