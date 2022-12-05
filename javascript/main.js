// date thing
flatpickr($("#date-selector-please")[0],
    {
        altInput: true,
        altFormat: "F j, Y",
        mode: "multiple",
        dateFormat: "Y-m-d",
        mode: "range",
        minDate: "today"
    }
);

// make the date label disappear on input date.
let label_date = $("#label-for-date")[0];
let date_selector = $("#date-selector-please")[0];

date_selector.oninput = function() {
    if(date_selector.value != "") {
        label_date.classList.add("hidden");
    }
    else {
        label_date.classList.remove("hidden");
    }
}
let container_image_switch = $("#container-image-switch")[0];
let pickup_location = $("#pickup-location")[0];
pickup_location.onchange = function() {
    location_text = $("#location-text")[0];
    location_text.innerHTML = pickup_location.value;
    container_image_switch.classList.remove("auckland-image-url", "wellington-image-url", "christchurch-image-url");
    console.log(pickup_location.value +  "-image-url")
    container_image_switch.classList.add(pickup_location.value.toLowerCase() +  "-image-url");
}

let search_button = $("#search-button")[0];
search_button.onclick = function() {

    let peopleInParty = $("#people-in-party")[0];
    let peopleInPartyValue = peopleInParty.value;

    let dateElement = $("#date-selector-please")[0];
    let dateElementValue = dateElement.value;
    let first_date_value = dateElementValue.slice(0,10);
    let second_date_value = dateElementValue.slice(14,24);
    let numberOfDays = calculate_day_difference(first_date_value, second_date_value);
    
    let pickupLocationElement = $("#pickup-location")[0]
    let pickupLocationValue = pickupLocationElement.value.toLowerCase();

    let travelDistanceElement = $("#travel-distance")[0];
    let travelDistanceValue = travelDistanceElement.value;


    localStorage.setItem('PeopleInParty', peopleInPartyValue);
    localStorage.setItem('NumberOfDays', numberOfDays);
    localStorage.setItem('PickupLocation', pickupLocationValue);
    localStorage.setItem('TravelDistance', travelDistanceValue);


    if(peopleInPartyValue && numberOfDays && pickupLocationValue && travelDistanceValue) {
        window.open("../results.html", "_self");
    }
    else {
        valueChecker(peopleInPartyValue, peopleInParty, first_date_value, second_date_value,
            dateElementValue, pickupLocationValue, pickupLocationElement,
            travelDistanceValue, travelDistanceElement);
    }


}


function valueChecker(peopleInPartyValue, peopleInParty, first_date_value, second_date_value,
                      dateElementValue, pickupLocationValue, pickupLocationElement,
                      travelDistanceValue, travelDistanceElement) {
    

    if(!peopleInPartyValue) {
        peopleInParty.classList.add("red-border");
    }
    else {
        peopleInParty.classList.remove("red-border");
    }
    
    let group = document.getElementsByClassName("group")[0];
    if(!first_date_value || !second_date_value || dateElementValue.length < 20) {
        group.classList.add("red-border");
    }
    else {
        group.classList.remove("red-border");
    }

    if(!pickupLocationValue) {
        pickupLocationElement.classList.add("red-border");
    }
    else {
        pickupLocationElement.classList.remove("red-border");
    }


    if(!travelDistanceValue) {
        travelDistanceElement.classList.add("red-border");
    }
    else {
        travelDistanceElement.classList.remove("red-border");
    }

}
