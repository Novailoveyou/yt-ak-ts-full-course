const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)
  return {
    ...obj,
    id
  }
}

interface IUser<T, V> {
  name: string
  data: T
  meta: V
}

const user: IUser<{ meta: string }, string> = {
  name: 'Jack',
  data: {
    meta: 'foo'
  },
  meta: 'bar'
}

const user2: IUser<string[]> = {
  name: 'John',
  data: ['foo', 'bar', 'baz']
}

const result = addId<IUser>(user)

console.log('result', result)
