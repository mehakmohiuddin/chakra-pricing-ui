'use client';
import {Box, Button, Flex, Heading, HStack, Text, Icon } from "@chakra-ui/react"
import React from 'react'
import checkIcons from "./icons/checkicons"

export default function Pricing() {
  return (
    <Box maxW={'850px'} m={'auto'} mt="-200px" mx={{base: "20px", lg:"auto"}} bg={'white'} borderRadius={'16px'} overflow={'hidden'}
    boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);' >
     <Flex direction={{base: "column", md:"column", lg: "row"}} >   
      <Box bg='#cbbBee' p={'60px'} textAlign={'center'}>
        <Text fontSize={'24px'} fontWeight={'Bold'}>Premium PRO</Text>
        <Heading fontSize={'60px'}>$329</Heading>
        <Text>billed just once</Text>
        <Button mt={'20px'} w={'250px'} color='white' bg={'#6846C1'} >Get Started</Button>
      </Box>
        <Box pt={'50px'} pl={'25px'}>
          <Text mb={'10px'}>Access these features when you get this pricing package for your business.</Text>
          <HStack mb={'15px'}>
            <Icon as={checkIcons}></Icon>
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb={'15px'}>
            <Icon as={checkIcons}></Icon>
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb={'15px'}>
            <Icon as={checkIcons}></Icon>
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb={'15px'}>
            <Icon as={checkIcons}></Icon>
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
        </Flex>
    </Box>
  )
}
  