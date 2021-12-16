const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)
  return {
    ...obj,
    id
  }
}

interface IUser<T> {
  name: string
  data: T
}

const user: IUser<{ meta: string }> = {
  name: 'Jack',
  data: {
    meta: 'foo'
  }
}

const user2: IUser<string[]> = {
  name: 'John',
  data: ['foo', 'bar', 'baz']
}

const result = addId<IUser>(user)

console.log('result', result)
