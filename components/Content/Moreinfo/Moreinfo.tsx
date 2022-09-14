import React from 'react';
import { Box, Flex, useColorModeValue, HStack, Stack, Text, SimpleGrid, Button, VStack, Center, Container } from '@chakra-ui/react';
import bg from '../../../assets/images/bg-contact.png'
import Link from 'next/link';


export default function Moreinfo() {
    const stylingbg = {
        backgroundImage: `url('${bg.src}')`,
        backgroundSize: 'cover',
    }
    const styling = {
        backgroundColor: '#011535',
        backgroundSize: 'cover',
    }

  return (
    <section style={styling} >
    <VStack spacing={2} textAlign="center" pt={'8rem'}>
        <VStack rounded={'20'}  style={stylingbg} w={'auto'}>
            <Box py={6} px={20}>
                    <div style={{ textAlign: 'center', marginTop: '10%'}}>
                        <div style={{ lineHeight: '1.2' }}>
                        <Text as={'b'} fontSize='2.5rem' color={'white'} >
                            Need more information?
                        </Text>
                        </div>
                        <br />
                        <br />
                        <Text as={'b'} fontSize='32px' color={'white'}>
                            let's talk with us
                        </Text>
                    </div>
                </Box>
                <HStack>
                <Box py={6} style={{ marginBottom: '2rem' }}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={15}>
                        <Link href='mailto:cs@cfund.id'><Button id='button-test2' p={'24px'} mb={'2rem'} color={'white'} backgroundColor={'#ffa520'} fontSize={'16px'}>Chat with Us</Button></Link>
                        <Link href='mailto:cs@cfund.id'><Button id='button-test2' p={'24px'} mb={'2rem'} color={'white'} backgroundColor={'#ffa520'} fontSize={'16px'}>Send Email</Button></Link>
                    </SimpleGrid>
                </Box>
                </HStack>
        </VStack>
    </VStack>
    </section>
  )
}
