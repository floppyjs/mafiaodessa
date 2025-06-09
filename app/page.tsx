import { HomeHero } from "@/views/HomeHero"
import { MafiaSchool } from "@/views/MafiaSchool"
import { CorporateParties } from "@/views/CorporateParties"
import { KidsMafia } from "@/views/KidsMafia"
import { Location } from "@/views/Location"
import { CorporatePresenters } from "@/views/CorporatePresenters"

const Home = () => (
    <>
        <HomeHero />
        <div className="common-bg">
            <Location />
            <MafiaSchool />
            <CorporatePresenters />
            <KidsMafia />
        </div>
    </>
)

export default Home
