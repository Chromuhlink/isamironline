import { Container, Badge, List, ListItem, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title ="Synesthesia">
            <Container>
                <Title>Synesthesia <Badge>2022</Badge>
                    </Title>
                    <P>
                    Synesthesia is an innovative platform that transforms your music fandom into unique NFTs. Taking cues from your Music NFT collection and holding duration, it generates a distinctive piece of art that encapsulates your musical journey. Essentially, it's an on-chain Spotify Wrapped, turning your yearly music activity into a one-of-a-kind, verifiable artwork, offering a new, immersive way to engage with the Music NFT community.
                    </P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="https://app.buidlbox.io/projects/synesthesia">
                                https://app.buidlbox.io/projects/synesthesia <ExternalLinkIcon mx="2px" />
                            </Link>
                            </ListItem>
                            <ListItem>
                            <Meta>Platform</Meta>
                            <span>Web</span> 
                            </ListItem>
                            <ListItem>
                            <Meta>Stack</Meta>
                            <span>TypeScript, React, Solidity, Hardhat, Ethers.js, IPFS, Pinata</span>
                            </ListItem>
                    </List>
                    <WorkImage src="/images/work/synesthesia.png" alt="Synesthesia" />
            </Container>
        </Layout>
    )
}

export default Work;