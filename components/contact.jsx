import {
  Container,
  Flex,
  Box,
  Text,
  Button,
  VStack,
  HStack,
  useColorModeValue,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdLocationOn,
  MdEmail,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import Header from './SectionHeader'
import Image from 'next/image'

export default function contact() {
  return (
    <Container py={{ sm: 4, md: 5}} id="contact" bg={useColorModeValue('gray.100', 'gray.800')}  maxW="full" mt={0} centerContent overflow="hidden">
      <Header alignItems="center">Contact me</Header>
        <Text textAlign={'center'} color={useColorModeValue('gray.600', 'gray.300')}  lineHeight={1.1}
            fontSize={{ base: 'md', sm: 'lg', lg: '3xl' }}>Got a cool project in mind ?</Text>
      <Flex>
        <Box
          borderRadius="lg"
          p={{ sm: 2, md: 5, lg: 16 }}>
          <Box>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box pos={'relative'}>
                  <Image width="400px" height="400px" src='/contact.png'/>
                  {/* <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3}  alignItems="left">
                    <Link href="+2348182716135"> 
                      <Button
                        size="md"
                        height="48px"
                        color="#8092BF"
                        variant="ghost"
                        _hover={{ textDecorationLine: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone size="20px" />}>
                        +2348182716135
                      </Button>
                      </Link>
                      <Link href="mailto:bellololade2017@gmail.com"> 
                      <Button
                        size="md"
                        color="#8092BF"
                        height="48px"
                        variant="ghost"
                        _hover={{ textDecorationLine: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail size="20px" />}>
                        bellololade2017@gmail.com
                      </Button>
                      </Link>
                      <Link>
                      <Button
                        size="md"
                        height="48px"
                        color="#8092BF"
                        variant="ghost"
                        leftIcon={<MdLocationOn size="20px" />}>
                        Ogun State, Nigeria.
                      </Button>
                      </Link>
                    </VStack>
                  </Box> */}
                </Box>
              </WrapItem>
              <WrapItem px={{ base: 16, md: 24 }}  align={'center'}>
                <Box align={'center'} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="lg">
                  <Box m={8} >
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input name="name" type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input name="email" type="email" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#90A0C7"
                          colorScheme={'purple'}
                          color="gray.200"
                          _hover={{ bg:"#50679F"}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}