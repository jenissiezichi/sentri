import ApiSection from "../components/ApiSection.tsx"
import Cards from "../components/Cards.tsx"
import Header from "../components/Header.tsx"
import Hero from "../components/Hero.tsx"
import HowItWorks from "../components/HowItWorks.tsx"
import MeetPurge from "../components/MeetPurge.tsx"
import NineChecks from "../components/NineCheck.tsx"
import Reveal from "../components/Reveal.tsx";
import Ticker from "../components/Ticker.tsx"

export default function Landing() {

    return(
        <div className="min-h-screen bg-paper text-ink">
        <Header/>
            <Reveal>   <Hero/></Reveal>
         <Reveal>   <Ticker/></Reveal>
         <Reveal>  <HowItWorks/></Reveal>
            <Reveal>  <MeetPurge/></Reveal>
       <Reveal>   <Cards/></Reveal>
         <Reveal>  <ApiSection/></Reveal>
       <Reveal>   <NineChecks/></Reveal>

        </div>
    )
}