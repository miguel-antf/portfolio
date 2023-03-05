import { useRouter } from "next/router";
import ProjectList from "../data/project-list";
import Head from 'next/head'
import Header from '../components/header-section/header'
import Footer from "../components/footer-section/footer"

import { keyframes } from "@emotion/react";
import { Fade, Zoom } from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function Project() {

  const router = useRouter()
  const { id } = router.query

  const project = ProjectList.find(p => p.link === id)

  if (!project) {
    return
  }


  return (
    <div className='mx-auto'>
      <Head>
        <title>Miguel Ferreira</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="absolute top-0 left-0 right-0 w-full h-5/6	">
          <div className="w-full h-full !bg-cover" style={{ background: `linear-gradient(to bottom, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 1) 100%), url('/assets/images/projects/${project.bgImage}') no-repeat fixed` }}
          ></div>
        </div>

        <section className="main-container h-screen overflow-auto bg-transparent">

          <Header />

          <section className="py-[100px] pt-[200px]">
            <div className="w-full">
              <Fade classname="opacity-0" triggerOnce fraction={0} direction={"up"} keyframes={customAnimation}>
                <h2 className="text-5xl md:text-8xl">{project.title}</h2>
              </Fade>
            </div>

            <div className="w-full">
              <Fade classname="opacity-0" triggerOnce fraction={0} direction={"up"} cascade damping={0.1} keyframes={customAnimation}>
                <p className="text-xl md:text-lg leading-relaxed	pb-3 opacity-60 font-light">{project.job}</p>
                <span className="text-xl md:text-2xl opacity-70 leading-7 font-normal	">{project.descOne}</span>
              </Fade>
            </div>
          </section >

          <section className="pt-0 md:p-0">
            <Fade classname="opacity-0" triggerOnce fraction={0} direction={"up"} keyframes={customAnimation}>
              <img className="rounded-2xl w-full h-full object-cover" src={`/assets/images/projects/${project.mainImage}`} alt="" />
            </Fade>
          </section>

          <section className="items-center ">
            <div className="w-full">
              <Fade classname="opacity-0" triggerOnce fraction={0} direction={"up"} keyframes={customAnimation}>
              <h2 className="text-5xl md:text-6xl"> {project.wip ? "Being built with" : "Built with"}</h2>
             
              </Fade>
            </div>

            <div className="flex flex-row flex-wrap md:flex-nowrap gap-8 w-full ">
              <Fade classname="opacity-0" triggerOnce fraction={0} direction={"up"} delay={100} keyframes={customAnimation} >
                {project.tech.map((tech, index) => (
                  <span className="text-2xl md:text-3xl opacity-70">{tech}</span>
                ))}
              </Fade>
            </div>
          </section >

          <section className="gap-16">
            <div className="w-full md:sticky top-24 flex flex-col gap-8">
              <Fade classname="opacity-0" triggerOnce fraction={0} direction={"up"} cascade damping={0.1} keyframes={customAnimation} >
                <h5 className="text-5xl md:text-6xl">About</h5>
                <div>
                  {project.descTwo && project.descTwo.map((descTwo, index) => (
                    <p className="text-xl md:text-2xl opacity-70 leading-extra-loose">{descTwo}</p>
                  ))}

                </div>
                {project.website &&
                  <a href={`${project.website}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xl md:text-lg font-medium rounded-md text-white">
                    Visit Website
                    <svg className="ml-2 h-5 w-5 transform transition-transform hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 10.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 1 0 0 2h8.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4z" clipRule="evenodd" />
                    </svg>
                  </a>
                }
              </Fade>

            </div>

            <div className="flex flex-row gap-8 w-full justify-end	">
              <Fade classname="opacity-0" triggerOnce fraction={0} direction={"up"} delay={100} keyframes={customAnimation} >
                <img className="rounded-2xl" src={`/assets/images/projects/${project.sideImage}`} alt="" />
              </Fade>
            </div>
          </section >

          {project.video &&
            <section className="pt-0 md:p-0">
              <video autoPlay muted loop playsInline className="rounded-2xl w-full h-full object-cover">
                <source src={`/assets/videos/${project.video}`} type="video/webm" />
              </video>
            </section>
          }



          <Footer />
        </section>
      </main>
    </div>
  )
}