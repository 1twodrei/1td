import GameOfLifeCanvas from "@/components/GameOfLifeCanvas";
import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-6 sm:p-12 flex flex-col items-center gap-12 relative z-10 my-[-210]">

{/* Tech Stack Card */}
      <Card className="w-full max-w-screen-md flex flex-col">
        <CardHeader className="text-center">
          <CardTitle>My Tech Stack</CardTitle>
          <Separator className="my-1" />
        </CardHeader>

        <CardContent>
          <p className="text-center mb-4">Tools & Systems</p>
          <Carousel className="mb-6">
            <CarouselContent>
              {[
                { icon: "simple-icons:burpsuite", color: "text-orange-600", label: "BurpSuite" },
                { icon: "simple-icons:nextdotjs", style: { color: "#000000" }, label: "Next.js" },
                { icon: "simple-icons:react", style: { color: "#61DAFB" }, label: "React" },
                { icon: "simple-icons:git", style: { color: "#F05032" }, label: "git" },
                { icon: "simple-icons:linux", style: { color: "#FCC624" }, label: "Linux" },
                { icon: "simple-icons:docker", style: { color: "#2496ED" }, label: "Docker" },
                { icon: "simple-icons:graphql", style: { color: "#2496ED" }, label: "GraphQL" },
                { icon: "simple-icons:firebase", style: { color: "#A8B9CC" }, label: "Firebase" },
              ].map(({ icon, style, color, label }, index) => (
                <CarouselItem key={index} className="basis-1/8">
                  <div className="flex justify-center items-center h-16 text-5xl">
                    <Icon icon={icon} style={style} className={color} />
                  </div>
                  <CardDescription className="text-center">{label}</CardDescription>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Separator className="my-6" />

          <p className="text-center mb-4">Languages</p>
          <Carousel>
            <CarouselContent>
              {[
                { icon: "devicon-python-plain colored", label: "Python" },
                { icon: "devicon-bash-plain colored", label: "Bash" },
                { icon: "devicon-java-plain colored", label: "Java" },
                { icon: "simple-icons:typescript", style: { color: "#3178C6" }, label: "TypeScript" },
                { icon: "simple-icons:javascript", style: { color: "#A8B9CC" }, label: "JavaScript" },
                { icon: "simple-icons:c", style: { color: "#A8B9CC" }, label: "C" },
                { icon: "simple-icons:tailwindcss", style: { color: "#38BDF8" }, label: "Tailwind (CSS)" },
              ].map(({ icon, label, style }, index) => (
                <CarouselItem key={index} className="basis-1/8">
                  <div className="flex justify-center items-center h-16 text-5xl">
                    {icon.startsWith("devicon-") ? (
                      <i className={icon}></i>
                    ) : (
                      <Icon icon={icon} style={style} />
                    )}
                  </div>
                  <CardDescription className="text-center">{label}</CardDescription>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardContent>
      </Card>


      {/* Top 2-Card Grid (aligned to tech stack width) */}
      <div className="w-full max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="flex flex-col">
          <CardHeader>
             <Avatar className="">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>1</AvatarFallback>
</Avatar>
            <CardTitle className="mx-10 my-[-27]">HackerOne</CardTitle>
            <Separator className="my-1" />
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button variant="outline" >
              My HackerOne profile</Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <Avatar className="">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>1</AvatarFallback>
</Avatar>
            <CardTitle className="mx-10 my-[-27]">GitHub</CardTitle>
            <Separator className="my-1" />
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button variant="outline" >My GitHub profile</Button>
          </CardContent>
        </Card>
      </div>

      
      
    </div>
  );
}
