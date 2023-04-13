import React from 'react'
import { CartMenuContainer, HeaderContainer, Logo, Nav } from './header'
import { BsCart3, BsPerson, BsFilterRight } from 'react-icons/bs'
import ResaleLink from '../ResaleLink'

export function Header() {
  return (
    <HeaderContainer>
      <div className="logo-nav">
        <Logo>RESALE-SHOP</Logo>
        <Nav>
          <div>
            <ResaleLink href="#" content="Início" type="word" />
          </div>
          <div>
            <ResaleLink href="#" content="Produtos" type="word" />
          </div>
          <div>
            <ResaleLink href="#" content="Contato" type="word" />
          </div>
        </Nav>
      </div>
      <CartMenuContainer>
        <div>
          <ResaleLink href="#" content={<BsCart3 size={22} />} type="icon" />
          <ResaleLink href="#" content={<BsPerson size={22} />} type="icon" />
        </div>
        <ResaleLink
          href="#"
          content={<BsFilterRight size={22} />}
          type="icon"
        />
      </CartMenuContainer>
    </HeaderContainer>
  )
}
