import { Box, Center, HStack } from '@chakra-ui/react'
import React from "react";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import LogoPartner from '../../../assets/images/logo-partner.png'

export default function Running() {
  return (
    <Box bg='#011C3F' h={'90px'} w={'stretch'} maxW={'100%'}>
        <Marquee gradient={false} speed={20}>
            <HStack>
                <Image
                    src={LogoPartner}
                />
                <Image
                    src={LogoPartner}
                />
                <Image
                    src={LogoPartner}
                />
                <Image
                    src={LogoPartner}
                />
                <Image
                    src={LogoPartner}
                />
            </HStack>
        </Marquee>
    </Box>
  )
}
