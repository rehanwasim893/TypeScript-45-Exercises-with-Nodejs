// Arey of current users
let current_users = ['Usman','Areeb','Zain','Uzma','Osama'];
// Arrey of new_users
let new_users = ['Rehan','Areeb','farhan','Uzma','Zain',];
// loop through new_users to check for usernames availibility
new_users.forEach(new_one_users => {

    // MAking a condition for username already exist and save in our_condition available
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_users.toLowerCase())
    
    // Print different messages using If-Else Statement
    if(our_condition){
        console.log( `Sorry ${new_one_users} is already taken!` )
    }else{
        console.log(`This username ${new_one_users} is available`)
    }
})

