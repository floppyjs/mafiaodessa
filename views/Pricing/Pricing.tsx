import { Heading } from "@/components/Heading"
import { KidsPriceCard } from "@/components/KidsPriceCard"

import data from "@/data/pricingSectionData.json"

const kidsPrices = [
    {
        id: "mafia",
        title: "Мафія",
        duration: "2–2,5 години",
        price: 500,
        minimum: 5000,
        image: "/images/kidsMafia/kids-mafia.webp",
        features: [
            "Мафія",
            "Професійний ведучий",
        ],
    },
    {
        id: "mafia-bunker",
        title: "Мафія + Бункер",
        duration: "3,5–4 години",
        price: 700,
        minimum: 7000,
        image: "/images/kidsMafia/kids-bunker.webp",
        features: [
            "Мафія",
            "Бункер",
            "Професійний ведучий",
        ],
        popular: true,
    },
    {
        id: "mafia-bunker-max",
        title: "Мафія + Бункер",
        duration: "4,5–5 годин",
        price: 900,
        minimum: 9000,
        image: "/images/kidsMafia/kids-max.webp",
        features: [
            "Мафія",
            "Бункер",
            "Кубки переможцям",
            "Професійний ведучий",
        ],
        max: true,
    },
]

export const Pricing: React.FC = () => {
    return (
        <section className="mx-auto bg-cover bg-top bg-no-repeat py-[80px]">
            <div className="container">
                <Heading
                    variant="primary"
                    shadow_prop={data.title}
                    className="mb-[60px]"
                >
                    {data.title}
                </Heading>

                <ul className="flex flex-wrap justify-center gap-6">
                    {kidsPrices.map((rate) => (
                        <KidsPriceCard
                            key={rate.id}
                            title={rate.title}
                            duration={rate.duration}
                            price={rate.price}
                            minimum={rate.minimum}
                            image={rate.image}
                            features={rate.features}
                            popular={rate.popular}
                            max={rate.max}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}
