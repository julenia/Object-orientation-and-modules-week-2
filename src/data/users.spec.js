const assert = require("assert")
const userData1 = require("./users").data
const userData2 = require("./users2").data
const user1= require("./users")
const user2 = require("./users2")

describe("users data 1", function() {
  it("is complete/valid", () => {
    userData1.forEach(user => {
      assert.ok(user.name, "user name property should be a non-empty string")
      assert.ok(
        typeof user.dateOfBirth === "string",
        "user dateOfBirth property should be a non-empty string"
      )
    })
  })
})

describe("users data 2", function() {
  it("is complete/valid", () => {
    userData2.forEach(user => {
      assert.ok(user.name, "user name property should be a non-empty string")
      assert.ok(
        user.birthday && typeof user.birthday === "number",
        "user birthday property should be a non-zero number"
      )
    })
  })
})

describe("users 1 getBirthDate", function(){
  it("is valid", () => {
    assert.equal(user1.getUserBirthDate({
      name: "Ava",
      dateOfBirth: "1990-04-01"
    }), 638928000000)
  })
})

describe("users 2 getBirthDate", function(){
  it("is valid", () => {
    assert.equal(user2.getUserBirthDate({
      name: "Ava",
      birthday: 638928000000
    }), 638928000000)
  })
})