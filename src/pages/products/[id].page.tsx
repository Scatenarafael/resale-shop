import React from 'react'
import { ProductsContainer } from './products'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IItemProps, homeFakeData } from '@/data/CartFakeData'

export interface IProductProps {
  product: IItemProps
}

export default function Product({ product }: IProductProps) {
  return (
    <ProductsContainer>
      <div>Product: {product?.name}</div>
    </ProductsContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = !params?.id ? '' : params?.id

  const allProducts = homeFakeData
  console.log('allProducts', allProducts)

  const product = allProducts.filter((prod) => {
    console.log('>>>>>>>>>>', prod.id)
    return prod.id === productId
  })

  console.log('productId', productId)
  console.log('product', product)
  return {
    props: {
      product: allProducts[0],
      // product: product[0],
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
