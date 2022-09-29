import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Button,
    VStack,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import bg from '../../../assets/images/bg-fee.png'
  import cycle from '../../../assets/images/cycle-ilustration.png';
  import { useMediaQuery } from 'react-responsive'
  import { motion, useAnimation } from "framer-motion";
  import { useInView } from "react-intersection-observer";
  import React, { useEffect }  from 'react';

  const item = {
    hidden: { x: -70, opacity: 1 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6 }
    }
      
  };
  const item2 = {
    hidden: { x: 50, opacity: 1 },
      visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.8 }
      }
    
  };
  const item3 = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6 }
    }
      
  };


  export default function Terms() {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
      })
      const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
      
    const styling = {
        backgroundImage: `url('${bg.src}')`,
        backgroundSize: 'cover',
    }
    return (
      <section style={styling}>
      <Container maxW={'80rem'} pt={'8rem'} pb={'8rem'} verticalAlign={'center'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {isMobile &&
        <Flex>
          <motion.div
            className="box"
            ref={ref}
            variants={item3}
            initial="hidden"
            animate={control}
          >
          <Image src={cycle}/>
          </motion.div>
        </Flex>
        }
          <motion.div
                    className="box"
                    ref={ref}
                    variants={item}
                    initial="hidden"
                    animate={control}
          >
          <Stack spacing={4} align={'left'} verticalAlign={'middle'} alignContent={'center'}>
            <Heading mt={'6rem'} mb={'2rem'} fontSize='2.88rem' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>
                Fee Structure & Terms 
            </Heading>
            <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
                The fee structure for CFUND portfolio management services consists of 2%
                management fee, which is deducted from the initial investment value, and 20% performance fee deducted from the profit made during the fund
                management process. In addition, CFund improses a locking period for the investor's fund, starting from quarterly basis.    
            </Text>
          </Stack>
          </motion.div>
        {isDesktopOrLaptop &&
        <Flex>
        <motion.div
            className="box"
            ref={ref}
            variants={item2}
            initial="hidden"
            animate={control}
        >
          <Image src={cycle}/>
          </motion.div>
        </Flex>
        }
        </SimpleGrid>

      </Container>
      </section>
    );
  }