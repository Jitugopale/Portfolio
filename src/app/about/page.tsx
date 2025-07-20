import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, Briefcase, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  const interests = [
    { name: "Photography", icon: "📸" },
    { name: "Hiking", icon: "🥾" },
    { name: "Gaming", icon: "🎮" },
    { name: "Reading", icon: "📚" },
    { name: "Cooking", icon: "👨‍🍳" },
    { name: "Travel", icon: "✈️" },
  ];

  return (
    <div className="about">
      <section className="max-w-7xl mx-auto pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center font-bold mb-6 text-4xl lg:text-6xl">
          <h1>About Me</h1>
        </div>
        <div className="text-center">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>
        <Card className="mt-20">
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative w-65 h-65 mx-auto md:mx-0">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/download.jpg"
                    alt="Jitesh Gopale"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-5 md:my-auto my-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Jitesh Gopale</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 items-center">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>Panvel</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span>1+ Years Experience</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Briefcase className="h-5 w-5 text-muted-foreground" />
                    <span>Senior Full Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-20 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">My Story</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed px-4">
            <p>
              I&apos;m a passionate full stack developer with a love for
              building beautiful, functional, and scalable web experiences. What
              started as a curiosity about how websites work has evolved into a
              career focused on creating user-centric applications that solve
              real-world problems and deliver value. From design to deployment,
              I enjoy crafting seamless digital experiences that users enjoy and
              trust.
            </p>
            <p>
              I specialize in the React ecosystem, including Next.js for
              full-stack development, paired with Node.js and Prisma on the
              backend. I have strong experience with Redux for state management,
              Tailwind CSS for styling, and tools like Postman for API testing.
              I&apos;m also focused on backend security, efficient database
              management, and deploying robust applications with modern DevOps
              practices. My goal is always to build clean, maintainable, and
              production-ready solutions.
            </p>
            <p>
              When I&apos;m not writing code, I&apos;m exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community. I&apos;m a firm believer
              in continuous learning and always strive to stay up-to-date with
              the latest tools, frameworks, and best practices in full stack
              development. Whether it&apos;s frontend UI or backend logic, I
              enjoy being involved in every part of the development process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-5">
              <h1 className="text-3xl lg:text-4xl font-bold">
                Professional Experience
              </h1>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey through the tech industry
            </p>
          </div>
          <div className="experience mt-16">
            <Card className="space-y-1.5 px-2 hover:shadow-lg mb-8">
              <CardHeader>
                <div className="flex flex-wrap justify-between">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
                      Software Developer
                    </h2>
                    <h4 className="text-xl font-semibold text-blue-600">
                      CancerMitr
                    </h4>
                  </div>
                  <div className="mt-5 md:mt-0">
                    <Badge variant="outline" className="text-md">
                      2025 - Present
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-muted-foreground text-lg font-semibold">
                    Working on backend development for web applications using
                    Node.js, Prisma, and MySQL. Responsible for building secure
                    RESTful APIs, designing efficient database schemas, and
                    integrating backend logic to support scalable full-stack
                    features. Collaborating with the frontend team to deliver
                    seamless end-to-end solutions.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-secondary py-1 px-4 font-semibold text-md rounded-full">
                    React
                  </div>
                  <div className="bg-secondary py-1 px-4 font-semibold text-md rounded-full">
                    React
                  </div>
                  <div className="bg-secondary py-1 px-4 font-semibold text-md rounded-full">
                    React
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="space-y-1.5 px-2 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-wrap justify-between">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
                      Web Developer
                    </h2>
                    <h4 className="text-xl font-semibold text-blue-600">
                      AVS Insotech Pvt Ltd
                    </h4>
                  </div>
                  <div className="mt-5 md:mt-0">
                    <Badge variant="outline" className="text-md">
                      2024 - 2025
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-muted-foreground text-lg font-semibold">
                    Worked on full-stack web development using React for the
                    frontend and Node.js for the backend. Built and integrated
                    RESTful APIs, collaborated across teams to ensure smooth
                    deployment, and performed rigorous testing in both UAT and
                    production environments to deliver reliable, scalable web
                    solutions.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-secondary py-1 px-4 font-semibold text-md rounded-full">
                    React
                  </div>
                  <div className="bg-secondary py-1 px-4 font-semibold text-md rounded-full">
                    React
                  </div>
                  <div className="bg-secondary py-1 px-4 font-semibold text-md rounded-full">
                    React
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-5">
              <h1 className="text-3xl lg:text-4xl font-bold">
                Key Achievements
              </h1>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestones that define my professional journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <Card>
              <CardContent>
                <div className="flex justify-start items-center mx-5">
                  <div>
                    <Award className="h-6 w-6 text-blue-700 mr-3.5" />
                  </div>
                  <div>
                    <h1 className="font-medium text-lg">
                      Secured 3rd rank in 12th grade at school level
                    </h1>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="flex justify-start items-center mx-5">
                  <div>
                    <Award className="h-6 w-6 text-blue-700 mr-3.5" />
                  </div>
                  <div>
                    <h1 className="font-medium text-lg">
                      Ranked 1st in 7th semester at college level
                    </h1>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="flex justify-start items-center mx-5">
                  <div>
                    <Award className="h-6 w-6 text-blue-700 mr-3.5" />
                  </div>
                  <div>
                    <h1 className="font-medium text-lg">
                      Completed MERN Stack Developer Certification
                    </h1>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="flex justify-start items-center mx-5">
                  <div>
                    <Award className="h-6 w-6 text-blue-700 mr-3.5" />
                  </div>
                  <div>
                    <h1 className="font-medium text-lg">
                      Contributed to 3+ open source projects
                    </h1>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-5">
              <h1 className="text-3xl lg:text-4xl font-bold">
                When I&apos;m Not Coding
              </h1>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Life is about balance - here&apos;s what I enjoy outside of work
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {interests.map((interest, index) => (
              <div key={index}>
                <Card>
                  <CardContent>
                    <div>{interest.icon}</div>
                    <div>{interest.name}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
