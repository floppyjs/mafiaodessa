import { Heading } from "@/components/Heading"
import { KidsPriceCard } from "@/components/KidsPriceCard"

import data from "@/data/pricingSectionData.json"

const corporatePrices = [
    {
        id: "corporate-mafia",
        title: "Мафія",
        duration: "2–2,5 години",
        price: 500,
        minimum: 5000,
        image: "/images/corporate/corporate-mafia.webp",
        features: [
            "Реквізит та атмосфера",
            "Професійний ведучий",
        ],
    },
    {
        id: "corporate-bunker",
        title: "Мафія + Бункер",
        duration: "3,5–4 години",
        price: 750,
        minimum: 7500,
        image: "/images/corporate/corporate-bunker.webp",
        features: [
            "Реквізит та атмосфера",
            "Бункер",
            "Професійний ведучий",
        ],
        popular: true,
    },
    {
        id: "corporate-no-filters",
        title: "БЕЗ ФІЛЬТРІВ 18+",
        duration: "4,5–5 годин",
        price: 800,
        minimum: 8000,
        image: "/images/corporate/corporate-no-filters.webp",
        features: [
            "Реквізит та атмосфера",
            "Професійний ведучий",
            "Гра «Без фільтрів» 18+",
        ],
    },
]

export const CorporatePricing: React.FC = () => {
    return (
        <section className="mx-auto bg-cover bg-top bg-no-repeat py-[80px]">
            <div className="container">
                <Heading
                    variant="primary"
                    shadow_prop={data.title}
                    className="mb-[60px] text-center"
                >
                    {data.title}
                </Heading>

                <ul className="flex flex-wrap justify-center gap-6">
                    {corporatePrices.map((rate) => (
                        <KidsPriceCard
                            key={rate.id}
                            title={rate.title}
                            duration={rate.duration}
                            price={rate.price}
                            minimum={rate.minimum}
                            image={rate.image}
                            features={rate.features}
                            popular={rate.popular}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}
