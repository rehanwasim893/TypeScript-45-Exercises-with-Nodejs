// Making a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a function 
make_shirt();

// Calling a function now with Medium size and default message 
make_shirt("Medium")

// Callimg a function now with small size and also Different Print Message 
make_shirt("Small","I Love TypeScript")