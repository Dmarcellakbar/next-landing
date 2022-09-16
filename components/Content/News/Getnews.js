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
  } from '@chakra-ui/react';
 import dateFormat from "dateformat";

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
            console.log(res.data, "data");
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
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} textAlign="left" pl={'3%'} pr={'3%'} > 
            {this.state.posts.map((post) => (
            <Box
                key={post}
                maxW={'445px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'20'}
                p={6}
                overflow={'hidden'}
                bg={'#01264c'}
                color={'#FFF'}
                >
                <a href={post._embedded["wp:featuredmedia"][0].link} id="button-test">
                <Box
                h={'stretch'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={4}
                pos={'relative'}>
                    <img src={post._embedded["wp:featuredmedia"][0].source_url} style={{ layout: 'fill' }}/>
                </Box>
                <Stack>   
                <Box w='100%' p={'7%'} >
                        <Text as={'b'} fontSize={'16px'} fontWeight={'bold'}>{post.title.rendered}</Text>
                        <Text fontSize={'16px'} mt={'4'} color={'grey'}>
                            {dateFormat(post.date, "fullDate")}
                            </Text>
                        <br />
                        <Text fontSize={'16px'} >
                        {parse(post.excerpt.rendered)}
                        </Text>
                        </Box>
                </Stack>
                </a>
            </Box>
            ))}
            </SimpleGrid>

            {/* <div style={{ color: "blue" }}> {post.title.rendered} </div>
            <div>{post.excerpt.rendered}</div>
            <div><img src={post._embedded["wp:featuredmedia"][0].source_url}/></div> */}

            
            </Container>
          </section>
    );
  }
}
