import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Link,
  createIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import Header from '../components/SectionHeader'
import {FiArrowRight} from "react-icons/fi"
import Layout from '../components/Layout'

const About = () => {
    return(
      <Layout>
          <Container maxW={'7xl'}> 
          <Stack
            align={'center'}
            spacing={{ base: 4, md: 10 }}
            py={{ base: 8, md: 24 }}
            textAlign={{base:'center', md: "left" }}
            px={{ base: 4, md: 24 }}
            direction={{ base: 'column', md: 'row' }} position={'relative'}>
              <Header>About Me_</Header>
              <Flex
          order={1}
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}          
          pb={{base: 12, md: 0 }}>
          <Box
            position={'relative'}
            height={'200px'}
            width={'200px'}
            rounded={'lg'}
            boxShadow={'md'}
            bg="purple.500"
            >
            <Image position={'absolute'} width="200px" bottom={'0px'} height="300px" src={'/about1.png'} alt="Bello Ololade, Freelance Web desinger" />
           
          </Box>
        </Flex>
          </Stack>
          </Container>
      </Layout>
    )
}

export default About