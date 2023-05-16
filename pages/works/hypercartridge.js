import { Container, Badge, List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title ="hypercartridge">
            <Container>
                <Title>Hypercartidge <Badge>2022</Badge>
                    </Title>
                    <P>
                    HyperCartridge is a unique platform that mints applications into NFT cartridges. These cartridges can be operated locally, served as a static site, or accessed via an ENS domain. Each HyperCartridge encapsulates the logic and state of an application in a self-sovereign manner. The platform even provides an IDE as its first HyperCartridge, allowing users to design and mint more cartridges.

HyperCartridges are coded in ValueScript, a TypeScript dialect with value semantics, facilitating the creation of single-player applications. A HyperCartridge consists of the kernel (kernaal), application logic written in ValueScript, and metadata including the server URL. The deployment server accepts an address and the cartridge application logic, pins the logic in IPFS, mints an NFT linked to this logic, and transfers it to the users address, with HyperCartridge covering the gas fees.
                    </P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="https://ethglobal.com/showcase/hypercartridge-66mhs">
                            https://ethglobal.com/showcase/hypercartridge-66mhs <ExternalLinkIcon mx="2px" />
                            </Link>
                            </ListItem>
                            <ListItem>
                            <Meta>Platform</Meta>
                            <span>Web</span> 
                            </ListItem>
                            <ListItem>
                            <Meta>Stack</Meta>
                            <span>ValueScript, React, Solidity, Hardhat, Ethers.js, IPFS, Pinata, Gnosis Chain</span>
                            </ListItem>
                    </List>
                    <WorkImage src="/images/work/hypercartridge.png" alt="hypercartridge" />
            </Container>
        </Layout>
    )
}

export default Work;