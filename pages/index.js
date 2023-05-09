import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, useColorModeValue, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons' 
import Layout from '@/components/layouts/article'
import Section from '../components/section'
import Paragraph from '@/components/paragraph'
import { BioSecton, BioYear } from '@/components/bio'


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
                    <Paragraph>Digital Creative (Builder / Developer / Designer)</Paragraph>
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
     </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio 
                </Heading>
            <BioSecton> 
                <BioYear>1990</BioYear>
                Born in Dayton, Ohio.
                </BioSecton>
            </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I am into  
                </Heading>
            <Paragraph>
                Art, Design, Technology, Music, and Culture. Making music, building things, and learning new things.
                </Paragraph>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page