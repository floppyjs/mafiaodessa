import { HomeHero } from "@/views/HomeHero"
import { MafiaSchool } from "@/views/MafiaSchool"
import { KidsMafia } from "@/views/KidsMafia"

import { CorporatePresenters } from "@/views/CorporatePresenters"

const Home = () => (
    <>
        <HomeHero />
        <div className="common-bg">
       
            <MafiaSchool />
            <CorporatePresenters />
            <KidsMafia />
        </div>
    </>
)

export default Home
