import { extendTheme } from '@chakra-ui/react'
import * as components from './tokens/components'

export const styles = {
  global: () => ({
    body: {
      background:
        'radial-gradient(57.89% 57.89% at 27.05% 0%, rgba(200, 200, 2, 0.24) 0%, rgba(100, 189, 206, 0) 100%)',
      backgroundSize: 'cover',
      color: 'whiteAlpha.900',
    },
    html: {
      background: 'linear-gradient(180deg, #000055 0%, #000000FF 100%)',
      scrollBehavior: 'smooth',
      height: '100%',
    },
    '.scroll-container': {
      visibility: 'hidden',
      paddingRight: '12px',
      transition: 'visibility .5s ease-in-out',
    },
    '.scroll-container::-webkit-scrollbar': {
      background: 'transparent',
      width: '8px',
      height: '8px',
    },
    '.scroll-container::-webkit-scrollbar-thumb': {
      border: 'none',
      boxShadow: 'none',
      background: 'blackAlpha.50',
      borderRadius: '8px',
      minHeight: '40px',
    },
    '.scroll-container::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'blackAlpha.800',
    },
    '.scroll-container > div,.scroll-container:hover,.scroll-container:focus': {
      visibility: 'visible',
    },
  }),
}

export const theme = extendTheme({
  styles,
  components,
})
