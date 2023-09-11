'use client'
import { tss } from "tss-react/mui";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import { useState } from "react";
import {
  weekDays,
  TOTAL_WEEK_DAYS
} from "@utils/constants";

type Props = {
  className?: string;
};

const getColor = (percent: number) => {
  if (percent && percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

export const WeekInfo = (props: Props) => {
  const {className} = props
  const [isClicked, setIsClicked] = useState(false);

    const { classes, cx } = useStyles({ "color": isClicked ? "blue": "red" });
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
    <Box component="span" sx={{ p: 4, border: '1px solid grey', width:1, borderRadius:'10px', boxShadow:'3px 3px 3px grey' }}>
      <h1 className="font-bold py-8">
        {weekNumber} Semanas
      </h1>
      <div className="flex flex-row w-full items-center align-center">
        <div className="flex items-center w-full bg-slate-100 rounded-lg h-2">
          <div
              className={`flex items-center justify-center py-4 ${getColor(currentWeekPercent)} h-2`}
            style={{
              width: currentWeekPercent.toString() + "%"
            }}
          >
            <span className="text-sm font-bold pr-4">
              {dayOfWeek}
            </span>
          </div>
        </div>
        <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
          {currentWeekPercent.toFixed(0)}%
        </h1>
      </div>
      </Box>
    </div>
    
  );
};

const useStyles = tss
    .withParams<{ color: "red" | "blue"; }>()
    .create(({ theme, color })=> ({
        root: {
            // The color of the text is either blue or red depending of 
            // the state fo the component.
            color,
            // When the curser is over the button has a black border
            "&:hover": {
                border: '4px solid black'
            },
            // On screens bigger than MD the button will have a big cyan border
 	    [theme.breakpoints.up("md")]: {
	        border: '10px solid cyan'
	    }
        }
    }));