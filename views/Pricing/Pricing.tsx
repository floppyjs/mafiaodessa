import { fetchPricing } from "@/utils/api/fetchPricing"

import { Heading } from "@/components/Heading"
import { PriceCard } from "@/components/PriceCard"
import { Fallback } from "@/components/Fallback"

import data from "@/data/pricingSectionData.json"

export const Pricing: React.FC = async () => {
    const pricesInfo = [
        {
            id: "0",
            attributes: {
                rateType: "Мінімальний",
                amount: 4000,
                presenters: 1,
                duration: 4,
                extraPlayerPrice: 400,
                playersInTeam: 10,
                maxPlayersInTeam: 15,
            },
        },
        {
            id: "1",
            attributes: {
                rateType: "Максимальний",
                amount: 8000,
                presenters: 2,
                duration: 4,
                extraPlayerPrice: 400,
                playersInTeam: 16,
                maxPlayersInTeam: 26,
            },
        },
    ]

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

                {pricesInfo && pricesInfo?.length > 0 ? (
                    <ul className="flex flex-wrap justify-center gap-6">
                        {pricesInfo &&
                            pricesInfo.map((info) => (
                                <PriceCard
                                    key={info.id}
                                    rate={info.attributes}
                                />
                            ))}
                    </ul>
                ) : (
                    <Fallback />
                )}
            </div>
        </section>
    )
}
