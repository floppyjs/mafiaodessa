import Image from "next/image"
import { BtnWithFormModal } from "../BtnWithFormModal"

type KidsPriceCardProps = {
    title: string
    duration: string
    price: number
    minimum: number
    image: string
    features: string[]
    popular?: boolean
    max?: boolean
}

export const KidsPriceCard: React.FC<KidsPriceCardProps> = ({
    title,
    duration,
    price,
    minimum,
    image,
    features,
    popular = false,
    max = false,
}) => {
    return (
        <li
            className={`relative flex w-full max-w-[390px] flex-col overflow-hidden rounded-[20px] border bg-primary-dark-400 shadow-xl ${
                popular ? "border-red-500" : "border-white/10"
            }`}
        >
            {popular && (
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-xl bg-red-500 px-5 py-2 text-center text-sm font-semibold uppercase text-white">
                    ★ Найпопулярніший
                </div>
            )}

            <div className="relative h-[260px] w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-400 via-transparent to-transparent" />
            </div>

            <div className="flex flex-1 flex-col px-6 pb-7">
                <h3 className="mb-2 text-[28px] font-bold uppercase leading-tight text-white">
                    {title}
                    {max && (
                        <span className="ml-2 text-red-500">
                            MAX
                        </span>
                    )}
                </h3>

                <p className="mb-6 text-[20px] text-white/70">
                    {duration}
                </p>

                <div className="mb-6 h-px bg-white/10" />

                <ul className="mb-8 space-y-3">
                    {features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-center gap-3 text-[17px] text-white"
                        >
                            <span className="text-red-500">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto rounded-xl bg-black/20 px-5 py-5 text-center">
                    <div>
                        <span className="text-[36px] font-bold leading-none text-red-500">
                            {price}
                        </span>

                        <span className="ml-2 text-[16px] text-white">
                            грн/учасник
                        </span>
                    </div>

                    <div className="mt-4 border-t border-white/10 pt-4 text-[15px] text-white/70">
                        Мінімальне замовлення {minimum.toLocaleString("uk-UA")} грн
                    </div>
                </div>

                <BtnWithFormModal
                    btnClassName="mx-auto mt-6"
                    buttonsize="medium"
                    text="Замовити"
                />
            </div>
        </li>
    )
}
