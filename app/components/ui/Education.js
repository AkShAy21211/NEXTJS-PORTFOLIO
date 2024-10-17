import React from "react";
import { Box, Heading, Text, List, ListItem, Grid } from "@chakra-ui/react";
import { FaSchool } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      institution: "Brototype",
      degree: "Full Stack Development",
      year: "2023 - Present",
    },
    {
      institution: "Kannur University",
      degree: "Bachelor Of Computer Application",
      year: "2021 - 2023",
    },
    // Add more education items as needed
  ];

  return (
    <Box p={5} borderRadius="md" boxShadow="lg" mt={10}>
      <Heading as="h2" size="xl" mb={4} color="white" textAlign="start">
        Education
      </Heading>
      <Text color="gray.400" mb={4} fontSize="lg">
        Here is a summary of my educational background:
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        {educationData.map((item, index) => (
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
            <Heading
              as="h3"
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
              _hover={{
                color: "white", // Change text color to white on hover
                transition: "color 0.3s ease", // Smooth transition for color change
              }}
            >
              {item.degree}
            </Heading>
            <Text mb={1} fontWeight="bold">
              {item.institution}
            </Text>
            <Text fontSize="sm">{item.year}</Text>
            <Box mt={3}>
              <FaSchool size={20} />
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
