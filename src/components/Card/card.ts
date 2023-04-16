import { styled } from '@/styles'

export const CardContainer = styled('div', {
  position: 'relative',
  height: '20rem',
  width: '15rem',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '15px',
  border: '2px solid $gray900',
  backgroundColor: '$white',

  a: {
    height: '50%',
    width: 'auto',
    maxWidth: '100%',
    margin: '0.2rem 0',
    cursor: 'pointer',
    img: {
      width: 'auto',
      maxWidth: '100%',
      height: '100%',
      borderRadius: '15px',
    },
  },

  '.card-icon': {
    position: 'absolute',
    top: '-11px',
    right: '-11px',
    color: '$golden300',
  },
})

export const CardDetails = styled('section', {
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CardHeader = styled('header', {
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
})

export const CardBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  color: '$gray800',
  '.full-price-on-sale': {
    color: '$gray300',
    textDecoration: 'line-through',
  },
  '.sale-price-on-sale': {
    fontWeight: 'bold',
    color: 'red',
  },
  '.full-price-no-sale': {
    fontWeight: 'bold',
    color: 'red',
  },

  p: {
    margin: '0 auto',
  },
})

export const CardFooter = styled('footer', {})
