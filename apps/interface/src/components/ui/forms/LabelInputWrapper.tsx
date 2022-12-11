import { FormLabel, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const LabelInputWrapper = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <FormLabel position='relative' my='1rem'>
      <Text
        position='absolute'
        top='-0.74rem'
        bg='#FFF'
        px='1rem'
        fontFamily='mono'
        borderTopRightRadius='1rem'
      >
        {label}
      </Text>
      {children}
    </FormLabel>
  )
}
