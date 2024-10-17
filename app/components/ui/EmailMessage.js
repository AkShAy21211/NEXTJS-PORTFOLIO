import {
  Box,
  Text,
  Heading,
  Divider,
} from '@chakra-ui/react';
import * as React from 'react';

const MessageUsEmail = ({ name, message }) => {
  const previewText = `Portfolio enquiry 🚀${name} sent you a message.`;

  return (
    <Box
      bg="white"
      mx="auto"
      p={5}
      fontFamily="sans-serif"
      maxW="800px"
      borderRadius="md"
      boxShadow="lg"
    >
      <Heading as="h1" size="lg" color="black" mb={4}>
        <strong>Hello {name},</strong>
      </Heading>
      <Text color="black" fontSize="sm" lineHeight="6">
        {message}
      </Text>
      
      <Divider my={4} />

      <Text color="#666666" fontSize="xs">
        In a world where every email matters, Resend empowers you to send emails that captivate, engage, and convert. It's more than just an email platform; it's a catalyst for modernizing your email communication. Don't settle for outdated email practices. Embrace the future of email communication with Resend and watch your messages soar to new heights.
      </Text>
      <Text color="#666666" fontSize="xs" mt={2}>
        This email is delivered to you through the Resend SDK integrations.✨
      </Text>
    </Box>
  );
};

export default MessageUsEmail;
