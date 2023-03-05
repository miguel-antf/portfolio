export default function Footer() {
    return (
        <footer className="p-4 md:px-6 md:py-8 flex flex-col text-center md:flex-row gap-1">
            <span className="block text-lg text-white sm:text-center opacity-70">Built with love using NextJS and Tailwind CSS</span>
            <span className="block text-lg text-white sm:text-center opacity-70">by <a className="opacity-100">Miguel Ferreira</a></span>
        </footer>
    )
}