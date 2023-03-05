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

export default function Hero() {
    return (

        <section className="flex-col py-[50px] md:py-[100px] pt-[200px] md:pt-[200px]">
                <div className="flex flex-col gap-4 md:gap-8">
                    <Fade classname="opacity-0" triggerOnce direction={"up"} keyframes={customAnimation}>
                    <h2 className="text-2xl md:text-4xl opacity-60">Miguel Ferreira</h2>
                    </Fade>
                    <Fade classname="opacity-0" triggerOnce direction={"up"} cascade damping={0.2} keyframes={customAnimation}> 
                        <h2 className="text-7xl md:text-9xl font-semibold	">Frontend Dev</h2>
                        <h2 className="text-4xl md:text-8xl type-skills font-semibold	"><a className="opacity-70">& </a> </h2>
                    </Fade>

                </div>

                <div className="flex flex-col flex-nowrap w-full">

                </div>
        </section >

    )
}