import { ChakraProvider } from "@chakra-ui/react";
export default function App({Component , pageProps}:any){
return(
    <ChakraProvider>
        <Component {...pageProps}/>
    </ChakraProvider>
)
}