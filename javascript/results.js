Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });



  let Vehicles = [
    {
        id:0,
        vehicle:"motorbike",
        min_passenger:1,
        max_passenger:1,
        ppd:109,
        min_days:1,
        max_days:5,
        fuel_usage:3.7,
        img:"../img/motorbike.jpg",
        desc:"this bike is fun"
    },
    {
        id:1,
        vehicle:"small-car",
        min_passenger:1,
        max_passenger:2,
        ppd:129,
        min_days:1,
        max_days:10,
        fuel_usage:8.5,
        img:"../img/small-car.jpg",
        desc:"this car is epic"
    },
    {
        id:2,
        vehicle:"large-car",
        min_passenger:1,
        max_passenger:5,
        ppd:144,
        min_days:3,
        max_days:10,
        fuel_usage:9.7,
        img:"../img/large-car2.jpg",
        desc:"this vehicle is awesome"
    },
    {
        id:3,
        vehicle:"motor-home",
        min_passenger:2,
        max_passenger:6,
        ppd:200,
        min_days:2,
        max_days:15,
        fuel_usage:17,
        img:"../img/motor-home2.png",
        desc:"this vehicle is okay"
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

let vehicles_container = $("#vehicles-container")[0];
for(let vehicle of Vehicles) {
    let card = document.createElement("div");
    card.classList.add("flex", "info-section-card");
    vehicles_container.appendChild(card)

    let vehicle_img_wrapper = document.createElement("div");
    vehicle_img_wrapper.classList.add("img-wrapper-car");
    card.appendChild(vehicle_img_wrapper);

    let image = document.createElement("img");
    image.src = vehicle.img;
    vehicle_img_wrapper.appendChild(image);

    let info_text_part = document.createElement("div");
    info_text_part.classList.add("flex", "column", "info-about-car");
    card.appendChild(info_text_part);

    let vehicle_name = document.createElement("h2");
    vehicle_name.innerHTML = "Toyota abc"
    info_text_part.appendChild(vehicle_name);

    let vehicle_type = document.createElement("h3");

    // really bad code to capitalise the first letter of each word for the vehicle types -------------------
    let sentence = vehicle.vehicle.split("-").join(" ");
    sentence = sentence.split(" ");
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1);
    }
    let result = "";
    for(let word of sentence) {
        result += word + " ";
    }
    // really bad code to capitalise the first letter of each word for the vehicle types -------------------
    vehicle_type.innerHTML = result;
    info_text_part.appendChild(vehicle_type);

    let vehicle_paragraph = document.createElement("p");
    vehicle_paragraph.innerHTML = vehicle.desc;
    info_text_part.appendChild(vehicle_paragraph);

    let learn_more = document.createElement("h4");
    learn_more.innerHTML = "Learn more";
    info_text_part.appendChild(learn_more);

    let hire_me_div = document.createElement("div");
    hire_me_div.classList.add("flex", "column", "hire-me-div");
    hire_me_div.id = vehicle.id;
    card.appendChild(hire_me_div);

    let hire_per_day_price = document.createElement("h3");
    hire_per_day_price.innerHTML = "$" + vehicle.ppd;
    hire_me_div.appendChild(hire_per_day_price);

    let hire_per_day_word = document.createElement("p");
    hire_per_day_word.innerHTML = "HIRE PER DAY";
    hire_me_div.appendChild(hire_per_day_word);

    let hire_total_price = document.createElement("h3");
    hire_total_price.innerHTML = vehicle.ppd * NumberOfDays;
    hire_me_div.appendChild(hire_total_price);

    let hire_total_word = document.createElement("p");
    hire_total_word.innerHTML = "HIRE TOTAL";
    hire_me_div.appendChild(hire_total_word);

    let hire_me_button = document.createElement("div");
    hire_me_button.classList.add("hire-me");
    hire_me_button.innerHTML = "Hire me!";
    hire_me_div.appendChild(hire_me_button);
}

function update_prices(Vehicles) {
    let hire_me_divs = $("hire-me-div")
    for(let div of hire_me_divs) {
        let vehicleObject = Vehicles[div.id];
        div.children[2].innerHTML = vehicleObject.ppd * NumberOfDays
    }
}