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
    {
        id: "3",
        attributes: {
            title: "Пані Муза",
            description:
                "Виграла 2 кубки: \n West Cup 2024 - 1 місце в особистому заліку. \n Битва Чемпіонів 2024 - 3 місце в особистому заліку. \n Також пані Муза здобула звання: \n Найкращого дона у турнірі Twinblades - 3 \n Найкращого шерифа та найвбиванішого гравця WubbaLubbaDubDub Mafia Cup",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/muza.jpg",
                        alternativeText: "Пані Муза",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "West Cup 2024",
                    place_number: "first",
                },
                {
                    id: 1,
                    competition_name: "Битва Чемпіонів 2024",
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
    {
        id: "4",
        attributes: {
            title: "Пан Владюня",
            description:
                "Пан Владюня \n Здобув 7 кубків. \n Найбільш пишається: \n Hard Version 2020 , Velvet Cup 2021 , UMO 2021",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/vladuna.jpg",
                        alternativeText: "Пан Владюня",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "Hard Version 2020",
                    place_number: "first",
                },
                {
                    id: 1,
                    competition_name: "Velvet cup 2021",
                    place_number: "first",
                },
                {
                    id: 2,
                    competition_name: "UMO 2021",
                    place_number: "second",
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
        id: "5",
        attributes: {
            title: "Пані Америка",
            description:
                "пані Америка \n Виграла 7 кубків. \n Пишається тим, що тричі отримувала звання MVP. \n Останні кубки: \n Odessa Summer Cup 2021 \n Pro100.Sherlock Cup 2021 \n Black Sea Cup 2020",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/america.jpg",
                        alternativeText: "Пані Америка",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "Pro100.Sherlock Cup 2021",
                    place_number: "third",
                },
                {
                    id: 1,
                    competition_name: "Odessa Summer Cup 2021",
                    place_number: "second",
                },
                {
                    id: 2,
                    competition_name: "Black Sea Cup 2020",
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
    {
        id: "6",
        attributes: {
            title: "Пані Нора",
            description:
                "Пані Нора \n Головні досягнення: \n Кубок: Профессіональна Ліга Мафії 2018 - 1 місце в особистому заліку.",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/nora.jpg",
                        alternativeText: "Пані Нора",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "ПЛМ 2018",
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
        id: "7",
        attributes: {
            title: "Пані Звьоздочка",
            description:
                "пані Звьоздочка \n 15 кубків, з них 7 разів - перше місце. ",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/star.jpg",
                        alternativeText: "Пані Звьоздочка",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "Velvet cup 2021",
                    place_number: "first",
                },
                {
                    id: 1,
                    competition_name: "Битва за Север 2018",
                    place_number: "first",
                },
                {
                    id: 2,
                    competition_name: "Vinnytsia Mafia Cup 2018",
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
        id: "8",
        attributes: {
            title: "Пан Джан",
            description:
                "пан Джан \n Має 2 кубки: \n Ararat Cup 2021 - 1 місце в особистому заліку. \n  Four Elements Team Cup 2022: 2 місце.",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/jan.jpg",
                        alternativeText: "Пані Звьоздочка",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "Ararat Cup 2021",
                    place_number: "first",
                },
                {
                    id: 1,
                    competition_name: "Four Elements Team Cup 2022",
                    place_number: "second",
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
        id: "9",
        attributes: {
            title: "Пан Ройс",
            description:
                "пан Ройс \n Виграв 5 кубків. \n Нещодавні: \n Золото Рейна 2022 - 2 місце у командному заліку. \n Золото Рейна 2022 - 2 в особистому заліку.",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/roice.png",
                        alternativeText: "Пан Ройс",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "Золото Рейна 2022",
                    place_number: "second",
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
        id: "10",
        attributes: {
            title: "Пані Жирафа",
            description:
                "пані Жирафа \n Виграла 3 кубки: \n Randevu 2020 - 3 місце в особистому заліку. \n Ukrainian Mafia Open 2018 - 1 місце в особистому заліку. \n Mafia Summer Cup 2017 - 2 місце у командному заліку.",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/girafa.jpg",
                        alternativeText: "Пані Жирафа",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "Randevu 2020",
                    place_number: "third",
                },
                {
                    id: 1,
                    competition_name: "Ukrainian Mafia Open 2018",
                    place_number: "first",
                },
                {
                    id: 2,
                    competition_name: "Mafia Summer Cup 2017",
                    place_number: "second",
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
        id: "11",
        attributes: {
            title: "Пан Ross",
            description:
                "пан Ross - Чемпіон Світу 2013 \n Деякі з останніх нагород: \n Mafia Teams World Championship 2018 \n Mafia Summer Cup 2017 \n БИТВА ЧЕМПІОНІВ 2016",
            img: {
                data: {
                    id: 0,
                    attributes: {
                        url: "/images/hallOfFame/ross.jpg",
                        alternativeText: "Пані Ross",
                    },
                },
            },
            createdAt: "2025-06-11T20:16:00.000Z",
            updatedAt: "2025-06-11T20:16:00.000Z",
            publishedAt: "2025-06-11T20:16:00.000Z",
            cups: [
                {
                    id: 0,
                    competition_name: "Mafia Teams World Championship 2018",
                    place_number: "third",
                },
                {
                    id: 1,
                    competition_name: "Mafia Summer Cup 2017",
                    place_number: "second",
                },
                {
                    id: 2,
                    competition_name: "БИТВА ЧЕМПІОНІВ 2016",
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
