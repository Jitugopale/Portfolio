import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
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
                  <MapPin className="h-5 w-5 text-muted-foreground"/>
                  <span>Panvel</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Calendar className="h-5 w-5 text-muted-foreground"/>
                  <span>1+ Years Experience</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Briefcase className="h-5 w-5 text-muted-foreground"/>
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
          <p>I&apos;m a passionate frontend developer with a love for creating beautiful, functional web experiences. My journey began with curiosity about how websites work, and it has evolved into a career dedicated to crafting user-centric applications that make a real difference in people&apos;s lives.</p>
          <p>I specialize in the React ecosystem, including Next.js for full-stack applications, Redux for state management, and modern JavaScript/TypeScript. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.</p>
          <p>When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community. I&apos;m always eager to learn and grow, both personally and professionally.</p>
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
          </div>
        </section>
    </div>
  );
};

export default AboutPage;
