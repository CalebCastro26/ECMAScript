class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  speak() {
    return 'Hola'
  }

  greeting() {
    return `${this.speak()} ${this.name} como estas?`
  }

  get uAge() {
    return this.age
  }

  set uAge(newAge) {
    this.age = newAge
  }
}

const newUser = new User('Caleb', 26)
console.log(newUser.greeting())
console.log(newUser.uAge)
newUser.uAge = 36
console.log(newUser.uAge)
