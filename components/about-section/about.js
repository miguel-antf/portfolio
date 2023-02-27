export default function About() {
    return (
        <section>
            <div className="md:sticky top-24 w-full">
                <h2 className="text-6xl md:text-7xl">About me</h2>
            </div>

            <div className="flex flex-col flex-nowrap w-full">
                <div className="grid gap-8 w-100 overflow-hidden grid-cols-2 grid-rows-2 grid-rows-auto">
                    <div className="col-span-2 row-span-1 animate-fade-in-down bottom-8">
                        <p className="text-xl md:text-2xl opacity-70 leading-relaxed">I am a Porto-based front-end developer with a passion for design and a proactive approach to always learn and grow.</p>
                        <p className="text-xl md:text-2xl opacity-70 leading-relaxed">When I'm not in front of my computer,  I like to stay active by going to the gym, riding my motorcycle, and exploring the outdoors.</p>
                    </div>
                    <div className="col-span-1 row-span-2"><img className="object-cover h-full rounded-2xl" src="../assets/images/about-me/1.jpg" /></div>
                    <div className="col-span-1 row-span-1"><img className="object-cover h-full rounded-2xl" src="../assets/images/about-me/2.jpg" /></div>
                    <div className="col-span-1 row-span-1"><img className="object-cover h-full rounded-2xl" src="../assets/images/about-me/4.jpg" /></div>
                </div>
            </div>
        </section >
    )
}