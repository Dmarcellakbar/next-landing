import React from 'react';
import {  Container, SimpleGrid, Heading, VStack } from '@chakra-ui/react';
import Accordion from './Accordion'


export default function Faq() {
    const styling = {
        backgroundColor: '#011535',
        backgroundSize: 'cover',
    }

  return (
    <section style={styling}>
    <Container maxW={'80rem'} pt={'1rem'} pb={'2rem'} verticalAlign={'center'}>
    <VStack spacing={2} textAlign="center" mb={'4rem'}>
        <Heading as="h1" color={'white'} fontSize="2.88rem" fontWeight={'bold'} fontFamily='Poppins'>
            FAQ
        </Heading>
    </VStack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} color={'#FFF'} fontFamily={'Poppins'}>
        <VStack spacing={2} textAlign="left">
            <Accordion 
            title="Estimate yearly profit of CFund?" 
            content="Estimate profit of CFund products may differ. Please contact our Customer Service for further information." 
            />
            <Accordion 
            title="Where can I see the historical profit of CFUND?" 
            content="Please contact our Customer Service regarding the profit history of CFUND." 
            />
            <Accordion 
            title="How long is the KYC process will take?" 
            content="KYC will be processed within 1x24 hours if all data is complete." 
            />
            <Accordion 
            title="How long is the deposit approval process at CFUND?" 
            content="Deposit will be approved every Monday." 
            />
            <Accordion 
            title="How long is the withdrawal (WD) process?" 
            content={`Withdrawal (WD) will be processed on Monday, Tuesday, and Wednesday on the first week of every month; 
            <br/><br/> Withdraw (WD) will be transferred on Thursday - Friday in accordance with the Bank's working hour. `}
            />
            <Accordion 
            title={`Is it possible to register as a new customer without an invitation code?`}
            content="Apologies, as of now CFUND is still on closed loop period and only customers with invitation code are able to register." 
            />
            <Accordion 
            title="Can new customers register without an invitation code (if CFUND is already open to the public)?" 
            content="Yes." 
            />
        </VStack>
        <VStack spacing={2} textAlign="left">
            <Accordion 
            title="What are the requirements for withdrawal (WD)?" 
            content={`Withdraw (WD) will be processed within withdraw period; 
            <br/><br/> Withdraw (WD) outside lock period could only be processed on withdrawal week (Monday - Wednesday first week of the month) and penalty will be charged.`}
            
            />
            <Accordion 
            title="Estimate weekly and monthly profit?" 
            content={`Estimate profit percentage for every products on every quarter are below: 
            <br/><br/><li> CFund Moon (semi-flexible product): Estimate profit per year is 10% > Capital lock: 1 month > Profit WD-able every month;
            <br/><br/><li> CFund Stars (mid range): Estimate profit per year is 20% > Capital lock: 3 month / 1 quarter > Profit WD-able every month;
            <br/><br/><li> CFund Galaxy (corporate / AI - accredited investor): Estimate profit per year is 30% > Capital lock: 3 month > Profit WD-able every month > Required → contact to CRM only → set a call with Arya & Kurnia (KYC level 2); 
            <br/><br/><li> CFund Supernova is only for Foreigner customers (Singapore & Malaysia) - Estimate profit per year to be confirmed.
            `} 
            />
            <Accordion 
            title="The maximum drawdown at CFund?" 
            content="One of the strategies used in CFund is to determine the stop loss maximum at 20%." 

            />
            <Accordion 
            title="Can the deposit be transferred from any Banks?" 
            content="Deposit can be transferred from any banks with Virtual Bank Account Number & manual transfer as stated on CFUND Apps." 
            />
            <Accordion 
            title="Is Top up Investment can be transferred from any Banks as well?" 
            content="Yes, as refer to point 11." 
            />
            <Accordion 
            title="Maximum withdrawal every month?" 
            content={`<li> Withdraw CFund Moon: remaining capital must be minimum 5.000.000 IDR as stated on portfolio; 
            <br/><br/><li> Withdraw CFund Stars: remaining capital must be minimum 50.000.000 IDR as stated on portfolio; 
            <br/><br/><li> Withdraw CFund Galaxy: remaining capital must be minimum 500.000.000 IDR as stated on portfolio. `}
            />
            <Accordion 
            title="What and how to change Cfund products for customers?" 
            content="Customer could perform the action via app by withdrawing all capitals (after lock period was over) and re-deposit the funds to another products." 
            />
        </VStack>

      </SimpleGrid>
    </Container>
    </section>
  )
}
