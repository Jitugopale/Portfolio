import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  DownloadIcon,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div className="main min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto pt-12 px-4 lg:my-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h1 className="text-lg text-muted-foreground">Hello, I'm</h1>
              <div className="mt-2 mb-3">
                <h2 className="text-5xl lg:text-7xl font-bold gradient-text">
                  Jitesh Gopale
                </h2>
              </div>
              <div className="mb-3">
                <h3 className="font-lg text-2xl lg:text-3xl text-blue-500">
                  Full Stack Developer
                </h3>
              </div>
              <div>
                <p className="text-lg text-muted-foreground">
                  Crafting beautiful, responsive web experiences with React,
                  Next.js, and modern JavaScript. Passionate about creating
                  user-centric applications that make a difference.
                </p>
              </div>
              <div className="mt-7 flex gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" asChild>
                  <Link href="#">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative w-80 h-80 mx-auto mt-12">
              <div className="absolute"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/download.jpg"
                  alt="Alex Johnson"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32 py-6 bg-gray-50">
          <div className="max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 p-6 mt-12 mx-auto">
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  5+
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Years Experience
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  50+
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Projects Completed
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  25+
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Happy Clients
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  15+
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Technologies
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
