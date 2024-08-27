import { getPresenters } from "@/utils/api/getPresenters"

import { Section } from "@/components/Section"
import { Heading } from "@/components/Heading"
import { Slider } from "@/components/Slider"
import { SliderPresentersElement } from "@/components/SliderPresentersElement"
import { Fallback } from "@/components/Fallback"

import data from "@/data/corporateMainPage.json"
import css from "./CorporatePresenters.module.css"

export const CorporatePresenters: React.FC = () => {
    const { secondary_title } = data
    const presentersData = [
        {
            attributes: {
                name: "Валерія",
                description:
                    "Пані Архітектор має більше трьох років досвіду гри у мафію, а також веде ігрові вечори у клубі. Пані Архітектор радо поділиться з вами досвідом та дасть дружню пораду, зарядить будь-яке свято позитивним настроєм та створить комфортну атмосферу для всіх гравців.",
                img: {
                    data: {
                        id: "0",
                        attributes: { url: "/images/presenters/valeria.jpg" },
                    },
                },
            },
        },
        {
            attributes: {
                name: "Ярослав",
                description:
                    "Пан Ярл енергійний професіонал, володіє гострим розумом і одеським почуттям гумору. Маючи більше 5 років досвіду в організації різних заходів та 3 роки досвіду гри в мафію на спортивному рівні, він створює захоплюючу атмосферу та підтримує інтригу протягом усієї гри.",
                img: {
                    data: {
                        id: "1",
                        attributes: { url: "/images/presenters/yaroslav.jpg" },
                    },
                },
            },
        },
        {
            attributes: {
                name: "Ванесса",
                description:
                    "Пані Несса постійна ведуча вечорів у Mafia Club Odesa, чий досвід та любов до гри залишать у вас найяскравіші враження. Вона вміло контролює ігровий процес, забезпечує рівні можливості всім учасникам, дотримуючись принципу справедливості.",
                img: {
                    data: {
                        id: "2",
                        attributes: { url: "/images/presenters/nessa.jpg" },
                    },
                },
            },
        },
    ]

    return (
        <Section className={`${css.section_decor} bg-primary-dark-200`}>
            <div className="container">
                <Heading
                    tag="h2"
                    variant="secondary"
                    className="relative mb-[78px] mt-[18px]"
                >
                    {secondary_title}
                </Heading>
                {presentersData && presentersData.length > 0 ? (
                    <Slider
                        pagination
                        section="presenters"
                        element={SliderPresentersElement}
                        data={presentersData}
                        slideClassName="!h-auto mediaHover:hover:translate transform transition duration-300 ease-out"
                    />
                ) : (
                    <Fallback />
                )}
            </div>
        </Section>
    )
}
