import React from 'react'
import {
  CardBody,
  CardContainer,
  CardDetails,
  CardFooter,
  CardHeader,
} from './card'
import Image from 'next/image'
import QuantityControlBtn from '../QuantityControlBtn'
import { priceFormat } from '@/utils/format'
import { MdStars } from 'react-icons/md'

export interface ICardProps {
  name: string
  price: number
  salesPrice: number | null
}

export default function Card({ name, price, salesPrice }: ICardProps) {
  return (
    <CardContainer>
      {salesPrice && <MdStars size={50} className="card-icon" />}
      <Image
        src={`/products/${name}.jpg`}
        alt={name}
        priority
        height="150"
        width="200"
      />
      <CardDetails>
        <CardHeader>{name}</CardHeader>
        <CardBody>
          {salesPrice ? (
            <>
              <p>
                De:{' '}
                <span className="full-price-on-sale">{priceFormat(price)}</span>
              </p>
              <p>
                Por:{' '}
                <span className="sale-price-on-sale">
                  {priceFormat(salesPrice)}
                </span>
              </p>
            </>
          ) : (
            <p>
              Por:{' '}
              <span className="full-price-no-sale">{priceFormat(price)}</span>
            </p>
          )}
        </CardBody>
        <CardFooter>
          <QuantityControlBtn />
        </CardFooter>
      </CardDetails>
    </CardContainer>
  )
}
