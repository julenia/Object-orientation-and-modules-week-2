const getUserBirthDate = require('./data/getUserBirthDate')

let currentDate = Date.now
module.exports.changeCurrentDate = function(newCurrentDate) {
  currentDate = newCurrentDate
}

module.exports.printAges = (users) => {
  const userAgeStrings = []
  // Loop over the users array using for...of
  for (let user of users) {
    // This is called a destructuring assignment.
    // It unpacks the user properties into new variables.
    // Now we can refer to `user.name` simply as `name`.
    const { name, dateOfBirth } = user

    // We extract the date of birth using a specialized function from another module.
    const birthday = getUserBirthDate(user)
    
    // How long they've lived in milliseconds.
    const howLongTheyLived = currentDate() - birthday
    const unixEpochPlusTheirLifetime = new Date(howLongTheyLived)
    
    // Unix epoch is 01-01-1970
    // Math.abs is used in case they were born before 1970
    const theirAge = Math.abs(unixEpochPlusTheirLifetime.getUTCFullYear() - 1970)
    userAgeStrings.push(`${name} is ${theirAge} years old.`)
  }
  return userAgeStrings
}
