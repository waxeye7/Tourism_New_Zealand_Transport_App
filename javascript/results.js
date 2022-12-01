Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });



  let Vehicles = [
    {
        vehicle:"motorbike",
        min_passenger:1,
        max_passenger:1,
        ppd:109,
        min_days:1,
        max_days:5,
        fuel_usage:3.7,
        img:"../img/motorbike.jpg"
    },
    {
        vehicle:"small-car",
        min_passenger:1,
        max_passenger:2,
        ppd:129,
        min_days:1,
        max_days:10,
        fuel_usage:8.5,
        img:"../img/small-car.jpg"
    },
    {
        vehicle:"large-car",
        min_passenger:1,
        max_passenger:5,
        ppd:144,
        min_days:3,
        max_days:10,
        fuel_usage:9.7,
        img:"../img/large-car2.jpg"
    },
    {
        vehicle:"motor-home",
        min_passenger:2,
        max_passenger:6,
        ppd:200,
        min_days:2,
        max_days:15,
        fuel_usage:17,
        img:"../img/motor-home2.png"
    }
]



let peopleInPartyValue = localStorage.getItem('PeopleInParty');
let NumberOfDays = localStorage.getItem('NumberOfDays');
let pickupLocationValue = localStorage.getItem('PickupLocation');
let travelDistanceValue = localStorage.getItem('TravelDistance');

console.log(peopleInPartyValue,NumberOfDays,pickupLocationValue,travelDistanceValue)

let results_days_span = $("#results-days")[0];
let results_people_span = $("#results-people")[0];
let results_location_span = $("#results-location")[0];

results_days_span.innerHTML = NumberOfDays + " days";
results_people_span.innerHTML = peopleInPartyValue + " people";
results_location_span.innerHTML = pickupLocationValue.capitalize();

for(let vehicle of Vehicles) {
    
    // document.createElement

}
