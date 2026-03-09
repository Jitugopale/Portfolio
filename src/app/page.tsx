"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, DownloadIcon, ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <div className="main min-h-screen mt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto pt-12 px-4 lg:my-4">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12">
            {/* Text Info Section */}
            <motion.div
              className="lg:w-1/2 space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-2xl lg:text-3xl text-muted-foreground font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I&apos;m
              </motion.h1>

              <motion.div
                className="mt-2 mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-5xl lg:text-7xl font-bold gradient-text">
                  Jitesh Gopale
                </h2>
              </motion.div>

              <motion.div
                className="mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl lg:text-3xl text-blue-500 font-semibold">
                  Full Stack Developer
                </h3>
              </motion.div>

              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Building scalable, full-stack web applications with React,
                Next.js, Node.js, and SQL. Passionate about delivering
                end-to-end solutions that are fast, secure, and user-focused.
              </motion.p>

              <motion.div
                className="mt-7 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" asChild>
                  <a
                    href="/Jitesh_Resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Photo Section */}
            <motion.div
              className="relative w-80 h-80 mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="./download.jpg"
                  alt="Jitesh Gopale"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mt-32 py-6 bg-gray-50">
          <div className="max-w-7xl mx-auto p-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: "1+", label: "Years Experience" },
                { value: "5+", label: "Projects Completed" },
                { value: "1+", label: "Happy Clients" },
                { value: "15+", label: "Technologies" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="flex flex-col items-center">
                      <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                        {stat.value}
                      </div>
                      <div className="text-md text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl lg:text-4xl font-bold">
                Technologies I Love
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I work with modern technologies to build scalable and performant
                web applications
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center mt-16"
            >
              {[
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Redux",
                "Tailwind CSS",
                "Node.js",
                "Prisma",
                "SQL",
                "MongoDB",
                "VectorDB",
                "LLM Models",
                "AI Tools",
                "OpenAI",
                "Docker",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-secondary py-2 px-4 font-semibold text-md rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-5"
            >
              <h1 className="text-3xl lg:text-4xl font-bold">
                Featured Project
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Take a look at one of my recent projects
              </p>
            </motion.div>

            {/* Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Health Management System (HMS)"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl mb-2">
                        Health Management System (HMS)
                      </CardTitle>
                      <CardDescription className="text-base">
                        Scalable backend Health Management System with JWT-based
                        role access for Patients, Doctors, and Admins. Supports
                        appointment booking, status tracking, real-time chat,
                        and a normalized SQL Server database architecture.
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {[
                          "Node.js",
                          "Express.js",
                          "SQL Server",
                          "MSSQL",
                          "JWT",
                          "REST APIs",
                        ].map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="outline">{tech}</Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button variant="outline" size="sm">
                          <a
                            href="https://github.com/jitugopale2426/Health_Management_System.git"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>

                        <Button size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild size="lg">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h1 className="text-3xl lg:text-4xl font-bold">
                  Ready to work together?
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  I&apos;m always interested in new opportunities and exciting
                  projects. Let&apos;s discuss how we can bring your ideas to
                  life.
                </p>

                <div className="flex justify-center gap-4 flex-col sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Start a Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button variant="outline" size="lg" asChild>
                    <Link href="/about">Learn More About Me</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
