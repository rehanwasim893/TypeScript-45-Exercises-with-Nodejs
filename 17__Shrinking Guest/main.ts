let guestList = ["Rehan","Zohaib","Hassan","Fakhar"];
let dontCome = guestList[1];
console.log(dontCome, "Nahi Ahh Sakta");
guestList.splice(1, 1, "Farooq");
console.log("Good News ! We have found a Bigger Table For Dinner.");
guestList.unshift("Ali");
guestList.push("Abu Bakar");
let middleIndex: number = Math.floor(guestList.length /2 );
guestList.splice(middleIndex, 0, "Wasim");
console.log("Updated List of our Guest");
guestList.forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with me?`));

console.log("unfortunately, The new dinner table wont arrive on table, so i can only invite two Guest to dinner with me.");
while(guestList.length > 2){
let removedGuest = guestList.pop();
console.log(`sorry, ${removedGuest} I cant invite you to dinner`);
}

console.log("Invitation to the Last 2 Guest");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);