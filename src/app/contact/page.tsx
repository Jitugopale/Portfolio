"use client";
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
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (
      !formRef.current.from_name.value ||
      !formRef.current.from_email.value ||
      !formRef.current.message.value
    ) {
      alert("Please fill out all required fields.");
      setIsSending(false);
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          alert("Message sent successfully");
          formRef.current?.reset();
          setIsSending(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send");
          setIsSending(false);
        },
      );
  };

  return (
    <div className="contact">
      <section className="max-w-7xl mx-auto pt-20 pb-20 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-bold mb-6 text-4xl lg:text-6xl"
        >
          <h1>Get In Touch</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let&apos;s work together on your next project. I&apos;m always
            excited to discuss new opportunities and creative challenges.
          </p>
        </motion.div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto pt-10 pb-10">
          <div className="grid md:grid-cols-3 sm:grid-col-1 gap-8 p-4 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Me a Message</CardTitle>

                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form ref={formRef} onSubmit={sendEmail}>
                    <div className="grid md:grid-cols-2 gap-4 mb-5">
                      <div className="space-y-2">
                        <Label>
                          Name<span className="text-red-500">*</span>
                        </Label>
                        <Input
                          name="from_name"
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>
                          Email<span className="text-red-500">*</span>
                        </Label>
                        <Input
                          name="from_email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-5">
                      <Label>
                        Subject<span className="text-red-500">*</span>
                      </Label>
                      <Input
                        name="subject"
                        placeholder="Your subject"
                        required
                      />
                    </div>

                    <div className="space-y-2 mb-5">
                      <Label>
                        Message<span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        name="message"
                        rows={5}
                        placeholder="Your message..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full cursor-pointer"
                      size="lg"
                      disabled={isSending}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isSending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex flex-col gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
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
                      full-time opportunities. Let&apos;s discuss how we can
                      work together to bring your ideas to life.
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
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
                      I understand the importance of timely communication. You
                      can expect a response to your inquiry within 24 hours,
                      often much sooner.
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        Connect With Me
                      </CardTitle>

                      <CardDescription>
                        Find me on social media and professional networks
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <motion.div whileHover={{ scale: 1.03 }}>
                        <Card className="cursor-pointer p-3 hover:bg-gray-50">
                          <CardContent>
                            <a
                              href="https://github.com/Jitugopale"
                              target="_blank"
                            >
                              <div className="flex gap-4 items-center">
                                <Github className="h-6 w-6" />
                                <div>
                                  <div className="font-medium text-lg">
                                    Github
                                  </div>
                                  <div className="text-sm text-muted-foreground font-medium">
                                    @Jitugopale
                                  </div>
                                </div>
                              </div>
                            </a>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.03 }}>
                        <Card className="cursor-pointer p-5">
                          <CardContent>
                            <a
                              href="https://linkedin.com/in/jitesh-gopale-144565242"
                              target="_blank"
                            >
                              <div className="flex gap-4 items-center">
                                <Linkedin className="h-6 w-6" />
                                <div className="space-y-1">
                                  <div className="font-medium text-lg">
                                    LinkedIn
                                  </div>
                                  <div className="text-sm text-muted-foreground font-medium">
                                    Jitesh Gopale
                                  </div>
                                </div>
                              </div>
                            </a>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
