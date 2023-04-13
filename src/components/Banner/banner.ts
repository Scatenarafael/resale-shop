import { styled } from '@/styles'

export const BannerContainer = styled('div', {
  margin: '0 auto',
  width: '90%',
  height: '32rem',
  backgroundColor: '$green100',
  borderRadius: '20px',
  padding: '1.5rem',

  display: 'flex',
})

export const HeroContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '50%',
})

export const BannerTitle = styled('h1', {
  fontSize: 'calc(1.3 * $2xl)',
  fontWeight: 'bold',
})

export const HeroBannerStatistics = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  fontSize: '$2xl',

  '.count-products': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.2rem 2rem 0.2rem 0',
    borderRight: '2px solid black',
  },

  '.count-customers': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.2rem 0rem 0.2rem 2rem',
  },
})

export const SearchBannerInputContainer = styled('div', {
  width: '100%',
  height: '2rem',
  backgroundColor: '$gray100',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',

  input: {
    border: 'none',
    padding: '1rem',
    width: '93%',
    height: '100%',

    '&:placeholder': {
      color: '$gray800',
    },
  },

  button: {
    height: '100%',
    width: '7%',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$gray800',
    color: '$gray100',
    borderRadius: '8px',
    cursor: 'pointer',
  },
})

export const PreviewContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',

  '.background-preview-image': {
    filter: 'opacity(80%)',
    position: 'relative',
    bottom: '0',
    right: 'calc(-100%/2)',
  },
  '.preview-image': {
    position: 'absolute',
    bottom: '-40px',
    right: '-300px',
  },
})
