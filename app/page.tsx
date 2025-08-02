import GameOfLifeCanvas from "@/components/GameOfLifeCanvas";
import Image from "next/image";
import { Icon } from '@iconify/react';


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

<Card className="flex justify-center  mt-0 w-[50%]"> 
        
  <CardHeader>
    
    <CardTitle>
      
      My tech stack</CardTitle>
      <Separator className="my-1  h-px" />
  </CardHeader>
  <CardContent>
    <p >Tools & Systems</p>
    
  </CardContent>
  
</Card>




      <Card className="flex justify-center  mt-0 w-[50%]"> 
        
  <CardHeader>
    
    <CardTitle>
      
      My tech stack</CardTitle>
      <Separator className="my-1  h-px" />
  </CardHeader>
  <CardContent>
    <p >Tools & Systems</p>
    <Carousel className="my-4">
  <CarouselContent>
     <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
      <Icon icon="simple-icons:burpsuite" className="text-orange-600"/>
    </div>
    <CardDescription className="text-center">BurpSuite</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
      <Icon icon="simple-icons:nextdotjs" style={{ color: '#000000' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">Next.js</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
<Icon icon="simple-icons:react" style={{ color: '#61DAFB' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">React</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
<Icon icon="simple-icons:git" style={{ color: '#F05032' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">git</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
<Icon icon="simple-icons:linux" style={{ color: '#FCC624' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">Linux</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
<Icon icon="simple-icons:docker" style={{ color: '#2496ED' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">Docker</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
<Icon icon="simple-icons:graphql" style={{ color: '#2496ED' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">GraphQL</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
<Icon icon="simple-icons:firebase" style={{ color: '#A8B9CC' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">Firebase</CardDescription>
    </CarouselItem>
    
  </CarouselContent>
</Carousel>

<Separator className="my-3  h-px" />

 <p>Languages</p>
    <Carousel className="my-3">
  <CarouselContent>
     

    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16">
      <i className="devicon-python-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">Python</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16">
      <i className="devicon-bash-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">Bash</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16">
      <i className="devicon-java-plain colored text-5xl"></i>
    </div>
    <CardDescription className="text-center">Java</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
<Icon icon="simple-icons:typescript" style={{ color: '#3178C6' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">TypeScript</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
<Icon icon="simple-icons:javascript" style={{ color: '#A8B9CC' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">JavaScript</CardDescription>
    </CarouselItem>
    
    
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
<Icon icon="simple-icons:c" style={{ color: '#A8B9CC' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">C</CardDescription>
    </CarouselItem>
    <CarouselItem className="basis-1/8" ><div className="flex justify-center items-center h-16 text-5xl">
      <Icon icon="simple-icons:tailwindcss" style={{ color: '#38BDF8' }} width="48" height="48" />
    </div>
    <CardDescription className="text-center">Tailwind (css)</CardDescription>
    </CarouselItem>
  </CarouselContent>
</Carousel>
  </CardContent>
  
</Card>



    </div>
    
  );
}
