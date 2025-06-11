import React from "react"
import { HallFameList } from "@/components/HallFameList"
import { Heading } from "@/components/Heading/Heading"
import hallFameHeading from "@/data/hallFameHeading.json"

import s from "@/views/HallFameSection/HallFameSection.module.css"

const shuffledData = [
    {
        id: "1",
        attributes: {
            title: "Пан Сова ",
            description:
                "Пан Сова Здобув 13 кубків. \n Найбільш пишається: \n Mafia Stars 2021 - 1 місце, особистий залік. \n FourGun 8 - 1 місце, особистий залік. \nРандеву 2021 - 1 місце, особистий та командний заліки.",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/sova.jpg",
                        alternativeText: "Пан Сова",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "Mafia Stars 2021",
                    place_number: "first",
                },
                {
                    id: 1,
                    competition_name: "FourGun 8",
                    place_number: "first",
                },
                {
                    id: 2,
                    competition_name: "Рандеву 2021",
                    place_number: "first",
                },
            ],
        },
        cups: [
            {
                id: 0,
                competition_name: "Mafia Stars 2021",
                place_number: "first",
            },
        ],
        idActive: null,
        setIdActive: null,
    },
    {
        id: "2",
        attributes: {
            title: "Пані Rock",
            description:
                "Пані Rock Здобула 10 кубків. \n Найбільш пишається: \n Vinnytsia Mafia Cup 2021 - 1 місце у командному заліку. \n Big Ben Hard Version 2018 - 3 місце в особистому заліку.",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/rock.jpg",
                        alternativeText: "Пан Сова",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "Vinnytsia Mafia Cup 2021",
                    place_number: "first",
                },
                {
                    id: 1,
                    competition_name: "Big Ben Hard Version 2018",
                    place_number: "third",
                },
            ],
        },
        cups: [
            {
                id: 0,
                competition_name: "Mafia Stars 2021",
                place_number: "first",
            },
        ],
        idActive: null,
        setIdActive: null,
    },
]

export const HallFameSection: React.FC = async () => {
    return (
        <section className={s.hallFameListContainer}>
            <div className="container py-[80px]">
                <Heading
                    tag="h1"
                    className="mb-[60px] text-[28px] font-semibold leading-9 md:text-[32px] xl:text-[42px] xl:leading-[52px]"
                    shadow_prop={hallFameHeading.heading.main}
                >
                    {hallFameHeading.heading.main}
                </Heading>
                <HallFameList shuffledData={shuffledData} />
            </div>
        </section>
    )
}
