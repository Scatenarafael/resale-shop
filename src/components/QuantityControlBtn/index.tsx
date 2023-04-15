import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import React from 'react'
import { BtnContainer } from './styles'

interface IQuantityControlBtnProps {
  quantity?: number
  entity?: 'card' | 'cartResume'
  increaseMainItemQuantity?: () => void
  decreaseMainItemQuantity?: () => void
  increaseCartItemQuantity?: () => void
  decreaseCartItemQuantity?: () => void
}

export default function QuantityControlBtn({
  quantity = 1,
  entity = 'card',
  increaseMainItemQuantity,
  decreaseMainItemQuantity,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
}: IQuantityControlBtnProps) {
  return (
    <BtnContainer entity={entity}>
      <button
        onClick={() => {
          entity === 'card'
            ? decreaseMainItemQuantity && decreaseMainItemQuantity()
            : decreaseCartItemQuantity && decreaseCartItemQuantity()
        }}
      >
        <AiOutlineMinus size={entity === 'card' ? 20 : 14} />
      </button>
      <div>{quantity}</div>
      <button
        onClick={() => {
          entity === 'card'
            ? increaseMainItemQuantity && increaseMainItemQuantity()
            : increaseCartItemQuantity && increaseCartItemQuantity()
        }}
      >
        <AiOutlinePlus size={entity === 'card' ? 20 : 14} />
      </button>
    </BtnContainer>
  )
}
