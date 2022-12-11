import { Center } from '@chakra-ui/react'
import Navigation from '../../components/home/navigation'
import { Logo } from '../../components/ui/Logo'

const Home = () => (
  <Center flexDirection='column' gap='1rem'>
    <Logo size='lg' />
    <Navigation />
  </Center>
)

export default Home
