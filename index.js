// Add all models
const db = require('./models')

// Create a user inside users table
db.user
    .create({
        firstName: 'Billy',
        lastName: 'Bob',
        age: 40,
        email: 'notjr@jr.com'
    }).then(createdUser => {
        console.log(createdUser.get())
    })

// Read from users table
db.user
    .findOne({
        where: { firstName: 'Jackson' }
    })
    .then(foundUser => {
        console.log(foundUser.get())
    })

// Find all users
db.user.findAll().then(allUsers => { console.log(allUsers) })

// Update a user
db.user.update({
    lastName: 'Bobby'
}, {
    where: { firstName: 'Billy' }
}).then(numRowsChanged => {
    console.log(numRowsChanged)
})

// Delete a user
db.user.destroy({
    where: { lastName: 'Bobby' }
}).then(numRowsDeleted => {
    console.log(numRowsDeleted)
})

// DON'T NEED THE .THENS IN ORDER TO WORK, IT'S JUST FOR US TO SEE WHAT IT'S DOING