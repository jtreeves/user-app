// // Add all models
// const db = require('./models')

const db = require("./models");

// // Create a user inside users table
// db.user
//     .create({
//         firstName: 'Billy',
//         lastName: 'Bob',
//         age: 40,
//         email: 'notjr@jr.com'
//     })
//     .then(createdUser => {
//         console.log(createdUser.get())
//     })

// // Read from users table
// db.user
//     .findOne({
//         where: { firstName: 'Jackson' }
//     })
//     .then(foundUser => {
//         console.log(foundUser.get())
//     })

// // Find all users
// db.user.findAll().then(allUsers => { console.log(allUsers) })

// // Update a user
// db.user.update({
//     lastName: 'Bobby'
// }, {
//     where: { firstName: 'Billy' }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged)
// })

// // Delete a user
// db.user.destroy({
//     where: { lastName: 'Bobby' }
// }).then(numRowsDeleted => {
//     console.log(numRowsDeleted)
// })

// db.user.findOne().then((foundUser) => {
//     foundUser.createPet({
//         name: 'Violet',
//         species: 'Retriever'
//     })
// })

// db.user.findOne().then((foundUser) => {
//     foundUser.getPets().then((foundPets) => {
//         console.log(foundPets)
//     })
// })

// db.pet.findOne({
//     where: {
//         name: 'Violet'
//     }
// }).then((violet) => {
//     violet.getUser().then((foundUser) => {
//         console.log(foundUser)
//     })
// })

// db.pet.create({
//     name: 'Hercules',
//     species: 'Min pin'
// }).then((herc) => {
//     console.log(herc)
// })

db.pet.findOne({
    where: {
        name: 'Hercules'
    }
}).then((herc) => {
    // This will result in a race conflict because 83 will run before 82 finishes
    // const user = db.user.findOne()
    // herc.addUser(user)
    db.user.findOne().then((foundUser) => {
        herc.setUser(foundUser)
    })
})

// // DON'T NEED THE .THENS IN ORDER TO WORK, IT'S JUST FOR US TO SEE WHAT IT'S DOING