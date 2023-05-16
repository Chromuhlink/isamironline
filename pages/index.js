import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, useColorModeValue, Button, List, ListItem, Icon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons' 
import Layout from '@/components/layouts/article'
import Section from '../components/section'
import Paragraph from '@/components/paragraph'
import { 
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoLinkedin,
    IoAtSharp
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500')} 
            p={3} 
            mb={6} 
            align="center"
            >
            Hello, I am a Creative Techonologist and Full Stack Developer based in NYC. 
        </Box>

        <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Amir Gamble
                    </Heading>
                    <Paragraph>Digital Creative / Developer / Builder </Paragraph>
                </Box> 
                <Box 
                flexShrink={0} 
                mt={{base:4, md:0}} 
                ml={{ md: 6 }}
                align="center"
                >
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    src="/images/amir.jpeg"
                    alt="profile picture" />
                </Box>
                </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Works
                    </Heading> 
                    <Paragraph>
Amir Gamble is a multifaceted professional with experience in full stack web development in web3, 
project management, and creative direction across various industries.
Amir excels in driving growth, fostering collaboration, and managing cross-functional teams. Recently built {' '} 
<NextLink href="/works/hypercartridge">
    <Link>hypercartridge</Link>
    </NextLink>
    .
     </Paragraph>
     <Box align="center" my={4}>
            <NextLink href="/works">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline">
            My Portfolio
            </Button> 
            </NextLink>
            </Box>
            <Box align="center" my={4}>
            <NextLink href="https://drive.google.com/file/d/1ebdCasFlLlUc8kLFpIOZ52ccf6spho65/view?usp=sharing">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline">
            My Resume 
            </Button> 
            </NextLink>
            </Box>
     </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                I Like 
                </Heading>
            <span>
                Everything Digital, Art, Design, New Technology, Music, and Culture.
                </span>
            </Section>

            <Section delay={0.3}>
               <Heading as="h3" variant="section-title">
                On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/chromuhlink" target="_blank">
                            <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as ={IoLogoGithub} />}>
                                @chromuhlink
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/0xchromuh" target="_blank">
                            <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as ={IoLogoTwitter} />}>
                                @0xchromuh
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/amir-gamble-57083333/" target="_blank">
                            <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as ={IoLogoLinkedin} />}>
                                @AmirGamble 
                            </Button>
                             </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="chromuh@protonmail.com" target="_blank">
                            <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as ={IoAtSharp} />}>
                               Email
                            </Button>
                             </Link>
                    </ListItem>
                </List>
                </Section>
        </Container>
        </Layout>
    )
}

export default Page