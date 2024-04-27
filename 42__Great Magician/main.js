// Define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify Arrey
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an Arrey of magicians name 
var magician_names = ["Harry Poter", "Wasim", "Rehan"];
// Call make_great function to modify magicians names 
var great_magicians = make_great(magician_names);
// Call show_magicians that show modified List of magicians 
show_magicians(great_magicians);
