import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react"

import {
    FieldErrors,
    FieldValues,
    UseFormRegister,
    RegisterOptions,
} from "react-hook-form"

export interface LogoProps {
    href: string
    position: "header" | "footer" | "mobile-menu"
    className?: string
    onClick?: () => void
}

type HeadingTag = "h1" | "h2" | "h3"

type HeadingVariant =
    | "main"
    | "primary"
    | "secondary"
    | "tertiary"
    | "privacy-policy"

export interface HeadingElementProps {
    className?: string
    shadow_prop?: string
    rest?: HTMLAttributes<HTMLHeadingElement>
}

export interface HeadingComponentProps extends HeadingElementProps {
    tag?: HeadingTag
    variant?: HeadingVariant
    children: React.ReactNode
}

type ParagraphVariant = "normal" | "large" | "small"

export interface ParagraphProps {
    children: React.ReactNode
    variant?: ParagraphVariant
    className?: string
}

export interface NavigationRowProps {
    position: "header" | "footer" | "mobile-menu"
    className?: string
    onClick?: () => void
}

export type SocialContact = {
    name: string
    link: string
    icon: string
}

type SocialMenuVariants = "fixed" | "footer" | "mobile-menu"

export interface SocialsMenuProps {
    variant?: SocialMenuVariants
    className?: string
    onClick?: () => void
}

