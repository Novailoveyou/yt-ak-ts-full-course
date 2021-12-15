interface UserInteface {
  getFullName(): string
}

class User implements UserInteface {
  protected firstName: string
  protected lastName: string
  readonly unchangableName: string
  static readonly MaxAge = 50

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

class Admin extends User {
  private editor: string

  setEditor(editor: string): void {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
  }
}

const user = new User('Monster', 'lessons')
console.log(user)
console.log(User.maxAge)

const admin = new Admin('Foo', 'Bar')
console.log(admin.editor)
