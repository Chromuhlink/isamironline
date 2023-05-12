import NextLink from 'next/link';
import {
    Box,
    Heading,
    Container, 
    Divider, 
    Text,
    Button
} from '@chakra-ui/react';

const NotFound = () => { 
    return(
        <Container>
            <Heading as ="h1"> Not Found </Heading>
            <Text> Think you are lost bro </Text>

            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return Home </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound;