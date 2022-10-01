import { extendTheme } from "@chakra-ui/react"
import * as components from './tokens/components'

export const styles = {
  global: () => ({
    body: {
      backgroundColor: 'gray.800',
      backgroundSize: 'cover',
      color: 'whiteAlpha.900'
    },
    html: {
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
  components
})