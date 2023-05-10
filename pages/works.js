import { Container, Heading, SimpleGrid, Divider, } from '@chakra-ui/react';
import Section from '@/components/section';
import Layout from '@/components/layouts/article';
import { WorkGridItem } from '@/components/grid';
import synesthesia from '../public/images/work/synesthesia.png'
import hypercartridge from '../public/images/work/hypercartridge.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works</Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="synesthesia" title="Synesthesia" thumbnail={synesthesia}>
                        An NFT platform utilizing Music NFT metadata to create Generative Art.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="hypercatridge" title="Hypercartidge" thumbnail={hypercartridge}>
                        Mintable Collaborative Application Cartridges, which allow a single or multiplayer app to be minted to an NFT, and served as a static site or via ENS.
                            </WorkGridItem>
                    </Section>
                    </SimpleGrid>

                    <Section delay={0.4}>
                        <Divider my={6} />

                        <Heading as="h3" fontSize={20} mb={4}>
                            Other Projects
                            </Heading>

                            </Section>
                </Container>
                </Layout>
    )
}

export default Works
