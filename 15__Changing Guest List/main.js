var guestList = ["Rehan", "Zohaib", "Hassan"];
var dontCome = guestList[1];
console.log(dontCome, "Nahi Ahh Sakta");
guestList.splice(1, 1, "Farooq");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would you like to dinner with me?")); });
