import { Button, Code, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "@lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <main>
        <Heading>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Heading>

        <Text>
          Current User <Code>{auth.user?.email}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={() => auth.signout()}>Sign out</Button>
        ) : (
          <Button onClick={() => auth.signinWithGithub()}>Sign in</Button>
        )}
      </main>
    </div>
  );
}
