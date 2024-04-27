var userNames = ["Maham", "fahad", "Hassan", "Zohaib", "Adim"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Arrey in Empty We need to find some users!");
}
else {
    //Using Foreach Loop on Arrey
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
        }
        else
            console.log("Hello ".concat(oneUser, ", Thank you for logging in again."));
    });
}
