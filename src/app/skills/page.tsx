import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {  Award, BookOpen, Code, Database, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Certificate } from "crypto";

const SkillsPage = () => {
  const skillsCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "text-blue-500",
      skills: [
        { name: "React", level: "90%" },
        { name: "Next.js", level: "70%" },
        { name: "JavaScript", level: "70%" },
        { name: "TypeScript", level: "80%" },
        { name: "HTML/CSS", level: "70%" },
        { name: "Tailwind CSS", level: "90%" },
        { name: "Bootstrap", level: "60%" },
        { name: "Shadcn UI", level: "60%" },
      ],
    },
    {
      title: "State Management",
      icon: <Database className="h-6 w-6" />,
      color: "text-green-500",
      skills: [
        { name: "Redux", level: "50%" },
        { name: "Redux Toolkit", level: "50%" },
        { name: "Context API", level: "50%" },

      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      color: "text-green-500",
      skills: [
        { name: "Node JS", level: "50%" },
        { name: "Express JS", level: "50%" },
        { name: "Prisma", level: "50%" },
        { name: "MySQL", level: "50%" },
        { name: "MongoDB", level: "50%" },
        { name: "VectorDB", level: "50%" },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Zap className="h-6 w-6" />,
      color: "text-green-500",
      skills: [
        { name: "Git/GitHub", level: "50%" },
        { name: "Vite", level: "50%" },
        { name: "REST APIs", level: "50%" },
        { name: "OpenAPI", level: "50%" },
        { name: "LLM", level: "50%" },
        { name: "Docker", level: "50%" },
      ],
    },
  ];
  
  const Certifications = [
    {
      name: "Meta Front-End Developer",
      year: 2023,
      issue:"Meta (Facebook)",
      description: "Complete frontend development specialization",

    },
    {
      name: "Meta Front-End Developer",
      year: 2023,
      issue:"Meta (Facebook)",
      description: "Complete frontend development specialization",

    }
  ]
  return (
    <div className="skills">
      <section className="max-w-7xl mx-auto pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center font-bold mb-6 text-4xl lg:text-6xl">
          <h1>Skills & Expertise</h1>
        </div>
        <div className="text-center">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        <section className="py-6">
          <div className="max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 p-2 lg:p-6 mt-12 mx-auto">
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
            <Card>
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  1+
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Years Experience
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  5+
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Projects
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  4
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Certifications
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </section>

      <section className="bg-gray-50 pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex gap-2 items-center">
                    <div className={`${category.color}`}>{category.icon}</div>
                    <div>
                      <h1>{category.title}</h1>
                    </div>
                  </div>
                  {category.skills.map((skills, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex flex-col space-y-6">
                        <div>
                          <div className="flex justify-between">
                            <CardTitle>{skills.name}</CardTitle>
                            <span className="text-muted-foreground">
                              {skills.level}
                            </span>
                          </div>
                          <Progress value={parseInt(skills.level)} />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto pt-20 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 text-3xl lg:text-4xl font-bold">
              <h1>Certifications & Learning</h1>
            </div>
            <div className="text-center">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Continuous learning and professional development
              </p>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-8">
                {Certifications.map((Certificate,index)=>(
                    <Card key={index}>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-2 rounded-lg"><Award className="h-6 w-6 text-blue-500"/></div>
                <div>
                  <h1 className="text-lg font-semibold">{Certificate.name}</h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Badge variant="secondary">{Certificate.issue}</Badge>
                    <Badge variant="outline">{Certificate.year}</Badge>
                  </div>
                  <div className="mt-2">
                    <p className="text-muted-foreground text-sm font-semibold">{Certificate.description}</p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
                ))}
        
        </div>
        </div>

      
      </section>

      <section className="bg-gray-50 pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="bg-primary/10 p-4 rounded-full"><BookOpen className="h-8 w-8 text-blue-500"/></div>
              <h1 className="text-3xl font-bold mb-6">Continuous Learning</h1>
              <p className="text-lg text-center text-muted-foreground font-semibold">Technology evolves rapidly, and I believe in staying ahead of the curve. I dedicate time each week to learning new technologies, exploring emerging trends, and contributing to the developer community. Whether it's through online courses, tech conferences, or hands-on experimentation, I'm always expanding my skill set to deliver better solutions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
