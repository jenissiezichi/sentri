import HeroCards from "./HeroCard.tsx";
export default function Hero (){
    return (
        <section className="mx-auto grid max-w-6xl items-center
         gap-12 px-6 py-16 md:grid-cols-2 md:py-14">
            <div>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
                Fraud stops here. Your money moves forward.
            </h1>
            <p className="mt-6 max-w-md text-lg">
Sentri checks every transfer and explain each decision in plain language.
            </p>

            <div className=" mt-8 flex flex-wrap gap-4 ">
                       <button className="cursor-pointer bg-accent text-white font-bold px-5 py-2 border-ink shadow-hard
         transition hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-hard-sm hover:bg-white hover:text-ink">Get Started</button>
<button className="border-2 border-ink bg-white px-6 py-3 font-bold shadow-hard transition
hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-hard-sm hover:bg-accent hover:text-white hover:border-white">Learn More</button>
            </div>
            </div>

           <HeroCards/>

        </section>
    )
}