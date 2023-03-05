import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ProjectItem(props) {
    return (
            <div className="flex flex-col gap-5 ">
                <div id="project-card" className={`w-full aspect-[4/3] md:aspect-video overflow-hidden relative bg-[#1e1e1e] rounded-2xl`} style={{ backgroundColor: `${props.bgColor}` }}>
                    <img className={`absolute rounded-xl transform transition-sm duration-700 ease-out ${props.classes}`} src={`/assets/images/projects/${props.cardImage}`} alt="" />

                    <div className="z-10 flex flex-row gap-3 absolute rounded-full top-4 md:top-8 right-4 md:right-8" >
                        {props.wip &&
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#111111] flex items-center justify-center">
                                <h2 className="text-white">WIP</h2>
                            </div>
                        }
                        {props.website &&
                         <a className="after:inset-0" href={props.website} target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>

                            </div>
                            </a>
                        }
                        {props.github &&
                        <a className="after:absolute after:inset-0" href={props.github} target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center">
                                <svg role="img" viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                            </div>
                            </a>
                        }
                    </div>

                </div>
                <div>
                    <h3 className="text-xl">{props.name}</h3>
                    <div className="flex">
                        <span className="opacity-70 text-lg">{props.job}</span>
                    </div>
                </div>
            </div>
    )
}