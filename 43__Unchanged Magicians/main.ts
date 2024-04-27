// Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log (name));
}

// Function to make magicians great through .map() it will modify Arrey 
function make_great (magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an Arrey of magicians names 
let magicians_names = [ "Harry Poter","Wasim","Rehan"];

// Making a copy of original Arrey through .slice() function 
let copy_magician_names = magicians_names.slice()

// Modify the copied Arrey to include "The Great" with their names 
let copy_great_magicians = make_great(copy_magician_names);

// Show both Arreys Original and Copied 

// Original
console.log ("Original Arrey\n")
show_magicians(magicians_names);

// Copied
console.log("\nCopied Arrey\n")
show_magicians(copy_great_magicians);