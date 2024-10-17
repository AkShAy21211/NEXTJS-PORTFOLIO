import React from "react";
import { Box, Heading, Text, Grid, Button } from "@chakra-ui/react";
import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";
import Link from "next/link";
import comingle from "../../public/images/comingle.png";
import volttron from "../../public/images/volttron.png";
import pollara from "../../public/images/pollara.png";
import chat from "../../public/images/chat.png";
import netflix from "../../public/images/netflix.png";
import weather from "../../public/images/weather.png";

// Sample project data
const projectsData = [
  {
    title: "Comingle",
    description:
      "A robust social media platform built with Clean Architecture and adhering to SOLID principles. It offers users a complete experience with text, audio, and video chat, as well as post creation and media sharing.",
    image: comingle,
    git: "https://github.com/AkShAy21211/Comingle-Client",
    link: "https://comingle.vercel.app",
  },
  {
    title: "Volttorn",
    description:
      "An e-commerce platform designed to provide users with a seamless shopping experience, built using MVC architecture and a RESTful API.",
    image: volttron,
    git: "https://github.com/AkShAy21211/VoltTorn-E-commerce",
    link: "https://volttron.shop",
  },
  {
    title: "Pollara",
    description:
      "A secure and scalable voting system allowing users to register, cast votes, and view results in real time.",
    image: pollara,
    git: "#",
    link: "https://pollara.vercel.app/auth",
  },
  {
    title: "ChatEase",
    description:
      "A real-time chat application with user authentication, live messaging, and group chat functionality.",
    image: chat,
    git: "https://github.com/AkShAy21211/CHAT-EASE-REACT",
    link: "https://chat-ease-react.onrender.com/",
  },
  {
    title: "Netflix Clone",
    description:
      "A web application that replicates the Netflix interface, allowing users to browse and stream movies and TV shows. Features include user authentication, personalized recommendations, and a responsive design for a seamless viewing experience.",
    image: netflix,
    git: "https://github.com/AkShAy21211?tab=repositories",
    link: "https://netflix-clone-react-88ap.onrender.com/",
  },
  {
    title: "Weather App",
    description:
      "A user-friendly weather application that provides real-time weather updates and forecasts based on the user's location. It features an interactive interface, customizable settings, and integrates with external APIs for accurate weather data.",
    image: weather,
    git: "https://github.com/AkShAy21211/WeatherApp",
    link: "https://weather-app-ry57.onrender.com/",
  },
  {
    title: "Next.js CRUD",
    description:
      "A full-stack CRUD application built with Next.js, allowing users to create, read, update, and delete items. The app features user authentication, form validation, and a clean UI, showcasing the power of server-side rendering and API routes.",
    image: "", // No image provided
    git: "https://github.com/AkShAy21211/NEXTJS-CRUD/tree/main",
    link: "#",
  },
];

const Projects = () => {
  return (
    <Box p={5} borderRadius="md" boxShadow="lg" mt={10} id="projects">
      <Heading as="h2" size="xl" mb={4} color="white" textAlign="start">
        Projects
      </Heading>
      <Text color="gray.400" mb={4} fontSize="lg">
        Here are some of the projects I&apos;ve worked on:
      </Text>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
      >
        {projectsData.map((project, index) => (
          <Box
            key={index}
            p={5}
            cursor={"pointer"}
            borderRadius="md"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: "translateY(-10px) rotateY(5deg) rotateX(5deg)",
            }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} project`}
                height={200}
                width={400}
                layout="responsive" // Makes it responsive
                className="rounded-md"
              />
            ) : (
              <Box
                height="200px"
                bg="gray.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="md"
              >
                <Text color="gray.400">No Image Available</Text>
              </Box>
            )}
            <Heading
              as="h3"
              size="lg"
              mt={5}
              className=" bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
              mb={2}
            >
              {project.title}
            </Heading>
            <Text color="gray.300" mb={4}>
              {project.description}
            </Text>
            <div className="flex justify-center gap-5">
              <Link href={project.git}>
                  <FaGithub />
              </Link>
              <Link href={project.link}>
             
                  <FaEye />
                
              </Link>
            </div>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
