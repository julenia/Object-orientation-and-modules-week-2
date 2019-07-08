module.exports.data = [
  {
    name: "Ava",
    dateOfBirth: "1990-04-01",
    getBirthday: function() {
      return Date.parse(this.dateOfBirth);
    }
  },
  {
    name: "James",
    dateOfBirth: "1968-02-06",
    getBirthday: function() {
      return Date.parse(this.dateOfBirth);
    }
  },
  {
    name: "Danielle",
    dateOfBirth: "1987-09-15",
    getBirthday: function() {
      return Date.parse(this.dateOfBirth);
    }
  },
  {
    name: "Darnell",
    dateOfBirth: "1982-06-22",
    getBirthday: function() {
      return Date.parse(this.dateOfBirth);
    }
  }
]


module.exports.getUserBirthDate = function(user) {
  return Date.parse(user.dateOfBirth)
}
