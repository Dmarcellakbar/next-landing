import React from 'react';
import { Box, Flex, useColorModeValue, HStack, Stack, Text, SimpleGrid, Button, VStack } from '@chakra-ui/react';
import bg from '../../../assets/images/bg-contact.png'
import Link from 'next/link';


export default function Moreinfo() {
    const stylingbg = {
        backgroundImage: `url('${bg.src}')`,
        // backgroundSize: 'cover',
        width: 'stretch',
        height: 'hug content',
        maxWidth: '80rem',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        paddingLeft: '2rem',
        paddingRight: '2rem'
    }
    const styling = {
        backgroundColor: '#011535',
        backgroundSize: 'cover',
    }

  return (
    <section style={styling} >
        <Box pt={'5%'} pb={'5%'} pl={'20%'} pr={'20%'} fontFamily={'Poppins'} w={'100%'} h={'100%'}>
        <VStack rounded={'20'}  style={stylingbg}>
            <Box py={6} >
                    <div style={{ textAlign: 'center', marginTop: '10%'}}>
                        <div style={{ lineHeight: '1.2' }}>
                        <Text as={'b'} fontSize='2.88rem' color={'white'} >
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
                <Box py={6} style={{ marginBottom: '10%' }}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <Link href='mailto:cs@cfund.id'><Button p={'24px'} mb={'2rem'} color={'white'} backgroundColor={'#ffa520'} fontSize={'16px'}>Chat with Us</Button></Link>
                        <Link href='mailto:cs@cfund.id'><Button p={'24px'} mb={'2rem'} color={'white'} backgroundColor={'#ffa520'} fontSize={'16px'}>Send Email</Button></Link>
                    </SimpleGrid>
                </Box>
        </VStack>
        </Box>
    </section>
  )
}
