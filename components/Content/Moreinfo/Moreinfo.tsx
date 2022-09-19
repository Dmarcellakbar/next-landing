import React from 'react';
import { Box, Flex, useColorModeValue, HStack, Stack, Text, SimpleGrid, Button, VStack, Center, Container, Spacer } from '@chakra-ui/react';
import bg from '../../../assets/images/bg-contact2.png'
import Link from 'next/link';
import { ChatIcon, EmailIcon } from '@chakra-ui/icons';


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
    <VStack spacing={0} textAlign="center" pt={'3rem'} px={'2rem'}>
        <VStack rounded={'20'} style={stylingbg} w={'stretch'} maxW={'80rem'}>
            <Box py={0}>
                    <div style={{ textAlign: 'center', marginTop: '2rem'}}>
                        <div style={{ lineHeight: '1.2' }}>
                        <Text as={'b'} fontSize='2.5rem' color={'white'} >
                            Need more information?
                        </Text>
                        </div>
                        <Text as={'b'} fontSize='32px' color={'white'}>
                            let's talk with us
                        </Text>
                    </div>
                </Box>
                <VStack>
                <HStack>
                <Box py={6} style={{ marginBottom: '2rem' }}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={15}>
                        <Link href={'https://go.crisp.chat/chat/embed/?website_id=552d54a9-3fee-4c73-94f8-19357f185101'} ><Button id='button-test2' p={'24px'} mb={'2rem'} color={'white'} backgroundColor={'#ffa520'} fontSize={'16px'}><ChatIcon/>Chat with Us</Button></Link>
                        <Link href='mailto:cs@cfund.id'><Button id='button-test3' variant='outline' p={'24px'} mb={'2rem'} color={'#ffa520'} borderColor={'#ffa520'}  fontSize={'16px'}><EmailIcon/>Send Email</Button></Link>
                    </SimpleGrid>
                </Box>
                </HStack>
                </VStack>
        </VStack>
    </VStack>
    </section>
  )
}
