Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });

  function myFunction(x) {
    x.classList.toggle("change-burger");
    x.parentNode.children[1].classList.toggle("hidden");
  }



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
        desc:"Internal-combustion engine, any of a group of devices in which the reactants of combustion (oxidizer and fuel) and the products of combustion serve as the working fluids of the engine. Such an engine gains its energy from heat released during the combustion of the nonreacted working fluids, the oxidizer-fuel mixture. This process occurs within the engine and is part of the thermodynamic cycle of the device. Useful work generated by an internal-combustion (IC) engine results from the hot gaseous products of combustion acting on moving surfaces of the engine, such as the face of a piston, a turbine blade, or a nozzle",
    },
    {
        id:1,
        name:"R2D2",
        vehicle:"small-car",
        min_passenger:1,
        max_passenger:2,
        ppd:129,
        min_days:1,
        max_days:10,
        fuel_usage:8.5,
        img:"../img/small-car.jpg",
        desc:"Nuclear fission is the formal name for the splitting of an atom. In self-sustained fission, a neutron causes an atomic nucleus to split, and this gives off more neutrons that cause nearby atoms to break apart, giving off yet more neutrons, in a chain reaction"
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
        desc:"It is a complex machine built to convert heat from burning gas into the force that turns the road wheels. The chain of reactions which achieve that objective is set in motion by a spark , which ignites a mixture of petrol vapour and compressed air inside a momentarily sealed cylinder and causes it to burn rapidly"
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
        desc:"Fishing, also called angling, the sport of catching fish, freshwater or saltwater, typically with rod, line, and hook. Like hunting, fishing originated as a means of providing food for survival and it is very fun to do on a nice day"
    }
];

let peopleInPartyValue = localStorage.getItem('PeopleInParty');
let NumberOfDays = localStorage.getItem('NumberOfDays');
let pickupLocationValue = localStorage.getItem('PickupLocation');
let travelDistanceValue = localStorage.getItem('TravelDistance');

let results_days_span = $("#results-days")[0];
let results_people_span = $("#results-people")[0];
let results_location_span = $("#results-location")[0];

results_days_span.innerHTML = NumberOfDays + " days";
results_people_span.innerHTML = peopleInPartyValue + " people";
results_location_span.innerHTML = pickupLocationValue.capitalize();

let modal = document.getElementById("modal");
let modalCloser = document.getElementById("modal-closer");

modalCloser.onclick = function() {
    modalCloser.classList.add("hidden");
    modal.classList.add("hidden");
};

