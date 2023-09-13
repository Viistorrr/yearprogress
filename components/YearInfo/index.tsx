'use client'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import {
  TOTAL_DAYS,
  getCurrentYear
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

export const YearInfo = () => {
  const date = new Date
  const yearStart = new Date(date.getFullYear(), 0, 0);
  const diff = (date.getTime() - yearStart.getTime()) + ((yearStart.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const yearPercent = (dayOfYear / TOTAL_DAYS) * 100;
  return (
    <div className="flex flex-col w-full">
      <Box component="span" sx={{ p: 4, mt: 2, border: '1px solid grey', width:1, borderRadius:'10px', boxShadow:'3px 3px 3px grey' }}>
       <h1 className="text-lg font-bold text-slate-700 py-2">
        {getCurrentYear()}
      </h1>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" color={getColor(yearPercent)} value={yearPercent} />
            {dayOfYear} días 
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(yearPercent)}%`}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
