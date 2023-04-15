import { v4 as v4uuid } from 'uuid'

export interface IItemProps {
  id: string
  name: string
  description: string
  price: number
  salesPrice: number | null
}

export interface ICartItemProps {
  item: IItemProps
  qtd: number
}

export interface ICartState {
  cartItems: ICartItemProps[]
}

export const homeFakeData: IItemProps[] = [
  {
    id: v4uuid(),
    name: 'Geladeira Eletrolux 371l',
    description:
      'Labore ipsum anim in laboris nisi do. Incididunt elit consectetur sint fugiat occaecat veniam do. Esse est excepteur sit aliquip proident minim occaecat ex est ut laboris incididunt commodo. Pariatur voluptate incididunt incididunt aliquip magna do est consectetur veniam id. Dolor qui adipisicing consectetur irure in. Culpa dolor ipsum ex veniam reprehenderit ex Lorem excepteur anim ea commodo irure magna incididunt. Non mollit duis velit tempor reprehenderit ea ullamco labori',
    price: 1529,
    salesPrice: null,
  },
  {
    id: v4uuid(),
    name: 'Freezer Consul 440l',
    description:
      'Laborum anim veniam tempor irure dolore dolore in labore. Culpa voluptate consectetur mollit adipisicing laborum dolore nisi quis consectetur culpa deserunt duis dolore. Do elit duis do est in minim Lorem tempor quis exercitation non laboris. Sunt esse excepteur mollit dolor et dolore est non dolore. Cillum labore dolore culpa tempor tempor nisi nulla sint dolor incididunt labore. Eu velit mollit aliqua reprehenderit nulla velit excepteu',
    price: 1940,
    salesPrice: 1699.9,
  },
  {
    id: v4uuid(),
    name: 'Microondas Brastemp',
    description:
      'Commodo aute irure tempor velit laborum aute consequat consequat. Fugiat excepteur ullamco non veniam aliqua. Enim eu exercitation aliqua consequat id nisi reprehenderit consectetur dolor irure tempor. Occaecat incididunt qui cupidatat proident irure reprehenderit',
    price: 349.9,
    salesPrice: 199.9,
  },
  {
    id: v4uuid(),
    name: 'Lava e Seca Panasonic',
    description:
      'Duis eiusmod ipsum sint quis officia consequat do do esse id nisi elit amet. Sunt tempor nulla velit et velit voluptate in proident id ea exercitation nulla exercitation. Commodo excepteur commodo voluptate laboris quis dolore irure. Eiusmod excepteur excepteur tempor ut laborum et anim minim fugiat cillum fugiat sunt labore. Incididunt exercitation officia exercitation duis culpa occaecat nulla. Eiusmod sunt enim minim duis consequat ipsum cupidatat sit aliqua in veniam nulla pariatur. Nulla ipsum eiusmod eiusmod proident mollit.',
    price: 2499.9,
    salesPrice: null,
  },
  {
    id: v4uuid(),
    name: 'Fogão Agile Glass 4 Bocas',
    description:
      'Cupidatat consequat nostrud esse esse aute occaecat excepteur dolor exercitation eiusmod Lorem veniam aliqua. Sint ex adipisicing adipisicing sint occaecat culpa labore sit duis dolor commodo velit laboris. Excepteur occaecat fugiat occaecat voluptate excepteur aute sint consequat quis in',
    price: 989.9,
    salesPrice: 499.9,
  },
  {
    id: v4uuid(),
    name: 'TV Philco 52"',
    description:
      'Pariatur qui ipsum excepteur esse. Ex irure consectetur occaecat eu consequat Lorem consequat adipisicing ea voluptate est. Fugiat sint esse exercitation enim aute nostrud cillum aliqua id eu et. Aute enim magna officia eiusmod culpa. Eiusmod velit exercitation do incididunt nulla in. Veniam esse Lorem sit enim non veniam. Id nostrud voluptate nulla quis laboris nisi tempor dolore sint irure excepteur officia quis amet.',
    price: 1359.9,
    salesPrice: null,
  },
  {
    id: v4uuid(),
    name: 'Maquina de Lavar Consul 10kg',
    description:
      'Magna elit ut ullamco id duis aliquip laboris aliqua. Qui magna est id ullamco mollit dolore dolor cupidatat dolor sunt veniam. Ullamco dolore aute ut ipsum nulla dolor nisi in proident. Labore tempor duis laboris nulla ea magna aliqua et qui. Tempor mollit reprehenderit elit nostrud ullamco nulla. Nisi mollit dolor quis et tempor veniam sint incididunt anim ex veniam ad tempor. Sint commodo deserunt reprehenderit fugiat cupidatat aute',
    price: 699.9,
    salesPrice: null,
  },
  {
    id: v4uuid(),
    name: 'Máquina de café expresso Delongui',
    description:
      'Cillum nostrud deserunt pariatur qui et enim adipisicing enim proident consequat eu magna enim. Et proident sit minim ipsum veniam sit Lorem irure occaecat duis veniam. Eu officia mollit do qui excepteur elit consectetur sit adipisicing ad eu et elit.',
    price: 2989.9,
    salesPrice: null,
  },
  {
    id: v4uuid(),
    name: 'Fogão Agile Glass 4 Bocas',
    description:
      'Excepteur veniam qui id fugiat sint deserunt labore laborum quis nisi est consequat dolore labore. Et non aute labore consequat dolore occaecat quis consectetur elit eiusmod occaecat exercitation dolor. Ad laboris nostrud do elit consequat do consequat excepteur et ut est deserunt nostrud. Anim aute exercitation ea deserunt irure sint labore qui Lorem officia labore esse culpa quis. Voluptate fugiat reprehenderit aliquip dolor commodo proident elit aliquip. Et fugiat sint tempor fugiat quis ipsum velit',
    price: 799.9,
    salesPrice: 499.9,
  },
  {
    id: v4uuid(),
    name: 'Geladeira Eletrolux 371l',
    description:
      'Consequat dolore mollit mollit exercitation tempor sit esse laboris deserunt fugiat. Reprehenderit aute non esse eu anim laboris anim eu esse adipisicing. Aliqua in do eu fugiat. Eiusmod reprehenderit laboris veniam amet culpa. Adipisicing laboris ullamco sit sunt esse consectetur ad ex Lorem ipsu',
    price: 1529,
    salesPrice: null,
  },
]
