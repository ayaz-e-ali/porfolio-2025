import { Button } from "@/components/button";
import Card from "@/components/card";
import { ArrowRight, ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";
import data from '@/data.json'

export default function Home() {
  return (
    <>
      {/* about */}
      <div id="about" className="scroll-mt-20 grid grid-cols-1 lg:grid-cols-2 h-[80vh] max-h-[40rem]">
        <div className="space-y-8">
          <h3 className="text-4xl text-center lg:text-left lg:text-7xl font-bold font-sans mt-10 lg:mt-20">
            FULL-STACK <br /> WEB DEVELOPER
          </h3>
          <p className="text-lg text-gray-400 font-sans text-center lg:text-left">
            I'm a {new Date().getFullYear() - 2002}-year-old full-stack web developer based in Northeast Syria with 3+ years of experience building fast, modern web applications. I specialize in React, Node.js, and Next.js, and enjoy creating projects that solve challenging problems. I’m always learning and ready to bring my skills to global teams and projects.
          </p>
          <div className="space-x-4 flex justify-center lg:justify-start">
            <Link href={'/projects'}>
              <Button className={"hover:child:translate-x-1"}>View My Work <ArrowRight size={22} className="inline transition-transform" /></Button>
            </Link>
            <Link href={'/resume.pdf'} rel="noopener noreferrer" target="_blank">
              <Button variant={'outline'}>View Resume <ArrowUpRightFromSquare size={22} className="inline ml-2" /> </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* projects */}
      <div id="projects" className="scroll-mt-10 mt-8 space-y-8">
        <h4 className="text-2xl text-center lg:text-left lg:text-5xl font-bold font-sans mt-10 lg:mt-20">
          Projects
        </h4>
        <div className="flex flex-wrap justify-center w-5/6 mx-auto gap-4 ">
          {
            data.projects.map(project =>
              <Card key={project.title} title={project.title} description={project.description} />)
          }
        </div>
      </div>

      <div id="contact" className="scroll-mt-10 h-96">

      </div>
    </>
  );
}
