import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Button, Heading, Text, Code, Flex } from '@chakra-ui/react';
import { Logo } from '@/styles/icons';

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh">
        <Logo color="black" boxSize="64px" />
        {auth.user ? (
          <Button as="a" href="/dashboard">
            View Dashboard
          </Button>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
            Sign In
          </Button>
        )}
      </Flex>
    </div>
  );
};

export default Home;
