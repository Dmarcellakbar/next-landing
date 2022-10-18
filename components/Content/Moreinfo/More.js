import React from 'react';
import { Box, Flex, useColorModeValue, HStack, Stack, Text, SimpleGrid, Button, VStack, Center, Container, Spacer } from '@chakra-ui/react';
import bg from '../../../assets/images/bg-contact2.png'
import Link from 'next/link';
import { ChatIcon, EmailIcon } from '@chakra-ui/icons';



export default class Getnews extends React.Component {
    render() {
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
                        <VStack style={{ textAlign: 'center', marginTop: '2rem'}}>
                            <Box style={{ lineHeight: '1.2' }}>
                            <Text as={'b'} fontSize='2.5rem' color={'white'} >
                                Need more information?
                            </Text>
                            </Box>
                            <Text as={'b'} fontSize='32px' color={'white'}>
                                let's talk with us
                            </Text>
                        </VStack>
                    </Box>
                    <VStack>
                    <HStack>
                    <Box py={6} style={{ marginBottom: '2rem' }}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={15}>
                            <Button onClick={()=> {
                                if (typeof window !== "undefined"){
                                    window.$crisp.push(['do', 'chat:open'])
                                }
                            }}
                            gap={'12px'} id='button-test2' p={'24px'} mb={'2rem'} color={'white'} backgroundColor={'#ffa520'} fontSize={'16px'}>
                                <ChatIcon/><Text>Chat with Us</Text>
                                </Button>
                            <Link href='mailto:cs@cfund.id'><Button gap={'12px'} id='button-test3' variant='outline' p={'24px'} mb={'2rem'} color={'#ffa520'} borderColor={'#ffa520'}  fontSize={'16px'}>
                                <EmailIcon/><Text>Send Email</Text>
                                </Button></Link>
                        </SimpleGrid>
                    </Box>
                    </HStack>
                    </VStack>
            </VStack>
        </VStack>
        </section>
    );
  }
}
