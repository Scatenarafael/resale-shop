import Banner from '@/components/Banner'
import Card from '@/components/Card'
import { homeFakeData } from '@/data/CartFakeData'
import { BodyCards } from '@/styles/pages/home'

export default function Home() {
  const cardsData = homeFakeData

  return (
    <>
      <Banner />
      <BodyCards>
        {cardsData.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              name={data.name}
              price={data.price}
              salesPrice={data.salesPrice}
            />
          )
        })}
      </BodyCards>
    </>
  )
}
