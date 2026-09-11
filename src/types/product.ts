export interface Product {
  id: string
  image: string
  price: number
  name: string
  /** Рейтинг от 0 до 5. */
  rating: number
  reviewCount: number
  isSaved: boolean
}
