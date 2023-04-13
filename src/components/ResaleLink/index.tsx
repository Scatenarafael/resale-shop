import React, { ReactNode } from 'react'
import { ResaleLinkContainer } from './resaleLink'
import { LinkProps } from 'next/link'

interface IResaleLinkProps extends LinkProps {
  content: string | ReactNode
  type: 'word' | 'icon'
}

export default function ResaleLink({
  content,
  type,
  href,
  ...props
}: IResaleLinkProps) {
  return (
    <ResaleLinkContainer type={type} href={href}>
      {content}
    </ResaleLinkContainer>
  )
}