let vehicles_container = $("#vehicles-container")[0];
for(let vehicle of Vehicles) {
    let card = document.createElement("div");
    card.classList.add("flex", "info-section-card", vehicle.vehicle);
    vehicles_container.appendChild(card);

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
    info_text_part.appendChild(vehicle_paragraph);

    let full_vehicle_paragraph = document.createElement("span");
    full_vehicle_paragraph.innerHTML = vehicle.desc + ". ";
    full_vehicle_paragraph.classList.add("hidden");
    vehicle_paragraph.appendChild(full_vehicle_paragraph);

    let part_vehicle_paragraph = document.createElement("span");
    part_vehicle_paragraph.innerHTML = vehicle.desc.split(' ').slice(0, 30).join(' ') + "..." + " ";
    vehicle_paragraph.appendChild(part_vehicle_paragraph);

    let learn_more = document.createElement("span");
    learn_more.id = "learn-more";
    learn_more.innerHTML = "Learn more";
    vehicle_paragraph.appendChild(learn_more);

    learn_more.onclick = function() {
        if(full_vehicle_paragraph.classList.contains("hidden")) {
            part_vehicle_paragraph.classList.add("hidden");
            full_vehicle_paragraph.classList.remove("hidden");
            learn_more.classList.add("black-text", "text-decoration-none");
            learn_more.innerHTML = "Learn less";
        }
        else if(part_vehicle_paragraph.classList.contains("hidden")) {
            full_vehicle_paragraph.classList.add("hidden");
            part_vehicle_paragraph.classList.remove("hidden");
            learn_more.classList.remove("black-text", "text-decoration-none");
            learn_more.innerHTML = "Learn more";
        }
    };

    let small_div_fuels = document.createElement("div");
    small_div_fuels.classList.add("small-margin-bottom-gap");
    vehicle_paragraph.appendChild(small_div_fuels);

    let this_vehicle_fuel_consumption = document.createElement("p");
    this_vehicle_fuel_consumption.classList.add("this-vehicle-burns-p");
    this_vehicle_fuel_consumption.innerHTML = vehicle.name + " uses " + vehicle.fuel_usage + "L per 100km.";
    small_div_fuels.appendChild(this_vehicle_fuel_consumption);

    let this_vehicle_fuel_price = document.createElement("p");
    this_vehicle_fuel_price.classList.add("this-vehicle-burns-p");
    this_vehicle_fuel_price.innerHTML = "Fuel cost for travelling " + travelDistanceValue + "km is $" + Math.round(vehicle.fuel_usage/100 * travelDistanceValue * 2.646);
    small_div_fuels.appendChild(this_vehicle_fuel_price);
    
    
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

// 
    hire_me_button.onclick = function() {
        modal.classList.remove("hidden");
        modalCloser.classList.remove("hidden");

        while (modal.firstChild) {
            modal.removeChild(modal.firstChild);
        }

        let vehicle_img_wrapper_for_modal = document.createElement("div");
        vehicle_img_wrapper_for_modal.classList.add("modal-img-wrapper");
        modal.appendChild(vehicle_img_wrapper_for_modal);
    
        let image_for_modal = document.createElement("img");
        image_for_modal.src = vehicle.img;
        vehicle_img_wrapper_for_modal.appendChild(image_for_modal);

        let div_wrap = document.createElement("div");
        div_wrap.classList.add("modal-wrapper-styling");
        modal.appendChild(div_wrap);

        let vehicle_name_modal = document.createElement("h2");
        vehicle_name_modal.innerHTML = vehicle.name;
        div_wrap.appendChild(vehicle_name_modal);

        let wrapper_cost_info = document.createElement("div");
        wrapper_cost_info.classList.add("cost-info-modal");
        div_wrap.appendChild(wrapper_cost_info);

        let fuel_total_price = document.createElement("h3");
        fuel_total_price.innerHTML = "$" + Math.round(vehicle.fuel_usage/100 * travelDistanceValue * 2.646);
        wrapper_cost_info.appendChild(fuel_total_price);

        let this_vehicle_fuel_price = document.createElement("p");
        this_vehicle_fuel_price.innerHTML = "ESTIMATED FUEL TOTAL";
        wrapper_cost_info.appendChild(this_vehicle_fuel_price);

        let hire_total_price = document.createElement("h3");
        hire_total_price.innerHTML = "$" + vehicle.ppd * NumberOfDays;
        wrapper_cost_info.appendChild(hire_total_price);

        let hire_total_word = document.createElement("p");
        hire_total_word.innerHTML = "HIRE TOTAL";
        wrapper_cost_info.appendChild(hire_total_word);



        let checkout_button = document.createElement("div");
        checkout_button.classList.add("checkout");
        checkout_button.innerHTML = "Checkout";
        modal.appendChild(checkout_button);
        
    };
// 



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
                card.classList.add("hidden");
            }
            else {
                motorbike_number ++;
                card.classList.remove("hidden");
            }
        }

        else if(card.classList.contains("small-car")) {
            if(Vehicles[1].max_days < NumberOfDays || Vehicles[1].max_passenger < peopleInPartyValue || Vehicles[1].min_days > NumberOfDays || Vehicles[1].min_passenger > peopleInPartyValue) {
                card.classList.add("hidden");
            }
            else {
                small_car_number ++;
                card.classList.remove("hidden");
            }
        }

        else if(card.classList.contains("large-car")) {
            if(Vehicles[2].max_days < NumberOfDays || Vehicles[2].max_passenger < peopleInPartyValue || Vehicles[2].min_days > NumberOfDays || Vehicles[2].min_passenger > peopleInPartyValue) {
                card.classList.add("hidden");
            }
            else {
                large_car_number ++;
                card.classList.remove("hidden");
            }
        }

        else if(card.classList.contains("motor-home")) {
            if(Vehicles[3].max_days < NumberOfDays || Vehicles[3].max_passenger < peopleInPartyValue || Vehicles[3].min_days > NumberOfDays || Vehicles[3].min_passenger > peopleInPartyValue) {
                card.classList.add("hidden");
            }
            else {
                motor_home_number ++;
                card.classList.remove("hidden");
            }
        }
    }

    let after_motorbike_and = document.getElementById("after-motorbike-and");
    let after_small_car_and = document.getElementById("after-small-car-and");
    let after_large_car_and = document.getElementById("after-large-car-and");


    let results_h3 = document.getElementById("found-results-h3");
    let refine_search = document.getElementById("refine-search");

    if(motorbike_number == 0 && small_car_number == 0 && large_car_number == 0 && motor_home_number == 0) {
        results_h3.classList.add("hidden");
        refine_search.classList.remove("hidden");
    }
    else {
        results_h3.classList.remove("hidden");
        refine_search.classList.add("hidden");
    }

    if(motorbike_number !== 0) {
        motorbike_amount.innerHTML = motorbike_number + " Motorbikes";
        motorbike_amount.classList.remove("hidden");
        if(small_car_number > 0 || large_car_number > 0 || motor_home_number > 0) {
            after_motorbike_and.classList.remove("hidden");
        }
        else {
            after_motorbike_and.classList.add("hidden");
        }
    }
    else {
        motorbike_amount.classList.add("hidden");
        after_motorbike_and.classList.add("hidden");
    }
    // "<span>and </span>" + 
    if(small_car_number !== 0) {
        small_car_amount.innerHTML = small_car_number + " Small Cars";
        small_car_amount.classList.remove("hidden");
        if(large_car_number > 0 || motor_home_number > 0) {
            after_small_car_and.classList.remove("hidden");
        }
        else {
            after_small_car_and.classList.add("hidden");
        }
    }
    else {
        small_car_amount.classList.add("hidden");
        after_small_car_and.classList.add("hidden");
    }


    if(large_car_number !== 0) {
        large_car_amount.innerHTML = large_car_number + " Large Cars";
        large_car_amount.classList.remove("hidden");
        if(motor_home_number > 0) {
            after_large_car_and.classList.remove("hidden");
        }
        else {
            after_large_car_and.classList.add("hidden");
        }
    }
    else {
        large_car_amount.classList.add("hidden");
        after_large_car_and.classList.add("hidden");
    }


    if(motor_home_number !== 0) {
        motor_home_amount.innerHTML = motor_home_number + " Motor Homes";
        motor_home_amount.classList.remove("hidden");
    }
    else {
        motor_home_amount.classList.add("hidden");
    }


    let their_days_and_people = document.getElementById("theirdaysandpeople");
    their_days_and_people.innerHTML = NumberOfDays + " days and " + peopleInPartyValue + " people";

}



