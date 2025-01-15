"use client"
import { useEffect } from "react";
import Hero from "@/components/main/Hero";
import MyWorkings from "@/components/main/MyWorkings";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  useEffect(() => {
    // Ensure that we only run this code in the browser
    const progress = document.getElementsByClassName("progressbar")[0];
    const totalheight = document.body.scrollHeight - window.innerHeight;

    const handleScroll = () => {
      const progressHeight = (window.pageYOffset / totalheight) * 100;
      progress.style.height = progressHeight + "%";
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="h-full w-full">
      <div className="progressbar"></div>
      <div className="scrollPath"></div>
      <div className="flex flex-col gap-5 lg:gap-20">
        <Hero />
        <Skills />
        <Projects />
        <MyWorkings />
      </div>
    </main>
  );
}
