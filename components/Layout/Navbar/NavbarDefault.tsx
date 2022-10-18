import {
    Box,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Stack,
    Container,
  } from '@chakra-ui/react';
  import {  CloseIcon } from '@chakra-ui/icons';
  import { Link } from 'react-scroll'
  import Image from 'next/image'
  import Logo from '../../../assets/images/cfund-text.png';
  import { AiFillAppstore } from 'react-icons/ai';
  import NextLink from 'next/link'
  export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box bg='#011535' h={'hug content'} w={'stretch'} maxW={'100%'} color={'white'} fontWeight={'bold'} fontSize={'16px'} position={'fixed'} zIndex={'1'}>
          <Container w={'100%'} h={'stretch'} maxW={'80rem'} >
          <HStack h={16} alignItems='center' justifyContent={'space-between'} mr={'2%'}>          
              <HStack spacing={8} alignItems={'center'}>
              <Box  h={'30px'} w={'130px'} p='1' cursor={'pointer'}>
                  <NextLink href="/" >
                      <Image style={{ height: '24px', width: 'auto' }} className='responsive' src={Logo}/>
                  </NextLink>
              </Box>
              </HStack>
              <HStack as={'nav'}
                  fontFamily={'Poppins'}
                  spacing={5}
                  display={{ base: 'none', md: 'flex' }}
                  fontWeight={'semibold'}
                  fontSize={'16px'}
                  alignItems={'center'}
                  >
                  <Box cursor={'pointer'} w={'100%'}>
                  <NextLink href="/" >
                      Home
                  </NextLink>
                  </Box>
                  <Box cursor={'pointer'} w={'100%'}>
                  <NextLink href="/" >
                      Performance
                  </NextLink>
                  </Box>
                  <Box cursor={'pointer'} w={'100%'}>
                  <NextLink href="/" >
                      HowTo
                  </NextLink>
                  </Box>
                  <Box cursor={'pointer'} w={'100%'}>
                  <NextLink href="/" >
                      Terms
                  </NextLink>
                  </Box>
                  <Box cursor={'pointer'} w={'100%'}>
                  <NextLink href="/" >
                      News
                  </NextLink>
                  </Box>
                  <Box cursor={'pointer'} w={'100%'}>
                  <NextLink href="/" >
                      FAQ
                  </NextLink>
                  </Box>
                  <NextLink href='login' style={{ paddingRight: '15px' }}>
                      <Button id='button-test2' color='white' bgColor='#FFA520' variant='solid' w={'100%'} fontFamily={'Poppins'}>
                          Login
                      </Button>
                  </NextLink>
                  </HStack>
              <IconButton
              style={{ backgroundColor: '#011535' }}
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <AiFillAppstore size={'sm'}/>}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              />
              </HStack>
  
              {isOpen ? (
              <Box pb={4} display={{ md: 'none' }} fontSize={'24px'} fontWeight={'semibold'}>
              <Stack as={'nav'} spacing={4} >
                  <Box cursor={'pointer'}>
                  <NextLink href="/" >
                      Home
                  </NextLink>
                  </Box>
                  <Box cursor={'pointer'}>
                  <NextLink href="/" >
                      Performance
                  </NextLink>
                  </Box>
                  <Box cursor={'pointer'}>
                  <NextLink href="/" >
                      How to
                  </NextLink>
                  </Box>
                  <Box cursor={'pointer'}>
                  <NextLink href="/" >
                      Terms
                  </NextLink>
                  </Box>
                  <Box cursor={'pointer'}>
                  <NextLink href="/" >
                      News
                  </NextLink>
                  </Box>
                  <Box cursor={'pointer'}>
                  <NextLink href="/" >
                      FAQ
                  </NextLink>
                  </Box>
                  <NextLink  href='login'>
                      <Button id='button-test2' color='white' bgColor='#FFA520' variant='solid' w={'100%'}>
                          Login
                      </Button>
                  </NextLink>
              </Stack>
              </Box>
              ) : null}      
          </Container>
        
        </Box>
    );
  }