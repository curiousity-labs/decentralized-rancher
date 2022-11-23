import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const base = defineStyle({
  fontSize: "1.25rem",
  height: '4rem',
  borderRadius: "0.5rem",
  p: "1rem"
})

const sizes = {
  base: definePartsStyle({ field: base, addon: base })
}

export default sizes