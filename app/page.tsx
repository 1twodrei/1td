import GameOfLifeCanvas from "@/components/GameOfLifeCanvas";
import Image from "next/image";

import { Separator } from "@/components/ui/separator"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative z-10">
      {/* <GameOfLifeCanvas /> */}

      <Card className="flex justify-center  mt-50 w-[50%]"> 
        
  <CardHeader>
    
    <CardTitle>
      
      Technologies I use:</CardTitle>
      <Separator className="my-4  h-px" />
    {/* <CardDescription>Card Description</CardDescription> */}
  </CardHeader>
  <CardContent>
    <Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/6" ><div className="flex justify-center items-center h-16">
      <i className="devicon-python-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">Python</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/6" ><div className="flex justify-center items-center h-16">
      <i className="devicon-bash-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">Bash</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/6" ><div className="flex justify-center items-center h-16">
      <i className="devicon-java-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">Java</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/6" ><div className="flex justify-center items-center h-16">
      <i className="devicon-html-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">JavaScript</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/6" ><div className="flex justify-center items-center h-16">
      <i className="devicon-javascript-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">JavaScript</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/6" ><div className="flex justify-center items-center h-16">
      <i className="devicon-javascript-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">JavaScript</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/6" ><div className="flex justify-center items-center h-16">
      <i className="devicon-javascript-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">JavaScript</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/6" ><div className="flex justify-center items-center h-16">
      <i className="devicon-javascript-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">JavaScript</CardDescription>
    </CarouselItem>
    
  </CarouselContent>
</Carousel>
  </CardContent>
  
</Card>



    </div>
    
  );
}
