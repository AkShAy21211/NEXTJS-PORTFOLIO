"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { ClassNames } from "@emotion/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
     alert("sent")
    } else {
      console.error("Error sending email");
    }
  };
  return (
    <Box p={5} borderRadius="md" boxShadow="lg" mt={10}>
      <Heading as="h2" size="xl" mb={4} color="white" textAlign="start">
        Contact Me
      </Heading>
      <Text color="gray.400" mb={4} fontSize="lg">
        I’d love to hear from you! Please fill out the form below:
      </Text>
      <VStack spacing={4} align="stretch">
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          value={name}
          variant="outline"
          color="white"
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          variant="outline"
          value={email}
          color="white"
        />
        <Textarea
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          variant="outline"
          value={message}
          color="white"
        />
        <Button
          bgGradient="linear(to-r, blue.400, purple.600)" // Gradient from teal.400 to teal.600
          color="white" // Set text color to white for better contrast
          variant="solid"
          onClick={handleSubmit}
          _hover={{ bgGradient: "linear(to-r, blue.500, purple.700)" }} // Darker gradient on hover
          _active={{ bgGradient: "linear(to-r, blue.600, purple.800)" }} // Darker gradient when active
          size="lg"
        >
          Send Message
        </Button>
      </VStack>
      <Box mt={6}>
        <Text color="gray.400" mb={2}>
          You can also reach me through:
        </Text>
        <Text color="white" mb={1}>
          <FaEnvelope /> akshay68580@gmail.com
        </Text>
        <Text color="white">
          <FaPhone /> +91 9074592275
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
