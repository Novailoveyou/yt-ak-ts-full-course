class User {}

interface IUser {
  name: string
  age?: number
  getMessage(): string
}

const user: IUser = {
  name: 'Nover',
  age: 24,
  getMessage() {
    return 'Hello ' + name
  }
}

const user2: IUser = {
  name: 'Jack',
  getMessage() {
    return 'Hello ' + name
  }
}

console.log(user.getMessage())
