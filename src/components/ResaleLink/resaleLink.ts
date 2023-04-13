import { styled } from '@/styles'
import Link from 'next/link'

export const ResaleLinkContainer = styled(Link, {
  variants: {
    type: {
      word: {
        paddingBottom: '0.5rem',
        '&:hover': {
          borderBottom: '2px solid $golden300',
        },
      },
      icon: {
        paddingBottom: '0',
      },
    },
  },

  textDecoration: 'none',
  color: '$gray900',

  '&:hover': {
    fontWeight: 'bold',
    color: '$golden300',
  },

  // '&:active': {
  //   color: '$golden300',
  //   borderBottom: '2px solid $golden300',
  // },
})
