var userName = ["Rehan", "Ali", "FArhan", "Admin", "Faheem"];
//Using Foreach Loop on Arrey
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else
        console.log("Hello ".concat(oneUser, ", Thank you for logging in again"));
});
