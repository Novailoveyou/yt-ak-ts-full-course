const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)
  return {
    ...obj,
    id
  }
}

interface IUser {
  name: string
}

const user: IUser = {
  name: 'Jack'
}

const result = addId<IUser>(user)

console.log('result', result)
