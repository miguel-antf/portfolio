import { useEffect, useState } from "react"
import Head from 'next/head'
import Header from '../components/header-section/header'
import Footer from "../components/footer-section/footer";
import { MapPinIcon } from "@heroicons/react/24/outline";

import JobsList from '../data/job-list';
import EduList from "../data/education-list";
import AwardList from "../data/award-list";

import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

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



export default function Resume() {
  const [jobData, setJobData] = useState([]);
  const [eduData, setEduData] = useState([]);
  const [awardData, setAwardData] = useState([]);
  useEffect(() => {
    setJobData(JobsList);
    setEduData(EduList);
    setAwardData(AwardList);
  }, [JobsList, EduList, AwardList]);
  return (
    <>
      <div className='mx-auto'>
        <Head>
          <title>Miguel Ferreira</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section className="main-container h-screen overflow-auto ">
            <Header />
            <section className="row flex-col gap-8 md:gap-16 w-full py-[50px] md:py-[100px] pt-[200px] md:pt-[200px]">
            <Fade className="opacity-0" triggerOnce fraction={0} direction={"up"} keyframes={customAnimation}>
              <h2 className="text-6xl md:text-8xl p-0">Miguel Ferreira</h2>
              </Fade>
              <Fade className="opacity-0" triggerOnce fraction={0} delay={100} direction={"up"} keyframes={customAnimation}>
              <div className="flex flex-col gap-4">
                
                <p className="text-xl md:text-2xl leading-relaxed	p-0">Frontend developer and UI designer</p>
                <span className="text-xl md:text-2xl opacity-70 leading-relaxed	p-0">I possess a proactive and ambitious profile, with a strong focus on problem-solving. I am highly curious and interested in the operation of various techniques and platforms. I believe that I would be a valuable asset to any team, but I also possess the ability to perform exceptionally well and independently in individual roles.</span>
                <div className="flex flex-row gap-8 pt-4">
                  <a href="https://www.linkedin.com/in/miguelantf/" className="invert" target="_blank" rel="noopener noreferrer"><img height="28" width="28" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" /></a>
                  <a href="https://github.com/miguel-antf" className="invert" target="_blank" rel="noopener noreferrer"><img height="28" width="28" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" /></a>
                  <a href="https://www.instagram.com/miguelr.ferreira/" className="invert" target="_blank" rel="noopener noreferrer"><img height="28" width="28" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg" /></a>
                </div>
              </div>
              </Fade>

            </section >
            <section className="block">
              <div className='resume flex flex-col md:grid md:grid-cols-12 gap-16 	'>
                <div className='col-span-1 md:col-span-4 '>
                  <div className="sticky top-24">
                    <div className="flex flex-col gap-8 ">
                    <Fade className="opacity-0" triggerOnce direction={"up"} keyframes={customAnimation}>
                      <h3 className="text-3xl md:text-5xl">Awards</h3>
                      {awardData.map((award, index) => (
                        <div key={index}>
                          <h3 className='text-xl'>{award.award}</h3>
                          <div className='flex flex-col'>
                            <span className='opacity-70  pb-2'>{award.date}</span>
                            <span className="opacity-70">{award.description}</span>

                          </div>
                        </div>
                      ))}
                      </Fade>
                    </div>
                    <div className="flex flex-col gap-8 pt-12">
                    <Fade className="opacity-0" triggerOnce direction={"up"} keyframes={customAnimation}>
                      <h2 className="text-3xl md:text-5xl">Education</h2>
                      {eduData.map((edu, index) => (
                        <div key={index}>
                          <h3 className='text-xl'>{edu.course}</h3>
                          <div className='flex flex-col'>
                            <span className='opacity-70 pb-2'>{edu.date}</span>
                            <span className="opacity-70">{edu.school}</span>

                          </div>
                        </div>
                      ))}
                    </Fade>
                    </div>
                  </div>

                </div>
                <div className='col-span-8'>
                  <div className="flex flex-col gap-8">
                  < Fade className="opacity-0" triggerOnce  direction={"up"} keyframes={customAnimation}>
                    <h2 className="text-3xl md:text-5xl">Experience</h2>
                  </Fade>
                  <Fade className="opacity-0" triggerOnce cascade damping={0.1}  direction={"up"} keyframes={customAnimation}>
                    {jobData.map((job, index) => (
                      <div className='job'  key={index}>
                        <div className='flex flex-col md:flex-row'>
                          <h3 className='text-xl md:text-2xl'>{job.job}</h3>
                          <h3 className='text-xl md:text-2xl bullet'>{job.company}</h3>
                        </div>
                        <div className='flex flex-col'>
                          <div className='flex flex-row pt-1 pb-2'>
                            <span className='date'>{job.date}</span>
                            <span className='location flex pl-3 pr-1'><MapPinIcon className="h-6 h-6" />{job.location}</span>
                          </div>
                          <span className="text-lg opacity-70">{job.description}</span>
                        </div>
                      </div>
                    ))}
</Fade>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </section>
        </main>
      </div>
    </>
  )
}