type ID = string
type PopularTag = string
type MaybePopularTag = PopularTag | null

interface UserInterface {
  id: ID
  name: string
  surname: string
}

const popularTags: PopularTag[] = ['dragon', 'coffee']

const dragonsTag: MaybePopularTag = 'dragon'

let username: string = 'alex'

let pageName: string | number = '1'

let errorMessage: string | null = null

let user: UserInterface | null = null
