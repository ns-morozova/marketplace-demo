import minecraftImage from '@/assets/images/products/product1.jpeg'
import valorantImage from '@/assets/images/products/product2.jpeg'
import counterStrikeImage from '@/assets/images/products/product3.jpeg'
import dotaImage from '@/assets/images/products/product4.jpeg'
import genshinImage from '@/assets/images/products/product5.jpeg'
import subwaySurfersImage from '@/assets/images/products/product6.jpeg'
import counterStrikeItemsImage from '@/assets/images/products/product7.jpeg'
import playStationImage from '@/assets/images/products/product8.jpeg'
import nintendoImage from '@/assets/images/products/product9.png'
import type { Product } from '@/types/product'

// Демонстрационные данные; цены указаны в рублях.
export const products: Product[] = [
  {
    id: 'valorant',
    image: valorantImage,
    price: 990,
    name: 'Valorant — набор очков',
    rating: 4.7,
    reviewCount: 96,
    isSaved: false,
  },
  {
    id: 'genshin-artbook',
    image: genshinImage,
    price: 3490,
    name: 'Genshin Impact — артбук, том 2',
    rating: 4.9,
    reviewCount: 58,
    isSaved: true,
  },
  {
    id: 'subway-surfers',
    image: subwaySurfersImage,
    price: 390,
    name: 'Subway Surfers — набор монет',
    rating: 4.5,
    reviewCount: 43,
    isSaved: false,
  },
  {
    id: 'counter-strike-items',
    image: counterStrikeItemsImage,
    price: 790,
    name: 'Counter-Strike: GO — набор предметов',
    rating: 4.8,
    reviewCount: 115,
    isSaved: false,
  },
  {
    id: 'playstation',
    image: playStationImage,
    price: 2990,
    name: 'PlayStation — подарочная карта',
    rating: 4.9,
    reviewCount: 207,
    isSaved: true,
  },
  {
    id: 'nintendo',
    image: nintendoImage,
    price: 1990,
    name: 'Nintendo Switch — подарочная карта',
    rating: 4.7,
    reviewCount: 64,
    isSaved: false,
  },
  {
    id: 'minecraft',
    image: minecraftImage,
    price: 2490,
    name: 'Minecraft: Java & Bedrock Edition',
    rating: 4.8,
    reviewCount: 124,
    isSaved: false,
  },
  {
    id: 'counter-strike',
    image: counterStrikeImage,
    price: 1490,
    name: 'Counter-Strike: GO',
    rating: 4.6,
    reviewCount: 82,
    isSaved: true,
  },
  {
    id: 'dota',
    image: dotaImage,
    price: 590,
    name: 'Dota 2 — набор предметов',
    rating: 4.9,
    reviewCount: 37,
    isSaved: false,
  },
]
