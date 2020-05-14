const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

const outputElement = document.querySelector("#app")

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})

outputElement.innerHTML += "<h1>Car List</h1>"

allCars.forEach(car => {
    outputElement.innerHTML += "<hr/>"

    for (const entry of Object.entries(car)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"
const bill = {
    officeName: "Old Harding",
    streetAddress: "70W Bellevue",
    doctorName: "Paul Heil",
    patientName: "Tessa Brownlee",
    visitDate: "December 18, 2019",
    amountBilled: 150.00,
    dueDate: "March 1, 2020"

}
console.log(bill["visitDate"])
console.log(bill["amountBilled"])
console.log(bill["patientName"])

for (const value of Object.values(bill)) {
    console.log(value)
}

for (const key of Object.keys(bill)) {
    console.log(key)
}

const favoriteDinner = [
    {
    name: "Mushroom Risotto",
    dishType: "rice",
    vegetarian: true,
    entree: "yes"
}]
const outputEl = document.querySelector(".food")
favoriteDinner.forEach(meal => {
    outputEl.innerHTML += ""
    for(const entry of Object.entries(meal)) {
        outputEl.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
    
})

