'use client'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import {
  weekDays,
  TOTAL_WEEK_DAYS
} from "@utils/constants";

const getColor = (percent: number) => {
  if (percent && percent <= 33.3333) {
    return "error";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "warning";
  } else {
    return "success";
  }
};

export const WeekInfo = () => {
  let date = new Date()
  const dayOfWeek = weekDays[date.getDay()];
  let dayOfWeekd = date.getDay()
  if(dayOfWeekd == 0) dayOfWeekd = 7
  const currentWeekPercent = (dayOfWeekd / TOTAL_WEEK_DAYS) * 100;
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  let  weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);
  if(dayOfWeekd == 7) weekNumber = weekNumber - 1

  return (
    <div className="flex flex-col w-full">
      <Box component="span" sx={{ p: 4, my: 2, border: '1px solid grey', width:1, borderRadius:'10px', boxShadow:'3px 3px 3px grey' }}>
        <h1 className="font-bold py-8">
        {dayOfWeek}
        </h1>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" color={getColor(currentWeekPercent)} value={currentWeekPercent} />
          {weekNumber} Semanas
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(currentWeekPercent)}%`}</Typography>
        </Box>
      </Box>
    </Box>
  </div>
  );
};