import Image from "next/image";
import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";
import aws from "../../public/images/aws.png";
import bootstrap from "../../public/images/bootstrap.png";
import javascript from "../../public/images/javascript.png";
import html from "../../public/images/html.png";
import css from "../../public/images/css.png";
import tailwind from "../../public/images/tailwind.png";
import redux from "../../public/images/redux.png";
import express from "../../public/images/express.png";
import react from "../../public/images/react.png";
import nodejs from "../../public/images/nodejs.png";
import github from "../../public/images/github.png";
import githubaction from "../../public/images/gitaction.png";
import mongodb from "../../public/images/mongodb.png";
import sql from "../../public/images/sql.png";
import docker from "../../public/images/docker.png";
import socketio from "../../public/images/socket.png";
import figma from "../../public/images/figma.png";
import firebase from "../../public/images/firebase.png";
import postman from "../../public/images/postman.png";
import typescript from "../../public/images/typescript.png";

// Skill data
const skillsData = [
  { title: "JavaScript", image: javascript },
  { title: "TypeScript", image: typescript },
  { title: "HTML", image: html },
  { title: "CSS", image: css },
  { title: "Bootstrap", image: bootstrap },
  { title: "Tailwind CSS", image: tailwind },
  { title: "React", image: react },
  { title: "Redux", image: redux },
  { title: "Node.js", image: nodejs },
  { title: "Express.js", image: express },
  { title: "MongoDB", image: mongodb },
  { title: "SQL", image: sql },
  { title: "Socket.io", image: socketio }, // Update with the correct path
  { title: "Docker", image: docker },
  { title: "GitHub", image: github }, // Change to your image path
  { title: "GitHub Actions", image: githubaction }, // Change to your image path
  { title: "AWS", image: aws },
  { title: "Firebase", image: firebase },
  { title: "Figma", image: figma },
  { title: "Postman", image: postman },
];
const Skills = () => {
  return (
    <Box p={5} borderRadius="md" boxShadow="lg" mt={10}>
      <Heading as="h2" size="xl" mb={2} color="white" textAlign="start">
        Technologies I&apos;m Passionate About
      </Heading>
      <Text color="gray.400" mb={4} fontSize="lg">
        Continuously upskilling and exploring new technologies to enhance my
        skill set.
      </Text>

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
      >
        {skillsData.map((skill, index) => (
          <Box
            key={index}
            p={3}
            cursor={"pointer"}
            borderRadius="md"
            position="relative"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              position="relative"
              zIndex={2}
            >
              <Image
                src={skill.image}
                width={50}
                alt={skill.title}
                mb={3}
              />
              <Text fontSize="sm" color="white">
                {skill.title}
              </Text>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
