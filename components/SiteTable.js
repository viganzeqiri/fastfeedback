import React from 'react';
import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { Table, Tr, Th, Td } from './Table';

export default function SitesTable({ sites }) {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th />
        </Tr>
      </thead>
      <tbody>
        {sites.map(({ id, name, url, createdAt }) => (
          <Box as="tr" key={url}>
            <Td fontWeight="medium">{name}</Td>
            <Td>{url}</Td>
            <Td>
              <NextLink href="/site/[siteId]" as={`/site/${id}`} passHref>
                <Link>View Feedback</Link>
              </NextLink>
            </Td>
            <Td>{format(parseISO(createdAt), 'PPpp')}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
}
