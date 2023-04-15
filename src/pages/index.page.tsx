import Banner from '@/components/Banner'
import Card from '@/components/Card'
import { Header } from '@/components/Header'
import { homeFakeData } from '@/data/CartFakeData'
import { BodyCards } from '@/styles/pages/home'

export default function Home() {
  const cardsData = homeFakeData

  return (
    <>
      <Header />
      <Banner />
      <BodyCards>
        {cardsData.map((data) => {
          return (
            <Card
              key={data.id}
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
