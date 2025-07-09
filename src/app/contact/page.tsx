import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail } from "lucide-react";
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
            Let's work together on your next project. I'm always excited to
            discuss new opportunities and creative challenges.
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
                  <p className="text-md text-gray-500 mt-1">Send me an email anytime</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="font-semibold text-lg">jiteshgopale26@email.com</p>
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
                  <p className="text-md text-gray-500 mt-1">Call me during business hours</p>
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
                  <p className="text-md text-gray-500 mt-1">Available for remote work</p>
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
    </div>
  );
};

export default ContactPage;
