import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ProjectData, projectsData } from "@/lib/projects";
import Link from "next/link";
import Tags from "@/components/tags";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";


export default function Projects() {
  return (
    <section 
      id='projects' 
      className='relative isolate max-w-3xl m-auto pb-32 scroll-mt-32'
    >
      <h1 className='title'>Projects</h1>
      
      <div className='relative'>
        <div className="flex flex-col gap-12 mt-8">
          {projectsData.map((project: ProjectData, index: number) => (
            <Card 
              className='relative group overflow-hidden bg-[linear-gradient(0.375turn,var(--color-background),var(--color-card),var(--color-card))] transform transition-transform duration-150 delay-0 ease-in-out hover:scale-103' 
              key={index}
            >
              <div className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
                <div className="md:max-w-[60%]">
                  {/* Title */}
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="mt-3">
                    {/* Description */}
                    {/* <p className='text-muted-foreground'>
                      {project.description}
                    </p> */}
                    <p 
                      className="text-muted-foreground" 
                      dangerouslySetInnerHTML={{ __html: project.description }} 
                    />

                    {/* Buttons */}
                    <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-2 mt-3">
                      {/* Project link button */}
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <Button variant="secondary" className="animate-button">
                            <OpenInNewWindowIcon />
                            {project.linkText || "Try it"}
                          </Button>
                        </Link>
                      )}

                      {/* Github Repo button */}
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank">
                          <Button variant="secondary" className="animate-button">
                            <svg fill='currentColor' viewBox='0 0 24 24'>
                              <path
                                fillRule='evenodd'
                                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                                clipRule='evenodd'
                              />
                            </svg>
                            GitHub Repo
                          </Button>
                        </Link>
                      )}
                    </div>

                    {/* Tags */}
                    {project.tags && (
                      <Tags tags={project.tags} className="mt-4" />
                    )}
                  </CardContent>
                </div>

                {/* Normal screen image */}
                {project.image && (
                  <Image 
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="absolute hidden md:block top-1/2 -translate-y-1/2 left-[65%] transition-all duration-150 delay-0 ease-in-out group-hover:left-[60%] h-[80%] w-auto max-h-64 rounded-lg"
                  />
                )}

                {/* Small screen image */}
                {project.image && (
                  <Image 
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="md:hidden mx-auto w-[80%] pb-2 rounded-lg"
                  />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}