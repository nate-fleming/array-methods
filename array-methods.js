const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(planet => {
    planetEl.innerHTML += `<div>${planet}</div>`
})


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

planets.map(planet => {
    let firstLetter = planet.slice(0, 1).toUpperCase()
    let rest = planet.slice(1)
    planetEl.innerHTML += `<div>${firstLetter}${rest}</div>`
})


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let ePlanets = planets.filter(planet => {
    return planet.includes("e")
})
ePlanets.forEach(planet => {
    planetEl.innerHTML += `<div>${planet}</div>`
})