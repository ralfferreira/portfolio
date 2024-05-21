"use client"


import * as React from "react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink>
                home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#education" legacyBehavior passHref>
              <NavigationMenuLink>
                education
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#work" legacyBehavior passHref>
              <NavigationMenuLink>
                work
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <ModeToggle />

        </NavigationMenuList>
      </NavigationMenu>

      <h1 className="scroll-m-20 mt-16 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hi, I'm Ralf
      </h1>

      <div className="flex flex-row space-x-4 items-center mt-8">
        <Avatar>
          <AvatarImage src="https://github.com/ralfferreira.png" />
          <AvatarFallback>Ralf</AvatarFallback>
        </Avatar>
        <p className="leading-7 text-xl">
          I am a computer engineering student focused on <span className="font-bold">software engineering</span> and <span className="font-bold">artificial intelligence</span>.
        </p>
      </div>

      
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0" id="education">
        Education
      </h2>
      
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        UFPB - Universidade Federal da Paraíba
      </h3>
      <p className="mt-2 leading-7">
        Bachelor in Computer Engineering
      </p>
      <h4 className="mt-2 text-base text-neutral-500 dark:text-neutral-400">
      August 2022 - Present  |  João Pessoa, Brazil
      </h4>

      <h3 className="mt-16 scroll-m-20 text-2xl font-semibold tracking-tight">
        ETEC Professor Horácio Augusto da Silveira
      </h3>
      <p className="mt-2 leading-7">
        Technical Systems Analysis and Development
      </p>
      <h4 className="mt-2 text-base text-neutral-500 dark:text-neutral-400">
        January 2019 - December 2021  |  São Paulo, Brazil
      </h4>


      <h2 className="mt-24 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0" id="work">
        Work Experience
      </h2>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Freelancer - Software Engineer
      </h3>
      <p className="mt-2 leading-7">
        Developing web applications and software solutions for any kind of businesses.
      </p>
      <h4 className="mt-2 text-base text-neutral-500 dark:text-neutral-400">
        May 2023 - Present  |  Remote
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Notable projects: bamotf, Eating Dots, BK Reviews, BK Ads, BK Dash</li>
        <li>Tech: Typescript, Python, React.js, Next.js, Tailwind CSS, Docker, Prisma, Node.js</li>
      </ul>


      <h3 className="mt-16 scroll-m-20 text-2xl font-semibold tracking-tight">
        TAIL (Technology and Artificial Intelligence League) - Student Member
      </h3>
      <p className="mt-2 leading-7">
        Research and development of artificial intelligence solutions.
      </p>
      <h4 className="mt-2 text-base text-neutral-500 dark:text-neutral-400">
        September 2022 - Present  |  João Pessoa, Brazil
      </h4>


      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Computer Vision and NLP (Natural Language Processing).</li>
        <li>Tech: Python, OpenCV, YOLO, Transformers.</li>
      </ul>
    </div>
  );
}


export function ModeToggle() {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}