Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });



  let Vehicles = [
    {
        id:0,
        name:"Very Super Fun Motorbike",
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
        name:"Car Small Model R2D2",
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
        name:"Transporter AB42",
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
        name:"Sleeper",
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
    card.classList.add("flex", "info-section-card", vehicle.vehicle);
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
    vehicle_name.innerHTML = vehicle.name;
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
    hire_total_price.innerHTML = "$" + vehicle.ppd * NumberOfDays;
    hire_me_div.appendChild(hire_total_price);

    let hire_total_word = document.createElement("p");
    hire_total_word.innerHTML = "HIRE TOTAL";
    hire_me_div.appendChild(hire_total_word);

    let hire_me_button = document.createElement("div");
    hire_me_button.classList.add("hire-me");
    hire_me_button.innerHTML = "Hire me!";
    hire_me_div.appendChild(hire_me_button);
}

let motorbike_amount = document.getElementById("motorbikes-amount");
let small_car_amount = document.getElementById("small-cars-amount");
let large_car_amount = document.getElementById("large-cars-amount");
let motor_home_amount = document.getElementById("motor-home-amount");
update_allowed_vehicles();





function update_allowed_vehicles() {
    let info_section_cards = document.getElementsByClassName("info-section-card");

    let motorbike_number = 0;
    let small_car_number = 0;
    let large_car_number = 0;
    let motor_home_number = 0;

    for(let card of info_section_cards) {

        if(card.classList.contains("motorbike")) {
            if(Vehicles[0].max_days < NumberOfDays || Vehicles[0].max_passenger < peopleInPartyValue || Vehicles[0].min_days > NumberOfDays || Vehicles[0].min_passenger > peopleInPartyValue) {
                card.classList.add("hidden")
            }
            else {
                motorbike_number ++;
                card.classList.remove("hidden");
            }
        }

        else if(card.classList.contains("small-car")) {
            if(Vehicles[1].max_days < NumberOfDays || Vehicles[1].max_passenger < peopleInPartyValue || Vehicles[1].min_days > NumberOfDays || Vehicles[1].min_passenger > peopleInPartyValue) {
                card.classList.add("hidden")
            }
            else {
                small_car_number ++;
                card.classList.remove("hidden");
            }
        }

        else if(card.classList.contains("large-car")) {
            if(Vehicles[2].max_days < NumberOfDays || Vehicles[2].max_passenger < peopleInPartyValue || Vehicles[2].min_days > NumberOfDays || Vehicles[2].min_passenger > peopleInPartyValue) {
                card.classList.add("hidden")
            }
            else {
                large_car_number ++;
                card.classList.remove("hidden");
            }
        }

        else if(card.classList.contains("motor-home")) {
            if(Vehicles[3].max_days < NumberOfDays || Vehicles[3].max_passenger < peopleInPartyValue || Vehicles[3].min_days > NumberOfDays || Vehicles[3].min_passenger > peopleInPartyValue) {
                card.classList.add("hidden")
            }
            else {
                motor_home_number ++;
                card.classList.remove("hidden");
            }
        }
    }

    if(motorbike_number !== 0) {
        motorbike_amount.innerHTML = motorbike_number + " Motorbikes";
        motorbike_amount.classList.remove("hidden");
    }
    else {
        motorbike_amount.classList.add("hidden");
    }

    if(small_car_number !== 0) {
        small_car_amount.innerHTML = small_car_number + " Small Cars";
        small_car_amount.classList.remove("hidden");
    }
    else {
        small_car_amount.classList.add("hidden");
    }


    if(large_car_number !== 0) {
        large_car_amount.innerHTML = large_car_number + " Large Cars";
        large_car_amount.classList.remove("hidden");
    }
    else {
        large_car_amount.classList.add("hidden");
    }


    if(motor_home_number !== 0) {
        motor_home_amount.innerHTML = motor_home_number + " Motor Homes";
        motor_home_amount.classList.remove("hidden");
    }
    else {
        motor_home_amount.classList.add("hidden");
    }
}



function update_prices() {
    let hire_me_divs = document.getElementsByClassName("hire-me-div")
    for(let div of hire_me_divs) {
        let vehicleObject = Vehicles[div.id];
        div.children[2].innerHTML = "$" + vehicleObject.ppd * NumberOfDays
    }
}

let all_arrow_down = document.getElementsByClassName("arrow");
let all_arrow_down_content = document.getElementsByClassName("arrow-content");

for(let i=0; i<all_arrow_down.length; i++) {
    all_arrow_down[i].onclick = function() {
        all_arrow_down_content[i].classList.toggle("hidden");
    }
}

let all_day_content_options = document.getElementsByClassName("day-item");
for(let day of all_day_content_options) {
    day.onclick = function() {
        NumberOfDays = day.innerHTML;
        results_days_span.innerHTML = NumberOfDays + " days";

        for(let content of all_arrow_down_content) {
            content.classList.add("hidden");
        }
        console.log(NumberOfDays)
        update_prices();
        update_allowed_vehicles();
    }
}

let all_people_content_options = document.getElementsByClassName("people-item");
for(let person of all_people_content_options) {
    person.onclick = function() {
        peopleInPartyValue = person.innerHTML;
        results_people_span.innerHTML = peopleInPartyValue + " people";

        for(let content of all_arrow_down_content) {
            content.classList.add("hidden");
        }
        update_allowed_vehicles();
    }
}