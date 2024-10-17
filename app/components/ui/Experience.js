import React from "react";
import { Box, Heading, Text, Grid } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experienceData = [
    {
      company: "Freelancer",
      role: "Full Stack Developer",
      description:
        "Worked independently on full-stack web development projects.",
      year: "2022 - Present",
    },
  ];

  return (
    <Box p={5} borderRadius="md" boxShadow="lg" mt={10} id="experiences">
      <Heading as="h2" size="xl" mb={4} color="white" textAlign="start">
         Experience
      </Heading>
      <Text color="gray.400" mb={4} fontSize="lg">
        Below is a summary of my freelance experience:
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        {experienceData.map((item, index) => (
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
              {item.role}
            </Heading>
            <Text mb={1} fontWeight="bold">
              {item.company}
            </Text>
            <Text fontSize="sm">{item.year}</Text>
            <Text fontSize="sm" mt={2} color="gray.300">
              {item.description}
            </Text>
            <Box mt={3}>
              <FaBriefcase size={20} />
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
