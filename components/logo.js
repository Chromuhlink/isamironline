import NextLink from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const cartridgeImage = `/images/cartridge${useColorModeValue('', '-dark')}.png`;

  return (
    <NextLink href="/" passHref>
      <LogoBox>
        <Image src={cartridgeImage} width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Amir Gamble
        </Text>
      </LogoBox>
    </NextLink>
  );
};

export default Logo;
