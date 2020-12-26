import React from "react";
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import { Logo } from "@icons/logo";
import { useAuth } from "@lib/auth";

function DashbpardShell({ children }) {
  const { user } = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        justifyContent="space-between"
        alignItems="center"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline alignItems="center">
          <Logo w="24px" h="24px" />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={user.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex maxWidth="800px" direction="column" w="100%" ml="auto" mr="auto">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DashbpardShell;
