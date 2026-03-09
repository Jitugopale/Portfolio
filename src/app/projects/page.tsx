"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Star } from "lucide-react";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");

  // const projects = [
  //   {
  //     id: 1,
  //     title: 'E-Commerce Platform',
  //     description: 'Full-stack e-commerce solution with React, Redux, and Node.js. Features include user authentication, payment processing, inventory management, and admin dashboard.',
  //     image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
  //     category: 'fullstack',
  //     featured: true,
  //     githubUrl: 'https://github.com',
  //     liveUrl: 'https://example.com',
  //     year: '2023'
  //   },
  //   {
  //     id: 2,
  //     title: 'Task Management App',
  //     description: 'Collaborative task management application built with Next.js and TypeScript. Real-time updates with Socket.io and beautiful drag-and-drop interface.',
  //     image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     technologies: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL'],
  //     category: 'frontend',
  //     featured: true,
  //     githubUrl: 'https://github.com',
  //     liveUrl: 'https://example.com',
  //     year: '2023'
  //   },
  //   {
  //     id: 3,
  //     title: 'Weather Dashboard',
  //     description: 'Beautiful weather application with location-based forecasts, interactive charts, and responsive design. Built with React and Chart.js.',
  //     image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind CSS'],
  //     category: 'frontend',
  //     featured: false,
  //     githubUrl: 'https://github.com',
  //     liveUrl: 'https://example.com',
  //     year: '2023'
  //   },
  //   {
  //     id: 4,
  //     title: 'Portfolio Website',
  //     description: 'Responsive portfolio website built with Next.js and modern CSS animations. Optimized for performance and SEO with perfect Lighthouse scores.',
  //     image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     technologies: ['Next.js', 'CSS3', 'Framer Motion', 'Vercel'],
  //     category: 'frontend',
  //     featured: false,
  //     githubUrl: 'https://github.com',
  //     liveUrl: 'https://example.com',
  //     year: '2022'
  //   },
  //   {
  //     id: 5,
  //     title: 'Social Media Dashboard',
  //     description: 'Analytics dashboard for social media management with data visualization, automated reporting, and real-time metrics tracking.',
  //     image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     technologies: ['React', 'Redux Toolkit', 'D3.js', 'Express', 'MongoDB'],
  //     category: 'fullstack',
  //     featured: false,
  //     githubUrl: 'https://github.com',
  //     liveUrl: 'https://example.com',
  //     year: '2022'
  //   },
  //   {
  //     id: 6,
  //     title: 'Recipe Finder App',
  //     description: 'Mobile-first recipe application with search functionality, favorites, meal planning, and shopping list generation features.',
  //     image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     technologies: ['React', 'Redux', 'Recipe API', 'PWA'],
  //     category: 'frontend',
  //     featured: false,
  //     githubUrl: 'https://github.com',
  //     liveUrl: 'https://example.com',
  //     year: '2022'
  //   },
  //   {
  //     id: 7,
  //     title: 'Real Estate Platform',
  //     description: 'Comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
  //     image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS'],
  //     category: 'fullstack',
  //     featured: false,
  //     githubUrl: 'https://github.com',
  //     liveUrl: 'https://example.com',
  //     year: '2021'
  //   },
  //   {
  //     id: 8,
  //     title: 'Fitness Tracking App',
  //     description: 'Personal fitness tracking application with workout plans, progress monitoring, and social features for motivation.',
  //     image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     technologies: ['React', 'Redux', 'Chart.js', 'Firebase'],
  //     category: 'frontend',
  //     featured: false,
  //     githubUrl: 'https://github.com',
  //     liveUrl: 'https://example.com',
  //     year: '2021'
  //   }
  // ]
  const projects = [
    {
      id: 1,
      title: "Health Management System (HMS)",
      description:
        "Scalable backend Health Management System with JWT-based role access for Patients, Doctors, and Admins. Supports appointment booking, status tracking, real-time chat, and a normalized SQL Server database architecture.",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Node.js",
        "Express.js",
        "SQL Server",
        "MSSQL",
        "JWT",
        "REST APIs",
      ],
      category: "fullstack",
      featured: true,
      githubUrl:
        "https://github.com/jitugopale2426/Health_Management_System.git",
      liveUrl: "https://your-hms-demo.com",
      year: "2025",
    },
    {
      id: 2,
      title: "Multi-AI Agent System",
      description:
        "Collaborative multi-agent AI system integrating OpenAI APIs and local LLMs for task automation, intelligent decision-making, and dynamic response generation.",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Node.js",
        "React.js",
        "OpenAI API",
        "Ollama",
        "Local LLMs",
      ],
      category: "fullstack",
      featured: true,
      githubUrl: "https://github.com/jitugopale2426/MultiAgent_Ollama.git",
      liveUrl: "https://your-ai-agent-demo.com",
      year: "2025",
    },
    {
      id: 3,
      title: "Flat Management System",
      description:
        "Role-based flat management system with admin approval workflows, enquiry handling, and secure authentication using JWT.",
      image:
        "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "Prisma", "MySQL", "JWT"],
      category: "fullstack",
      featured: false,
      githubUrl: "https://github.com/jitugopale2426/Flat_Management_System.git",
      liveUrl: "https://your-flat-demo.com",
      year: "2024",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description:
        "Responsive personal portfolio showcasing projects, experience, certifications, and skills with a clean UI and optimized performance.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      featured: false,
      githubUrl: "https://github.com/Jitugopale/Portfolio.git",
      liveUrl: "https://your-portfolio.com",
      year: "2024",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === filter);

  return (
    <div className="project">
      <section className="max-w-7xl mx-auto pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-bold mb-6 text-4xl lg:text-6xl"
        >
          <h1>My Projects</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development work and creative solutions
          </p>
        </motion.div>

        <section className="py-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 p-2 lg:p-6 mt-12 mx-auto"
          >
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  4
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Total Projects
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  2
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Featured
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  15+
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Technologies
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  5+
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Years Active
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <Tabs value={filter} onValueChange={setFilter} className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 mx-auto">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-600">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline">{project.year}</Badge>
                    </div>

                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>

                        <Button size="sm" className="flex-1" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10 text-center text-lg text-muted-foreground"
            >
              No projects found for this filter.
            </motion.p>
          )}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold">
            Interested in working together?
          </h2>

          <p className="text-lg text-muted-foreground">
            I&apos;m always excited to take on new challenges and create amazing
            digital experiences.
          </p>

          <Button size="lg" asChild>
            <a href="/contact">Let&apos;s Start a Project</a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;
