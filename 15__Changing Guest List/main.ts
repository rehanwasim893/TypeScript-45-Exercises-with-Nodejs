let guestList = ["Rehan","Zohaib","Hassan"];
let dontCome = guestList[1];
console.log(dontCome, "Nahi Ahh Sakta");
guestList.splice(1, 1, "Farooq");
guestList.forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with me?`));