function update_prices() {
    let hire_me_divs = document.getElementsByClassName("hire-me-div");
    for(let div of hire_me_divs) {
        let vehicleObject = Vehicles[div.id];
        div.children[2].innerHTML = "$" + vehicleObject.ppd * NumberOfDays;
    }
}

let all_arrow_down = document.getElementsByClassName("arrow");
let all_arrow_down_content = document.getElementsByClassName("arrow-content");

let all_arrow_container = document.getElementsByClassName("arrow-container");
let dropdownCloser = document.getElementById("dropdown-closer");

dropdownCloser.onclick = function() {
    for(let arrow_down_content_span of all_arrow_down_content) {
        arrow_down_content_span.classList.add("hidden");
    }
    dropdownCloser.classList.add("hidden");
};

for(let i=0; i<all_arrow_down.length; i++) {
    all_arrow_down[i].onclick = function() {
        for(let arrow_down_content_span of all_arrow_down_content) {
            if(arrow_down_content_span != all_arrow_down_content[i]) {
                arrow_down_content_span.classList.add("hidden");
            }
        }
        all_arrow_down_content[i].classList.toggle("hidden");
        if(!all_arrow_down_content[i].classList.contains("hidden"))  {
            dropdownCloser.classList.remove("hidden");
        }
        else {
            dropdownCloser.classList.add("hidden");
        }
    };
}




let all_day_content_options = document.getElementsByClassName("day-item");
for(let day of all_day_content_options) {
    day.onclick = function() {
        NumberOfDays = day.innerHTML;
        results_days_span.innerHTML = NumberOfDays + " days";

        for(let content of all_arrow_down_content) {
            content.classList.add("hidden");
        }

        dropdownCloser.classList.add("hidden");

        update_prices();
        update_allowed_vehicles();
    };
}

let all_people_content_options = document.getElementsByClassName("people-item");
for(let person of all_people_content_options) {
    person.onclick = function() {
        peopleInPartyValue = person.innerHTML;
        results_people_span.innerHTML = peopleInPartyValue + " people";

        for(let content of all_arrow_down_content) {
            content.classList.add("hidden");
        }

        dropdownCloser.classList.add("hidden");

        update_allowed_vehicles();
    };
}