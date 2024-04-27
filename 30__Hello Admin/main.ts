let userName = ["Rehan","Ali","FArhan","Admin","Faheem"];

//Using Foreach Loop on Arrey
userName.forEach(oneUser =>{
    if (oneUser  === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else
    console.log(`Hello ${oneUser}, Thank you for logging in again`)
})