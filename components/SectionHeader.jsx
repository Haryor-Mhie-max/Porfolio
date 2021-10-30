import {
  Heading,
  Center,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'


const Header = ({children, ...rest}) => {
  return(
    <Heading color={useColorModeValue('gray.600', 'gray.200')}>
      <Center textAlign={'center'} px={{ base: 2, md: 24 }} py={4} {...rest}>
      <Text color="#8092BF">_</Text>{children}<Text color="#8092BF">_</Text>
      </Center>
    </Heading>
  )
}

export default Header