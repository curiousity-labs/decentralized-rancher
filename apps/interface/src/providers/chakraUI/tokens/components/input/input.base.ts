import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const disabled = {
  cursor: 'default',
  bg: "blackAlpha.400",
  color: "gray.200",
  _placeholder: {
    color: 'gray.100'
  }

}

const loading = {}

const baseStyle = definePartsStyle({
  field: {

    borderRadius: '4px',
    color: 'black.900',
    bg: 'white',
    outline: 'none',
    _invalid: {
      border: '1px solid',
      borderColor: 'red.300'
    },
    _placeholder: {
      color: 'gray.300'
    },
    _hover: {
      _disabled: {
        ...disabled,
        _loading: loading
      },
    },
    _disabled: {
      ...disabled,
      _loading: loading
    },
    _focus: {
      outlineStyle: 'none'
    },
  }
})

export default baseStyle