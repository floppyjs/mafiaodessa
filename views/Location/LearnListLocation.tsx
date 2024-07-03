import React, { FC } from "react"

import { LearnListItem } from "@/components/LearnListItem"
import location from "@/data/location.json"
import { LearnListProps } from "@/types"

export const LearnListLocation: FC<LearnListProps> = ({ className }) => {
    return (
        <ul
            className={`grid justify-end gap-6 md:w-[288px] xl:flex xl:w-[596px] xl:flex-wrap xxl:w-[864px]  ${className}`}
        >
            {location.learnList.map(({ title, desc }, idx) => {
                return (
                    <li
                        key={idx}
                        className=" rounded-md bg-primary-dark-400 p-6 xl:w-[286px] xl:px-8 xxl:w-[420px] xxl:px-11"
                    >
                        <LearnListItem title={title} desc={desc} />
                    </li>
                )
            })}
        </ul>
    )
}
