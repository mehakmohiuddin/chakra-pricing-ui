'use client';
import React from 'react'
import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import icon1 from './icons/icon1'
import icon2 from './icons/icon2'
import icon3 from './icons/icon3'
export default function Features() {
  return (
    <Box maxW={'800px'} m='auto' mt={'40px'} px="50px">
        <Flex direction={{base:"column", lg:"row"}}>
     <HStack  mb={"20px"}>
        <Icon as={icon1}></Icon>
        <Text as='b'>30 days money back Guarantee</Text>
     </HStack>
     <HStack mb={"20px"}>
        <Icon as={icon2}></Icon>
        <Text as='b'>No setup fees 100% hassle-free</Text>
     </HStack>
     <HStack mb={"20px"}>
        <Icon as={icon3}></Icon>
        <Text as='b'>No monthly subscription Pay once and for all</Text>
     </HStack>
     </Flex>
    </Box>
  )
}