export interface SocialButtonProps {
    link: string
    aria_label: string
    variant?: SocialMenuVariants
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export interface SocialIconProps {
    icon: string
    variant?: SocialMenuVariants
    className?: string
}

type ButtonPrimaryVariants = "small" | "medium" | "large" | undefined

export interface ButtonPrimaryProps {
    buttonsize?: ButtonPrimaryVariants
    type?: "button" | "submit" | undefined
    disabled?: boolean
    loading?: boolean
    className?: string
    children: string
    actionHandler?: () => void
}

export interface ButtonSecondaryProps {
    linkto: string
    buttonsize?: "medium" | "large" | undefined
    loading?: boolean
    className?: string
    children: string
}

export type IconBtnName = "cross" | "arrow" | "scroll"

export interface IconBtnProps {
    icon: IconBtnName
    reverse?: boolean
    onClick?: () => void
    classes?: string
}

export interface LearnListProps {
    className?: string
}

export interface NavigationRowLinkProps {
    currentPath: string | null
    href: string
    position: string
    title: string
    onClick?: () => void
}

export interface SectionProps {
    children: React.ReactNode
    className?: string
}

export interface LearnListItemProps {
    title: string
    desc: string
}

type ContactsVariants = "footer" | "mobile-menu"

export interface ContactsProps {
    variant?: ContactsVariants
    className?: string
}

export interface MafiaSchoolImageData {
    src: string
    alt: string
}

export interface MafiaSchoolHeroData {
    heading: {
        level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
        content: string
        variant: string
    }
    paragraph: string
    subtitle: {
        level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
        content: string
    }
    images: {
        main: MafiaSchoolImageData
        grid: MafiaSchoolImageData[]
    }
}

export interface ClubKidsMafiaCardProps {
    subtitle: string
    text: string
    iconDescr: string
}
interface IKidsMafiaCard {
    iconDescr: string
    subtitle: string
    text: string
}

export interface KidsMafiaConditionsProps {
    conditions: { title: string; cards: IKidsMafiaCard[] }
    btn: string
}

export interface IPortal {
    children: ReactNode
    onModalClose: () => void
    className?: string
    showModal?: boolean
}

export interface ScheduleProps {
    className?: string
}

export interface ScheduleItemProps {
    id: string
    day: string
    time_start: string
    time_end: string
}

export interface ScheduleDataType {
    schedule: {
        data: {
            attributes: {
                schedules: ScheduleItemProps[]
            }
        }
    }
}

//---HallFame----
export interface HallFameCards {
    data: HallFameCardProps[]
}

export interface HallFameCardDataType {
    flipCards: HallFameCards
}

export interface MobileMenuBtnProps {
    className?: string
    onClick: () => void
}

export interface HallFameCup {
    id: number
    competition_name: string
    place_number: string
}

export interface HallFameImageAttributes {
    url: string
    alternativeText: string
}

export interface HallFameImageData {
    id: number
    attributes: HallFameImageAttributes
}

export interface HallFameImage {
    data: HallFameImageData
}

export interface HallFameAttributes {
    title: string
    description: string
    img: HallFameImage
    createdAt: string
    updatedAt: string
    publishedAt: string
    cups: HallFameCup[]
}

export interface HallFameCardProps {
    id: string
    attributes: HallFameAttributes
    cups: HallFameCup[]
    idActive: string | null
    setIdActive: React.Dispatch<React.SetStateAction<string | null>>
}

export interface HallFameCustomCardProps {
    id?: string
    title?: string
    src?: string
    alt?: string
}

export interface HallFameListProps {
    shuffledData: (HallFameCardProps | HallFameCustomCardProps | undefined)[]
}
// ---- FORM START ---

export type InputT = {
    id: string
    label: string
    type?: string
    placeholder: string
    name: string
    options: Record<string, RegisterOptions>
}

export type TextAreaT = {
    id: string
    label: string
    placeholder: string
    name: string
    options: Record<string, RegisterOptions>
}

export interface TextAreaProps {
    textarea: TextAreaT
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    className: string
}

export interface InputProps {
    input: InputT
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

export interface FormProps {
    classes?: string
    center?: boolean | undefined
    setPopUpType: Dispatch<SetStateAction<"success" | "error">>
}

export type FormData = {
    userName: string
    phoneNumber: string
    userComment: string
}

// ---- FORM END ---

export interface FooterLinkItemProps {
    // [any: string]: string;
    title: string
    href: string
    internalLink: boolean
}

export interface SliderProps {
    section: "school" | "presenters" | "corporate" | "location"
    pagination?: boolean
    navigation?: boolean
    autoplay?: boolean
    data: any
    element: any
    allowTouchMove?: boolean
    className?: string
    slideClassName?: string
}

interface SliderElementProps {
    id: string
    imageUrl: string
}

export interface SliderSchoolElementProps extends SliderElementProps {
    alias: string
    name: string
}

export interface SliderCorporateElementProps extends SliderElementProps {
    imageUrl: string
    altText: string
    priority?: boolean
}

export interface SliderPresentersElementImageType {
    data: {
        id: string
        attributes: { url: string }
    }
}

export interface SliderPresentersElementItemProps {
    attributes: {
        name: string
        description: string
        img: SliderPresentersElementImageType
    }
}

export interface SliderPresentersDataType {
    presenters: {
        data: SliderPresentersElementItemProps[]
    }
}

export interface SliderNavigationProps {
    handlePrevClick: () => void
    handleNextClick: () => void
}

export interface SliderImageProps {
    src: string
    alt: string
    className?: string
    imageClassName?: string
}

export interface PresenterImageType {
    data: {
        id: string
        attributes: { url: string }
    }
}

export interface PresenterItemProps {
    attributes:
        | { name: string; description: string; img: PresenterImageType }
        | undefined
}

export interface PresentersDataType {
    presenters: {
        data: PresenterItemProps[]
    }
}

export type PriceRateInfo = {
    rateType: string
    amount: number
    presenters: number
    duration: number
    extraPlayerPrice: number
    playersInTeam: number | null
    maxPlayersInTeam: number | null
}

export type PriceInfo = {
    id: number
    attributes: PriceRateInfo
}

export type PricesData = PriceInfo[] | undefined

export interface PricesDataType {
    prices: {
        data: PricesData
    }
}

export interface PriceCardProps {
    rate: PriceRateInfo
}

export interface SkillsListItemProps {
    text: string
    icon: string
    idx: number
}

export interface ITournament {
    title: string
    type: string
    playersInTeam: number
    description: string
    image: {
        data: {
            attributes: {
                url: string
                alternativeText: string
            }
        }
    }
}

export interface ITournamentItem {
    id: string
    attributes: ITournament
}

export interface ITournamentsData {
    tournaments: {
        data: ITournamentItem[]
    }
}

export interface TournamentBlockProps {
    tournament: ITournament
    priorityImg: boolean
}

export interface LoaderProps {
    size: number
    color: string
}

export interface SkillsListProps {
    className?: string
}

export interface SectionImageProps {
    image: string
    alt: string
}

export interface IPrivacyPolicy {
    privacyPolicy: {
        data: {
            attributes: {
                text: string
            }
        }
    }
}

export type PopUpType = "default" | "success" | "error"

export interface BtnWithFormModalProps {
    buttonsize: ButtonPrimaryVariants
    text: string
    btnClassName?: string
}
