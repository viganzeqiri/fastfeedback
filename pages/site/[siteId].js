import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

import Feedback from '@components/Feedback';
import { useAuth } from '@lib/auth';
import { getAllFeedback, getAllSites } from '@lib/firestore-admin';
import { createFeedback } from '@lib/firestore';

export async function getStaticProps(context) {
  const {
    params: { siteId },
  } = context;

  const { feedback } = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map(site => ({
    params: {
      siteId: site.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function Site({ initialFeedback }) {
  const { user } = useAuth();
  const { query } = useRouter();
  const inputRef = useRef(null);
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  function handleSubmit(e) {
    e.preventDefault();

    const newFeedback = {
      author: user.name,
      authorId: user.uid,
      siteId: query.siteId,
      text: inputRef.current.value,
      createdAt: new Date().toISOString(),
      provider: user.provider,
      status: 'pending',
    };
    setAllFeedback([newFeedback, ...allFeedback]);
    inputRef.current = null;
    createFeedback(newFeedback);
  }

  return (
    <Box display="flex" flexDir="column" width="full" maxW="700px" margin="0 auto">
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl id="feedback" my={8}>
          <FormLabel>Feedback</FormLabel>
          <Input type="text" ref={inputRef} />
          <Button mt={2} fontWeight="medium" type="submit">
            Add Feedback
          </Button>
        </FormControl>
      </Box>

      {allFeedback.map(feedback => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
}
