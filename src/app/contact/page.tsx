import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Github, Linkedin, Mail, Send } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <div className="contact">
      <section className="max-w-7xl mx-auto pt-20 pb-20 px-5 sm:px-6 lg:px-8">
        <div className="text-center font-bold mb-6 text-4xl lg:text-6xl">
          <h1>Get In Touch</h1>
        </div>
        <div className="text-center">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let&apos;s work together on your next project. I&apos;m always
            excited to discuss new opportunities and creative challenges.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto pt-10 pb-10">
          <div className="grid md:grid-cols-3 sm:grid-col-1 gap-8 p-4 lg:p-8">
            <Card>
              <CardHeader>
                <div className="flex justify-center items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-xl font-medium">Email</h1>
                  <p className="text-md text-gray-500 mt-1">
                    Send me an email anytime
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="font-semibold text-lg">
                    jiteshgopale26@email.com
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-center items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-xl font-medium">Phone</h1>
                  <p className="text-md text-gray-500 mt-1">
                    Call me during business hours
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="font-semibold text-lg">+91 9096275725</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-center items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-xl font-medium">Location</h1>
                  <p className="text-md text-gray-500 mt-1">
                    Available for remote work
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="font-semibold text-lg">Panvel</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid md:grid-cols-2 gap-4 mb-5">
                      <div className="space-y-2">
                        <Label>
                          Name<span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label>
                          Email<span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="your.email@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2 mb-5">
                      <Label>Subject</Label>
                      <Input placeholder="Your subject" />
                    </div>
                    <div className="space-y-2 mb-5">
                      <Label>
                        Message<span className="text-red-500">*</span>
                      </Label>
                      <Textarea rows={5} placeholder="Your message..." />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col gap-5">
                <Card>
                  <CardHeader>
                    <div className="flex gap-3 items-center">
                      <div>
                        <div className="p-2 bg-green-100 rounded-full">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          Available for Work
                        </CardTitle>
                        <CardDescription>
                          Currently accepting new projects
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    I&apos;m currently available for freelance projects and
                    full-time opportunities. Let&apos;s discuss how we can work
                    together to bring your ideas to life.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex gap-3 items-center">
                      <div>
                        <Clock className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          Quick Response
                        </CardTitle>
                        <CardDescription>
                          I typically respond within 24 hours
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    I understand the importance of timely communication. You can
                    expect a response to your inquiry within 24 hours, often
                    much sooner.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div>
                      <CardTitle className="text-2xl">
                        Connect With Me
                      </CardTitle>
                      <CardDescription>
                        Find me on social media and professional networks
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Card className="cursor-pointer p-3 hover:bg-gray-50">
                        <div className="flex gap-4 items-center">
                          <div>
                            <Github className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="font-medium text-lg">Github</div>
                            <div className="text-sm text-muted-foreground font-medium">@alexjohnson</div>
                          </div>
                        </div>
                    </Card>
                     <Card className="cursor-pointer p-5">
                        <div className="flex gap-4 items-center">
                          <div>
                            <Linkedin className="h-6 w-6" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium text-lg">LinkedIn</div>
                            <div className="text-sm text-muted-foreground font-medium">Alex Johnson</div>
                          </div>
                        </div>
                    </Card>
                    <Card className="cursor-pointer p-5">
                        <div className="flex gap-4 items-center">
                          <div>
                            <Github className="h-6 w-6" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium text-lg">Github</div>
                            <div className="text-sm text-muted-foreground font-medium">@alexjohnson</div>
                          </div>
                        </div>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
