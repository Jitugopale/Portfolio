import React from 'react'
import { Card, CardContent } from "@/components/ui/card";

const ProjectsPage = () => {
  return (
    <div className='project'>
      <section className='max-w-7xl mx-auto pt-20 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='text-center font-bold mb-6 text-4xl lg:text-6xl'>
            <h1>My Projects</h1>
        </div>
        <div className='text-center'>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>A showcase of my development work and creative solutions</p>
        </div>
        <section className="py-6">
          <div className="max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 p-2 lg:p-6 mt-12 mx-auto">
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  8
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Total Projects
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  2
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Featured
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
            <Card>
              <CardContent className="flex flex-col items-center">
                <div className="font-bold text-2xl lg:text-3xl text-blue-500">
                  5+
                </div>
                <div className="text-md text-muted-foreground mt-1">
                  Years Active
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </section>
    </div>
  )
}

export default ProjectsPage
