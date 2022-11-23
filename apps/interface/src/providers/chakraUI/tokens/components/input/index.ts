import baseStyle from './input.base'
import sizes from './input.sizes'
import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const inputstyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: { size: 'base'},
})

export default inputstyles