'use client';
import {Box, Heading, Text } from "@chakra-ui/react"
import React from 'react'

export default function Header() {
  return (
    <Box textAlign={{base:"left", md: "left", lg:"center"}}
    pl={"20px"} bg='#6846C1' pt={'90px'} pb='250px' textColor='white'>
        <Heading>Simple Pricing for your business</Heading>
        <Text pt="10px">Plams that are carefully crafted from your Business</Text>
    </Box>
    
  )
}
