import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Floppy from '../3d-floppy'
import { useRouter } from 'next/router'
import NoSsr from '../no-ssr'

const Main = ({ children }) => {
  const router = useRouter()

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Amir Gamble Homepage</title>
      </Head>
      <Navbar path={router.pathname} />
      
      <Container maxW="container.md" pt={14}>
     <NoSsr>
        <Floppy />
      </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main
