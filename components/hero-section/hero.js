import { Fade } from "react-awesome-reveal";

export default function Hero() {
    return (

        <section className="flex-col py-[50px] md:py-[100px] pt-[200px] md:pt-[200px]">
            <Fade triggerOnce cascade damping={0.1}>
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl md:text-4xl opacity-70">Miguel Ferreira</h2>
                    <div>
                        <h2 className="text-5xl md:text-8xl font-semibold">Frontend Dev</h2>
                        <h2 className="text-4xl md:text-8xl font-semibold type-skills"><a className="opacity-70">& </a> </h2>
                    </div>

                </div>

                <div className="flex flex-col flex-nowrap w-full">

                </div>
            </Fade>
        </section >

    )
}