import { Fade } from "react-awesome-reveal";

export default function Skills() {
    return (
        <section className="h-screen">
            <div className="md:sticky top-24 w-full">
              <Fade classname="opacity-0" triggerOnce fraction={0} direction={"up"}>
                <h2 className="text-6xl md:text-7xl">Skills</h2>
            </Fade>
            </div>

            <div className="w-full">
                <div className="grid gap-16 w-100 overflow-hidden grid-cols-1 ">
                <Fade classname="opacity-0" triggerOnce fraction={0} direction={"up"} cascade damping={0.1}>
                    <div className="col-span-2 row-span-1 flex flex-col gap-5">
                        <h3 className="text-2xl">Front-End Development</h3>
                        <div className="skill-list flex flex-row flex-wrap">
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Javascript</p>
                            <p>React</p>
                            <p>Jekyll</p>
                            <p>Next.js</p>
                            <p>Bootstrap</p>
                            <p>Tailwind</p>
                            <p>Git</p>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 flex flex-col gap-5">
                        <h3 className="text-2xl">Content management Systems (CMS)</h3>
                        <div className="skill-list flex flex-row flex-wrap">
                            <p>Wordpress</p>
                            <p>Shopify</p>
                            <p>Prestashop</p>
                            <p>Joomla</p>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 flex flex-col gap-5">
                        <h3 className="text-2xl">Design</h3>
                        <div className="skill-list flex flex-row flex-wrap">
                        <p>Figma</p>
                            <p>Photoshop</p>
                            <p>InDesign</p>
                            <p>Lightroom</p>
                            <p>Gimp</p>
                            
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 flex flex-col gap-5">
                        <h3 className="text-2xl">Other Skills</h3>
                        <div className="skill-list flex flex-row flex-wrap">
                            <p>Photography</p>
                            <p>Graphic Design</p>
                        </div>
                    </div>
                </Fade>
                </div>
            </div>


        </section >
    )
}