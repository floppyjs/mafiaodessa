import classNames from "classnames"

import { Heading } from "@/components/Heading"
import { Paragraph } from "@/components/Paragraph"
import { TournamentBlock } from "@/components/TournamentBlock"
import { Fallback } from "@/components/Fallback"

import { getTournaments } from "@/utils/getTournaments"

import data from "@/data/tournaments.json"
import { ITournamentItem } from "@/types"

import s from "./TournamentsSection.module.css"

export const TournamentsSection: any = async () => {
    const { title, text } = data
    let tournaments: ITournamentItem[] = [
        {
            id: "01",
            attributes: {
                title: "Black Sea Cup – весна",
                type: "Командний турнір",
                playersInTeam: 2,
                description:
                    "Весняний турнір на 2 особи, що задає тон літньому сезону. \n\n Цілі турніру:\n1. Підвищити рівень гри;\n2. Визначити найкращу команду з двох осіб та найкращого гравця в особистому заліку;\n4. Створити атмосферу для встановлення дружніх контактів між гравцями з різних міст.\n\nУсі учасники турніру грають по 14 ігор.Турнір триває протягом двох днів.",
                image: {
                    data: {
                        attributes: {
                            url: "/images/tournaments/BSC.png",
                            alternativeText: "BSC",
                        },
                    },
                },
            },
        },
        {
            id: "02",
            attributes: {
                title: "Summer Cup – літо",
                type: "Командний турнір",
                playersInTeam: 4,
                description:
                    "Один із найяскравіших і найтепліших турнірів, який зазвичай проводять на березі Чорного моря. У турнірі можуть взяти участь від 15 до 30 команд, у кожній по 4 особи.\n\n День №1 - проходить 4 відбіркові тури, де гравці розсаджуються випадковим чином. Потім відбувається фінальна гра з особистого заліку.\nДень №2 - проходить одна півфінальна гра між командами, які посіли перші 15 місць, за результатами якої визначається 10 команд фіналістів. Вони грають фінальну гру одночасно, за чотирма столами, де гравці, які набрали найбільшу кількість очок, гратимуть між собою.",
                image: {
                    data: {
                        attributes: {
                            url: "/images/tournaments/SC.png",
                            alternativeText: "SC",
                        },
                    },
                },
            },
        },
        {
            id: "03",
            attributes: {
                title: "Velvet Cup – осінь",
                type: "Командний турнір",
                playersInTeam: 3,
                description:
                    "Це осінній турнір, який закриває оксамитовий сезон і зазвичай відбувається наприкінці вересня або у жовтні.\n\nКількість учасників – 60. \nКоманди діляться по три особи та грають у загальній кількості 14 ігор.\n\n1 день – 8 відбіркових турів.\n2 день – 6 відбіркових турів.\n\nVelvet Cup, як і решта турнірів від Mafia Club Odesa, проходить під егідою ФІІМ та дотримується усіх відповідних правил.",
                image: {
                    data: {
                        attributes: {
                            url: "/images/tournaments/VC.png",
                            alternativeText: "VC",
                        },
                    },
                },
            },
        },
    ]

    // try {
    //   tournaments = await getTournaments();
    // } catch (error) {
    //   tournaments = null;
    // }

    return (
        <section className="pb-0">
            <div className={classNames("bg-primary-dark-200", s.section)}>
                <div
                    className={classNames(
                        "pt-[80px]",
                        tournaments && "bg-primary-dark-200"
                    )}
                >
                    <div className="container pb-[78px] xl:pb-[60px]">
                        <Heading
                            className="mb-6 font-semibold"
                            shadow_prop={title}
                        >
                            {title}
                        </Heading>
                        <Paragraph className="text-base mdOnly:w-[288px]">
                            {text}
                        </Paragraph>
                    </div>
                </div>
                {tournaments &&
                    tournaments.map((tournament, index) => (
                        <TournamentBlock
                            key={tournament.id}
                            tournament={tournament.attributes}
                            priorityImg={index === 0}
                        />
                    ))}
                {!tournaments && (
                    <div className="px-[1.5rem] pb-20 md:px-[5.25rem]">
                        <Fallback />
                    </div>
                )}
            </div>
        </section>
    )
}
