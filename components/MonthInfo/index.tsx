'use client'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import {
  months,
  getMonthPercent,
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

export const MonthInfo = () => {
  let date = new Date()
  const day = date.getDate();
  const month = (date.getMonth() + 1);
  let dayOfWeekd = date.getDay()
  if(dayOfWeekd == 0) dayOfWeekd = 7
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  let  weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);
  if(dayOfWeekd == 7) weekNumber = weekNumber - 1
  
  return (
    <div className="flex flex-col w-full">
      <Box component="span" sx={{ p: 4, border: '1px solid grey', width:1, borderRadius:'10px', boxShadow:'3px 3px 3px grey' }}>
        <h1 className="font-bold py-4 text-slate-700">
          {day} de {months[month].name}
          </h1>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" color={getColor(getMonthPercent(month, day))} value={getMonthPercent(month, day)} />
            Mes <b>{month}</b>
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(getMonthPercent(month, day))}%`}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
