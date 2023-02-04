export const getColor = (percent: number) => {
    if (percent <= 33.3333) {
      return "bg-rose-400";
    } else if (33.3333 < percent && percent <= 66.6666) {
      return "bg-amber-400";
    } else {
      return "bg-emerald-400";
    }
  };