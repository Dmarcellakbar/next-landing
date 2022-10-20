import { Box, Center, HStack } from '@chakra-ui/react'
import React from "react";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
// import LogoPartner from '../../../assets/images/logo-partner.png'
import tokoLogo from '../../../assets/images/toko-logo.png'
import likuidLogo from '../../../assets/images/Likuid_logo.png'
import idrpLogo from '../../../assets/images/logo-idrp.png'
import surveinLogo from '../../../assets/images/logo-survein.png'
import nanoLogo from '../../../assets/images/logo-nano.png'
import KWILogo from '../../../assets/images/logo-KWI.png'
import raizLogo from '../../../assets/images/raiz-colour.svg'
import ondeLogo from '../../../assets/images/onde-logo.png'
import jagoLogo from '../../../assets/images/jagoLogo.svg'

export default function Running() {
  return (
    <Box bg='#011C3F' h={'60px'} w={'stretch'} maxW={'100%'} zIndex={'0'}>
        <Marquee gradient={false} speed={30}>
            <HStack>
                <Box width={'6rem'} >
                <Image
                    src={tokoLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={likuidLogo}
                />
                </Box>
                <Box width={'2rem'} >
                <Image
                    src={idrpLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={surveinLogo}
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={nanoLogo}
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={KWILogo}
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={raizLogo}
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={ondeLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={jagoLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={tokoLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={likuidLogo}
                />
                </Box>
                <Box width={'2rem'} >
                <Image
                    src={idrpLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={surveinLogo}
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={nanoLogo}
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={KWILogo}
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={raizLogo}
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={ondeLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={jagoLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={tokoLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={likuidLogo}
                />
                </Box>
                <Box width={'2rem'} >
                <Image
                    src={idrpLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={surveinLogo}
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={nanoLogo}
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={KWILogo}
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={raizLogo}
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={ondeLogo}
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={jagoLogo}
                />
                </Box>
                
            </HStack>
        </Marquee>
    </Box>
  )
}
