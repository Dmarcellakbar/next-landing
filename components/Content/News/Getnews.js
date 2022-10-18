import React from "react";
import axios from "axios";
import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Button,
    VStack,
    Box,
    Image
  } from '@chakra-ui/react';
 import dateFormat from "dateformat";
 import Link from "next/link";

export default class Getnews extends React.Component {
    state = {
        posts: []
      };
      componentDidMount() {
        axios
          .get(
            "https://blog.cfund.me/wp-json/wp/v2/posts?_fields=id,excerpt,content,title,date,_links,_embedded&per_page=4&_embed"
          )
          .then((res) => {
            // console.log(res.data, "data");
            const posts = res.data;
            this.setState({ posts });
          });
      }
    render() {
    // var desc = document.getElementById("content");
    const styling = {
        backgroundColor: '#011535',
        backgroundSize: 'cover',
        color: '#FFF'
    }

    const parse = require('html-react-parser');

    return (
          <section style={styling}>
             <Container maxW={'80rem'} pt={'8rem'} pb={'3rem'} verticalAlign={'center'} fontFamily='Poppins'>
            <VStack spacing={2} textAlign="center" mb={'4rem'}>
                <Heading as="h1" color={'white'} fontSize="2.88rem" fontWeight={'bold'} fontFamily='Poppins'>
                    News & Article
                </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} textAlign="left" pl={'3%'} pr={'3%'} > 
            {this.state.posts.map((post) => (
            <Link href={post._embedded["wp:featuredmedia"][0].link} id="button-test">
            <Box
                key={post}
                maxW={'445px'}
                w={'full'}
                h={'full'}
                boxShadow={'3xl'}
                rounded={'20'}
                p={6}
                overflow={'hidden'}
                bg={'#01264c'}
                color={'#FFF'}
                cursor={'pointer'}
                >
                <Box
                h={'stretch'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={4}
                pos={'relative'}>
                    <Image src={post._embedded["wp:featuredmedia"][0].source_url} style={{ layout: 'fill' }}/>
                </Box>
                <Stack>   
                <Box w='100%' p={'7%'} >
                        <Text as={'b'} fontSize={'16px'} fontWeight={'bold'}>{post.title.rendered}</Text>
                        <Text fontSize={'16px'} mt={'4'} color={'grey'}>
                            {dateFormat(post.date, "fullDate")}
                            </Text>
                        <br />
                        <Text fontSize={'16px'} noOfLines={'5'}>
                        {parse(post.excerpt.rendered)}
                        </Text>
                        </Box>
                </Stack>
            </Box>
            </Link>

            ))}
            </SimpleGrid>
            </VStack>
            <VStack spacing={2} textAlign="center" mt={'2rem'} mb={'2rem'}>
            <Link href={'https://blog.cfund.me/'} ><Button id='button-test2' p={'24px'} mb={'2rem'} color={'white'} backgroundColor={'#ffa520'} fontSize={'16px'}>View More</Button></Link>
            </VStack>
            
            </Container>
          </section>
    );
  }
}
