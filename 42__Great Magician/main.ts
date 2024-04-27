// Define the function to show magicians name
function show_magicians (magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify Arrey
function make_great (magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an Arrey of magicians name 
let magician_names = ["Harry Poter","Wasim","Rehan"];

// Call make_great function to modify magicians names 
let great_magicians = make_great(magician_names);

// Call show_magicians that show modified List of magicians 
show_magicians(great_magicians)