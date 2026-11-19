const links = [
    "For Customers", "For Banks", "For Fintechs", "Docs"
]
export default function Header() {
   return (
     <header className="flex items-center justify-between px-6 py-4 border-b-2 border-ink">
        <a className="font-display text-3xl tracking-tight">
            sentri<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex gap-8 font-semibold">
            {links.map((link)=>(
                <a key={link} href="#" className="hover:text-accent">
{link}
                </a>
            ))}

        </nav>
        <button className="cursor-pointer bg-accent text-white font-bold px-5 py-2 border-ink shadow-hard
         transition hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-hard-sm">
            Get Onboard
        </button>
    </header>
   )
}