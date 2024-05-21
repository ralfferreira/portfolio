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
import Image from "next/image"


function ModeToggle() {
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

      <div className="flex flex-col sm:flex-row m-0 sm:space-x-4 sm:items-center mt-8">
        <Avatar>
          <AvatarImage src="https://github.com/ralfferreira.png" />
          <AvatarFallback>Ralf</AvatarFallback>
        </Avatar>
        <p className="leading-7 text-xl mt-4 sm:mt-0">
          I am a computer engineering student focused on <span className="font-bold">software engineering</span> and <span className="font-bold">artificial intelligence</span>.
        </p>
      </div>

      <div className="flex space-x-4 mt-8">
        <Link href="https://www.linkedin.com/in/ralfferreira/" passHref target="blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi bi-linkedin fill-primary" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </Link>

        <Link href="https://github.com/ralfferreira" passHref target="blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi bi-github fill-primary" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </Link>
      </div>

      
      <h2 className="mt-16 sm:mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0" id="education">
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