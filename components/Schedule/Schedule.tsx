import React, { FC } from 'react';

import { ScheduleItem } from '../ScheduleItem';
import { ScheduleProps,ScheduleItemProps } from '@/types';
import { Fallback } from '../Fallback';



const schedules:ScheduleItemProps[] = [
  {id:'0',day:'Понеділок',time_start:'17:00',time_end:'23:00'},
  {id:'0',day:'Середа',time_start:'17:00',time_end:'23:00'},
  {id:'0',day:'Четвер',time_start:'17:00',time_end:'23:00'},
  {id:'0',day:'Субота',time_start:'15:00',time_end:'23:00'},
]

export const Schedule: FC<ScheduleProps> = async ({ className }) => {
  
  return (
    <>
      {schedules.length > 0 ? (
        <ul
          className={`grid gap-4 md:w-[236px] xl:w-[300px] xxl:w-[418px] ${className}`}
        >
          {schedules.map(scheduleItem => {
            return (
              <li
                key={scheduleItem.id}
                className=" flex justify-between rounded-md bg-grad_700 py-2 pr-4"
              >
                <ScheduleItem {...scheduleItem} />
              </li>
            );
          })}
        </ul>
      ) : (
        <Fallback variant="small" className="mb-6" />
      )}
    </>
  );
};
