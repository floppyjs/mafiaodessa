import classNames from "classnames"

import { Section } from "@/components/Section"

import { MafiaSchoolImage } from "@/components/MafiaSchoolImage"
import { LearnListLocation } from "@/views/Location/LearnListLocation"

import css from "./MafiaSchool.module.css"
import { ButtonPrimary } from "@/components/Buttons"

export const Location: React.FC = () => {
    const { image, imageAlt } = {
        image: "/images/location/background.jpg",
        imageAlt: "Локація",
    }

    const sectionStyles = classNames(
        css.schoolSection,
        "py-[80px] mx-auto relative bg-no-repeat bg-top bg-cover bg-grad_1200"
    )

    const containerStyles = classNames("container relative", css.container)

    const buttonStyles = classNames(
        "outline-without flex items-center justify-center gap-2 rounded-md bg-grad_100 px-3 font-semibold text-white-light",
        "hover:bg-grad_200 focus:border-[2px] focus:border-primary-light-500 active:border-none active:bg-grad_300",
        "active:text-primary-light-900 disabled:bg-gray-dark disabled:bg-none disabled:text-gray-medium",
        "transition-all duration-300"
    )

    return (
        <Section className={sectionStyles}>
            <div className={containerStyles}>
                <h1 style={{ color: "#f3f3f3", margin: "0 auto" }}>
                    Локація - ZiGRAYMO GAME ZONE
                </h1>
                <p style={{ color: "#f3f3f3", margin: "0 auto" }}>
                    {" "}
                    м. Одеса, вул. Жуковського, 6
                </p>
            </div>
            <div
                className={containerStyles}
                style={{
                    display: "flex",
                    margin: "0 auto",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <h1 style={{ color: "#f3f3f3", margin: "0 auto" }}>
                        Крім мафії ще є
                    </h1>
                    <LearnListLocation className="mb-[60px]" />
                    <a
                        className={buttonStyles}
                        href="https://odessa.zigraymo.com/"
                        target="_blank"
                    >
                        Детальніше
                    </a>
                </div>

                <MafiaSchoolImage image={image} alt={imageAlt} />
            </div>
        </Section>
    )
}
