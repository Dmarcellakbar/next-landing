import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react';
import chartNew from '../../../assets/images/chart-new.png'
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect }  from 'react';
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

const item = {
  hidden: { x: -100, opacity: 0 },
  visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
  }
    
};
const itemMobile = {
  hidden: { x: -100, opacity: 1 },
  visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
  }
    
};

const item2 = {
  hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 }
    }
  
};

const item3 = {
  hidden: { y: 100, opacity: 0 },
  visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
  }
  
};

const item4 = {
  hidden: { y: 100, opacity: 0 },
  visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 }
  }
};

export default function SplitWithImage() {
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
    const isMobile = useMediaQuery({
      query: '(max-width: 900px)'
    })

  const styling = {
    backgroundColor: '#011535',
    backgroundSize: 'cover',
  }
  return (
    <section style={styling}>
    <Container maxW={'80rem'} pt={'8rem'} pb={'8rem'} verticalAlign={'center'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
      {isDesktopOrLaptop && 
      <motion.div
                    className="box"
                    ref={ref}
                    variants={item}
                    initial="hidden"
                    animate={control}
          >
        <Image src={chartNew}/>
        </motion.div>
      }
      {isMobile && 
      <motion.div
                    className="box"
                    ref={ref}
                    variants={itemMobile}
                    initial="hidden"
                    animate={control}
          >
        <Image src={chartNew}/>
        </motion.div>
      }
      </Flex>
        <Stack spacing={4} align={'left'} verticalAlign={'middle'} alignContent={'center'}>
          <motion.div
                    className="box"
                    ref={ref}
                    variants={item2}
                    initial="hidden"
                    animate={control}
          >
          <Heading mt={'4rem'} mb={'2rem'} fontSize='2.88rem' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>Our Performance</Heading>
          </motion.div>
          <motion.div
                    className="box"
                    ref={ref}
                    variants={item3}
                    initial="hidden"
                    animate={control}
          >
          <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
            Our advanced risk management strategy allowed us to be consistenly
            profitable during both uptrend and downtrend.
            Digital assets such can provide highly lucrative return, yet they are much
            more volatile and possess higher risk compared to traditional asset classes.
            CFund manages your capital with rigorous position sizing, advanced trading
            strategy, and a conservative stop loss.
          </Text>
          </motion.div>
          <motion.div
                    className="box"
                    ref={ref}
                    variants={item4}
                    initial="hidden"
                    animate={control}
          >
          <Link href='Login' target='_blank'><Button id='button-test2' color={'white'} fontSize='16px' backgroundColor={'#ffa520'} p={'24px'} fontFamily={'Poppins'}>See Performance Details</Button></Link>
          </motion.div>
        </Stack>
        
      </SimpleGrid>
    </Container>
    </section>
  );
}