class User {
  protected firstName: string
  protected lastName: string
  readonly unchangableName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.unchangableName = firstName
  }

  changeUnchangableName(): void {
    // this.unchangableName = 'foo'
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}

const user = new User('Monster', 'lessons')
console.log(user.firstName)
