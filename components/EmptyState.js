import React from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

function EmptyState() {
  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      direction="column"
      justify="center"
      align="center"
    >
      <Heading size="lg" mb={4}>
        You haven't added any sites
      </Heading>
      <Text mb={4}>Welcome 👋🏻 Let's get started. </Text>
      <AddSiteModal>Add Your First Site</AddSiteModal>
    </Flex>
  );
}

export default EmptyState;
