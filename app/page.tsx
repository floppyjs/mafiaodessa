import { HomeHero } from "@/views/HomeHero"
import { MafiaSchool } from "@/views/MafiaSchool"
import { CorporateParties } from "@/views/CorporateParties"
import { KidsMafia } from "@/views/KidsMafia"
import { Location } from "@/views/Location"

const Home = () => (
    <>
        <HomeHero />
        <div className="common-bg">
            <Location />
            <MafiaSchool />
            <CorporateParties />
            <KidsMafia />
        </div>
    </>
)

export default Home
