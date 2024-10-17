"use client"
import React from "react";
import { Box, Heading, Text, Grid, Stack } from "@chakra-ui/react";

const servicesData = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using modern frameworks",
  },
  {
    title: "Backend Development",
    description:
      "Creating robust server-side applications with technologies.",
  },
  {
    title: "Full Stack Development",
    description:
      "Combining both frontend and backend skills to deliver complete web applications, managing both user experience and server functionality.",
  },
];

const Services = () => {
  return (
    <Box p={5} mx="auto" mt={10}>
      <Heading as="h2" size="xl" mb={6} textAlign="start">
        My Services
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        {servicesData.map((service, index) => (
          <Box
            key={index}
            p={5}
            cursor={"pointer"}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            borderColor={"purple.500"}
            _hover={{
              boxShadow: "lg",
              transform: "scale(1.05)",
              transition: "0.3s",
              background:
                "linear-gradient(to right, #3b82f6, #a855f7, #6366f1)", // Hover gradient
            }}
            bg="transparent"
          >
            <Stack spacing={3}>
              <Heading
                as="h3"
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
                _hover={{
                  color: "white", // Change text color to white on hover
                  transition: "color 0.3s ease", // Smooth transition for color change
                }}
              >
                {service.title}
              </Heading>
              <Text
                _hover={{
                  color: "white", // Change text color to white on hover
                  transition: "color 0.3s ease", // Smooth transition for color change
                }}
              >
                {service.description}
              </Text>
            </Stack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
