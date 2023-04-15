import { styled } from '..'

export const BodyCards = styled('div', {
  width: '90%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: '2rem',
  rowGap: '1rem',
  margin: 'auto',
  padding: '5rem',
})
