import Logo from './logo';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Link as ChakraLink,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';


const LinkItem = ({ href, path, children }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(path === href);
  }, [path, href]);

  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  
  return (
    <NextLink href={href} passHref>
    <ChakraLink as="a" p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>
      {children}
    </ChakraLink>
  </NextLink>
  )
}

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      pos="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#202023')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Work
          </LinkItem>
        </Stack>

          <Box flex={1} align="right">
            <ThemeToggleButton />
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu>
                <MenuButton as={IconButton} icon={ <HamburgerIcon/>} variant="outline" aria-label="Options" />
                <MenuList>
                <NextLink href="/about" passHref>
                    <MenuItem>About</MenuItem>
                  </NextLink>
                  <NextLink href="/works" passHref>
                    <MenuItem>Work</MenuItem>
                  </NextLink>
                  <NextLink href="https://github.com/chromuhlink" passHref>
                    <MenuItem>Source</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
              </Box>
            </Box>

      </Container>
    </Box>
  )
}

export default Navbar
