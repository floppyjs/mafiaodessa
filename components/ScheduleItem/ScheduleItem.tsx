import React, { FC } from 'react';

import { ScheduleItemProps } from '@/types';

export const ScheduleItem: FC<ScheduleItemProps> = ({
  time_start,
  time_end,
  day,
}) => {
  return (
    <>
      <span>{day}</span>
      <span>
        {time_start} - {time_end}
      </span>
    </>
  );
};
