/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let joshua = {}
// Step 2: Inside of the object, add a property named name with a value of your name as a string
joshua.name = "Joshua Pearson"
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
joshua.photo = "../images/me.jpg"
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
joshua.favoriteFoods = ['potatoes', 'asparagus', 'steak']
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
joshua.hobbies = ['woodworking', 'photography', 'sleeping']
// Step 6: Add another property named placesLived with a value of an empty array
joshua.placesLived = []
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
joshua.placesLived.push({place: '', length: ''})
// Step 8: For each property, add appropriate values as strings
joshua.placesLived[0].place = 'Lehi, Utah'
joshua.placesLived[0].length = 25
// Step 9: Add additional objects with the same properties for each place you've lived

joshua.placesLived.push({place: '', length: ''})
joshua.placesLived.push({place: '', length: ''})
joshua.placesLived[1].place = 'Provo, Utah'
joshua.placesLived[1].length = 2
joshua.placesLived[2].place = 'Bautzen, Sachsen, Deutschland'
joshua.placesLived[2].length = .5
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = joshua.name
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = joshua.photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').alt = joshua.name
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
joshua.favoriteFoods.forEach(el => {
    document.querySelector('#favorite-foods').innerHTML += (`<li>${el}</li>`)
})
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
joshua.hobbies.forEach(el => {
    document.querySelector('#hobbies').innerHTML += (`<li>${el}</li>`)
})
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
joshua.placesLived.forEach(el => {
    document.querySelector('#places-lived').innerHTML += (`<dt>${el.place}</dt>`)
    document.querySelector('#places-lived').innerHTML += (`<dd>${el.length} years</dd>`)
})
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
