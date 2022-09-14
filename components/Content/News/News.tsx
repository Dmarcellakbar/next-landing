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
  import Image from 'next/image';
  import NewsImage from '../../../assets/images/news.png'
  import NextLink from 'next/link'

  export default function News() {
    const styling = {
        backgroundColor: '#011535',
        backgroundSize: 'cover',
        color: '#FFF'
    }
    return (
      <section style={styling}>
      <Container maxW={'80rem'} pt={'8rem'} pb={'8rem'} verticalAlign={'center'} fontFamily='Poppins'>
      <VStack spacing={2} textAlign="center" mb={'4rem'}>
        <Heading as="h1" color={'white'} fontSize="2.88rem" fontWeight={'bold'} fontFamily='Poppins'>
            News & Article
        </Heading>
      </VStack>

        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} textAlign="left" pl={'3%'} pr={'3%'} > 
        
        <Box
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'20'}
        p={6}
        overflow={'hidden'}
        bg={'#01264c'}
        color={'#FFF'}
        >
        <a href="https://blog.cfund.me/apa-itu-decentralized-science-desci/" id="button-test">
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
            <Image src={NewsImage} layout={'fill'}/>
        </Box>
        <Stack>   
        <Box w='100%' p={'7%'} >
                  <Text as={'b'} fontSize={'16px'} fontWeight={'bold'}>Apa itu decentralized science (DeSci)?</Text>
                  <Text fontSize={'16px'} mt={'4'} color={'grey'}>20 August 2022</Text>
                  <br />
                  <Text fontSize={'16px'}>
                  Decentralized science (DeSci) adalah gerakan yang bertujuan untuk membangun infrastruktur publik untuk mendanai, membuat, meninjau, mengkredit, menyimpan, dan menyebarkan pengetahuan ilmiah secara adil dan merata menggunakan Web3 sebagai fondasinya.
                  </Text>
                </Box>
        </Stack>
        </a>
      </Box>

      <Box
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'20'}
        p={6}
        overflow={'hidden'}
        bg={'#01264c'}
        color={'#FFF'}
        >
        <a href="https://blog.cfund.me/memanfaatkan-bear-market-saat-ini-untuk-menjadi-investor-yang-lebih-baik-di-bull-run-berikutnya/" id="button-test">
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
            <Image src={NewsImage} layout={'fill'}/>
        </Box>
        <Stack>   
        <Box w='100%' p={'7%'}>
                <Text as={'b'} fontSize={'16px'} fontWeight={'bold'}>Memanfaatkan Bear Market Saat ini Untuk Menjadi INVESTOR Yang Lebih Baik di Bull Run Berikutnya</Text>
                <Text fontSize={'16px'} mt={'4'} color={'grey'}>11 August 2022</Text>
                <br />
                <Text fontSize={'16px'}>
                Sementara beberapa dari kita mungkin pernah mengalami siklus crypto sebelumnya dan memiliki pengalaman saat terjadi Bear Market sebelumnya. Beberapa orang yang baru masuk ke pasar crypto dari akhir 2020, 2021 dan 2022 baru saja mengalami pasar beruang Bear Market pertama mereka.
                </Text>
                </Box>
        </Stack>
        </a>
      </Box>

      <Box
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'20'}
        p={6}
        overflow={'hidden'}
        bg={'#01264c'}
        color={'#FFF'}
        >
        <a href="https://blog.cfund.me/a-complete-guide-on-how-to-do-research-in-crypto/" id="button-test">
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
            <Image src={NewsImage} layout={'fill'}/>
        </Box>
        <Stack>   
        <Box w='100%' p={'7%'}>
                <Text as={'b'} fontSize={'16px'} fontWeight={'bold'}>A Complete Guide On How To Do Research in Crypto!</Text>
                <Text fontSize={'16px'} mt={'4'} color={'grey'}>8 August 2022</Text>
                <br />
                <Text fontSize={'16px'}>
                If you have even the slightest inkling of crypto and have yearned to profit from it, considering the hype that has taken the world by storm, you must be no stranger to researching it online. With so many sources, material and technical jargon, it is no easy feat to do your research. Where do I even begin, is what many have often asked us, and so we decided to break it up for you so that you know how to research crypto like a pro.
                </Text>
                </Box>
        </Stack>
        </a>
      </Box>

      <Box
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'20'}
        p={6}
        overflow={'hidden'}
        bg={'#01264c'}
        color={'#FFF'}
        >
        <a href="https://blog.cfund.me/bagaimana-asia-tenggara-merangkul-era-web3/" id="button-test">
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
            <Image src={NewsImage} layout={'fill'}/>
        </Box>
        <Stack>   
        <Box w='100%' p={'7%'}>
                <Text as={'b'} fontSize={'16px'} fontWeight={'bold'}>Bagaimana Asia Tenggara merangkul era Web3?</Text>
                <Text fontSize={'16px'} mt={'4'} color={'grey'}>6 August 2022</Text>
                <br />
                <Text fontSize={'16px'}>
                Inovasi Fintech telah berkembang secara signifikan di Asia Tenggara, memungkinkan peningkatan adaptasi Web3 di wilayah ini. Dan akhir-akhir ini hype di belahan dunia saat ini bukan tentang berselancar di internet tetapi tentang membuat konten dan memonetisasinya.
                </Text>
                </Box>
        </Stack>
        </a>
      </Box>

        </SimpleGrid>

        <VStack spacing={2} pt={'4rem'} textAlign="center" mb={'4rem'}>
            <div style={{ textAlign: 'center'}}>
                
                <Button id='button-test2' variant='solid' backgroundColor={'#ffa520'} color={'white'} as={'b'} fontSize={'16px'} p={'24px'}>
                <NextLink href='https://blog.cfund.me/'> 
                  See All News
                  </NextLink> 
                  </Button>
            </div>
        </VStack>
      </Container>
      </section>
    );
  }