// function getBirthday() {
//   return Date.parse(this.dateOfBirth)
// }

// module.exports.data = [
//   {
//     name: "Ava",
//     dateOfBirth: "1990-04-01",
//     getBirthday
//   },
//   {
//     name: "James",
//     dateOfBirth: "1968-02-06",
//     getBirthday
//   },
//   {
//     name: "Danielle",
//     dateOfBirth: "1987-09-15",
//     getBirthday
//   },
//   {
//     name: "Darnell",
//     dateOfBirth: "1982-06-22",
//     getBirthday
//   }
// ]

function User(name, dateOfBirth) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.getBirthday = function() {
    return Date.parse(this.dateOfBirth);
  }
}

module.exports.data = [
  new User("Ava", "1990-04-01"),
  new User("James", "1968-02-06"),
  new User("Danielle", "1987-09-15"),
  new User("Darnell", "1982-06-22")
]