import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/react';
import DashbpardShell from './DashboardShell';

function FreePlanEmptyState() {
  return (
    <DashbpardShell>
      <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
        <Heading size="md">Get feedback in your site instantly.</Heading>
        <Text>Start today, grow with us 🌱 </Text>
        <Button variant="solid" size="md">
          Upgrade to starter
        </Button>
      </Box>
    </DashbpardShell>
  );
}

export default FreePlanEmptyState;
