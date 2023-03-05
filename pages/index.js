import Head from 'next/head'
import Header from '../components/header-section/header'
import Hero from '../components/hero-section/hero'
import Projects from '../components/projects-section/projects'
import About from '../components/about-section/about'
import Skills from '../components/skills-section/skills'
import Footer from '../components/footer-section/footer'

export default function Home() {
  return (
    <>
      <div className='mx-auto'>
        <Head>
          <title>Miguel Ferreira - Frontend Dev</title>
          <meta name="description" content="Miguel Ferreira - Frontend Dev" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="John Doe - Frontend Developer Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.miguelrferreira.com" />
          <meta property="og:image" content="https://www.miguelrferreira.com/assets/images/portfolio/header.png" />
          <meta property="og:description" content="I am a frontend developer with experience in HTML, CSS, and JavaScript. Check out my work and get in touch!" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
        </Head>
        <main className="bg-[url('/assets/images/bg-lines.svg')] bg-no-repeat bg-right-top bg-[length:130%] md:bg-[length:75%]">
          <section className="main-container h-screen overflow-auto">
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Footer />
          </section>
        </main>
      </div>
    </>
  )
}
