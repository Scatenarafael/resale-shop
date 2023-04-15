import { styled } from '@/styles'

export const BtnContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  variants: {
    entity: {
      card: {
        height: '3rem',
        width: '5rem',
      },
      cartResume: {
        height: '2.5rem',
        width: '4.5rem',
      },
    },
  },

  margin: '0 0.5rem 0 0',
  backgroundColor: '$grayspecial300',
  borderRadius: '8px',

  div: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    padding: '0',
    height: '100%',
    width: '40%',
    color: '$gray900',
    background: 'transparent',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$gray100',
      borderRadius: '6px',
    },
  },
})
// display: 'flex',
// justify-content: 'space-between',
// align-items: 'center',

// variants: {

// }

// height: '${('props) => {
//   return props.entity === 'card' ? '3rem' : ''2'.5rem'
// }},
// width: '${('props) => {
//   return props.entity === 'card' ? '5rem' : ''4'.5rem'
// }},
// margin: '0' 0.5rem 0 0,
// background-color: '${('props) => props.theme['base-button']},
// border-radius: '8px',

// div {
//   width: '20'%,
//   display: 'flex',
//   justify-content: 'center',
//   align-items: 'center',
// }

// button {
//   display: 'flex',
//   justify-content: 'center',
//   align-items: 'center',
//   border: 'none',
//   padding: '0',
//   height: '100'%,
//   width: '40'%,
//   color: '${('props) => props.theme['card-btn-insert-hover-color']},
//   background: 'transparent',
//   cursor: 'pointer',

//   &:hover {
//     background-color: '${('props) => props.theme['base-hover']},
//     border-radius: '6px',
//   }
// }
