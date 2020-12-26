import Head from "next/head";
import { Button, Flex } from "@chakra-ui/react";
import { useAuth } from "@lib/auth";
import { Logo } from "@icons/logo";

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Logo w="64px" h="64px" />

      {auth.user ? (
        <Button onClick={() => auth.signout()}>Sign out</Button>
      ) : (
        <Button mt={4} size="sm" onClick={() => auth.signinWithGithub()}>
          Sign in
        </Button>
      )}
    </Flex>
  );
}
