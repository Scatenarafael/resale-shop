import React from 'react'
import { CartMenuContainer, HeaderContainer, Logo, Nav } from './header'
import { BsCart3, BsPerson, BsFilterRight } from 'react-icons/bs'

export function Header() {
  return (
    <HeaderContainer>
      <div className="logo-nav">
        <Logo>RESALE-SHOP</Logo>
        <Nav>
          <div>Home</div>
          <div>Products</div>
          <div>Contacts</div>
        </Nav>
      </div>
      <CartMenuContainer>
        <div>
          <BsCart3 size={22} />
          <BsPerson size={22} />
        </div>
        <BsFilterRight size={22} />
      </CartMenuContainer>
    </HeaderContainer>
  )
}
