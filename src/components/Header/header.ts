import { styled } from '@/styles'

export const HeaderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  width: '90%',
  margin: '0 auto',

  a: {
    margin: '0',
    padding: '0',
    textDecoration: 'none',
    color: '$gray900',
  },

  '.logo-nav': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
})

export const Logo = styled('p', {
  fontFamily: 'Poppins',
  fontSize: '$2xl',
  fontWeight: 'bold',
})

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-around',
  width: '60%',
})

export const CartMenuContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '30%',

  div: {
    margin: 0,
    padding: 0,
    width: '70%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRight: '1px solid $gray900',
  },
})
