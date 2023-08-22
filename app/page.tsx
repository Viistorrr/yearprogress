import Clock from "@components/Clock";
import Error from "@components/Error";
import { firebaseApp } from "./firebase/config"
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import Likes from "@components/Likes";
import Toast from "@components/Toast";
import WeekInfo from "@components/WeekInfo";
import MonthInfo from "@components/MonthInfo";
import YearInfo from "@components/YearInfo";

import {
  weekDays,
  months,
  TOTAL_DAYS,
  TOTAL_WEEK_DAYS
} from "@utils/constants";

const db = getFirestore(firebaseApp)

const updateData = async () => {
  const currentDay = doc(db, "yearprogress", "today");
  updateDoc(currentDay, {
    date: new Date
  });
}

const getColor = (percent: number) => {
  if (percent && percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

export default async function Home() {
  updateData()
  const options = { timeZone: 'America/Bogota',  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  let docRef = doc(db, "yearprogress", "today");
  const docSnap = await getDoc(docRef);
  const fecha = docSnap.data();
  let dbDate = new Date(fecha?.date.seconds * 1000)
  const day = dbDate.getDate();
  const month = (dbDate.getMonth() + 1);
  const year = dbDate.getFullYear().toString();
  let formattedDate = formatter.format(dbDate);
  formattedDate = `${day}/${month}/${year}`;
  const yearStart = new Date(dbDate.getFullYear(), 0, 0);
  const diff = (dbDate.getTime() - yearStart.getTime()) + ((yearStart.getTimezoneOffset() - dbDate.getTimezoneOffset()) * 60 * 1000);
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const dayOfWeek = weekDays[dbDate.getDay()];
  let dayOfWeekd = dbDate.getDay()
  if(dayOfWeekd == 0) dayOfWeekd = 7
  const currentWeekPercent = (dayOfWeekd / TOTAL_WEEK_DAYS) * 100;
  const firstDayOfYear = new Date(dbDate.getFullYear(), 0, 1);
  const pastDaysOfYear = (dbDate.getTime() - firstDayOfYear.getTime()) / 86400000;
  let  weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);
  if(dayOfWeekd == 7) weekNumber = weekNumber - 1
  const yearPercent = (dayOfYear / TOTAL_DAYS) * 100;

  return (
    <main className="flex flex-col w-full justify-center items-center h-screen bg-white text-slate-700">
      {dbDate ?
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 items-center justify-center">
          <Clock />
          <h2 className="flex justify-center text-2xl font-bold text-slate-600">
            {formattedDate}
          </h2>
          <div className="w-full  pr-8 pb-8 pl-8">
            <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
              <WeekInfo
                weekNumber={weekNumber}
                currentWeekPercent={currentWeekPercent}
                dayOfWeek={dayOfWeek}
                color={getColor(currentWeekPercent)}
                 />
            </div>
            <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
              <MonthInfo
                month={month}
                day={day}
                formattedDate={formattedDate}
                months={months} />
            </div>
            <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pt-2 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
              <YearInfo
                yearPercent={yearPercent}
                dayOfYear={dayOfYear} />
            </div>
          </div>
        </div> : <Error />}
      <div className="flex items-center align-center">
        <div className="mx-2">
          <a
            key="Instagram"
            href="https://www.instagram.com/iprogresodelano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-600"
          >
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 169.063 169.063">
              <path fill="#075985" d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z"/>
              <path fill="#075985" d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zm45.39-84.842c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 0 0-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z"/>
            </svg>
            </button>
          </a>
        </div>
          <div className="mx-2">
            <a
              key="Twitter"
              href="https://twitter.com/intent/tweet?text=https://www.progresodelano.info/ @iprogresodelano"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600"
            >
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <svg width="30" height="30" viewBox="0 -2 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#075985" d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0 0 20 1.89a8.273 8.273 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.292a8.303 8.303 0 0 1-2.606.98 4.153 4.153 0 0 0-5.806-.175 4.006 4.006 0 0 0-1.187 3.86A11.717 11.717 0 0 1 1.392.737a4.005 4.005 0 0 0 1.271 5.392A4.122 4.122 0 0 1 .8 5.624v.051c.001 1.923 1.378 3.579 3.292 3.96a4.144 4.144 0 0 1-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 0 1 0 14.185a11.754 11.754 0 0 0 6.29 1.812" fillRule="evenodd"/>
                </svg>
              </button>
            </a>
          </div>
          <div className="mr-2">
            <a
              key="Twitter"
              href="https://www.buymeacoffee.com/viistorrr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600"
            >
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 32 32"
  >
    <defs>
      <clipPath id="a">
        <path d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" data-name="Group 2792">
      <g data-name="Group 2767">
        <g data-name="Group 2766">
          <g data-name="Group 2765">
            <path
              fill="#075985"
              d="M28.718 17.632h-.312v-3.716h.573a1 1 0 0 0 .964-1.266 14.461 14.461 0 0 0-27.886 0 1 1 0 0 0 .964 1.266h.573v3.716h-.312a3.118 3.118 0 0 0-3.115 3.115v.4a3.111 3.111 0 0 0 2.257 2.981 2.942 2.942 0 0 0-.216 1.1v1.791a2.966 2.966 0 0 0 2.962 2.963h22.035a2.966 2.966 0 0 0 2.962-2.963v-1.791a2.925 2.925 0 0 0-.26-1.2 3.118 3.118 0 0 0 1.926-2.877v-.4a3.118 3.118 0 0 0-3.115-3.119ZM16 4.025a12.507 12.507 0 0 1 11.592 7.891H4.408A12.507 12.507 0 0 1 16 4.025Zm10.406 9.891v1.128a3.393 3.393 0 0 0-.472.354 1.068 1.068 0 0 1-1.628 0 2.048 2.048 0 0 0-2.943 0 1.064 1.064 0 0 1-1.623 0 2.046 2.046 0 0 0-2.942 0 1.06 1.06 0 0 1-1.62 0 2.041 2.041 0 0 0-2.938 0 1.058 1.058 0 0 1-1.618 0 2.042 2.042 0 0 0-2.939 0 1.06 1.06 0 0 1-1.62 0 3.23 3.23 0 0 0-.469-.35v-1.132ZM5.594 16.309a1.909 1.909 0 0 0 1.278.465 2.059 2.059 0 0 0 1.471-.624 1.059 1.059 0 0 1 1.619 0 2.04 2.04 0 0 0 2.938 0 1.059 1.059 0 0 1 1.618 0 2.042 2.042 0 0 0 2.939 0 1.064 1.064 0 0 1 1.623 0 2.045 2.045 0 0 0 2.941 0 1.067 1.067 0 0 1 1.626 0 2.036 2.036 0 0 0 1.473.624 1.892 1.892 0 0 0 1.286-.469v1.327h-.314a1 1 0 0 0-.937.65 1.88 1.88 0 0 1-1.749 1.224 1.844 1.844 0 0 1-1.184-.439 1.011 1.011 0 0 0-.355-.18.973.973 0 0 0-.12-.021 1.01 1.01 0 0 0-.163-.028 1.066 1.066 0 0 0-.187.017 1.275 1.275 0 0 1-1.351-.671 1 1 0 0 0-.895-.552H5.594Zm-3.427 4.438a1.116 1.116 0 0 1 1.115-1.115H18.6a3.248 3.248 0 0 0 2.706 1.245 3.788 3.788 0 0 0 2.1.629 3.888 3.888 0 0 0 3.308-1.874h2a1.116 1.116 0 0 1 1.115 1.115v.4a1.117 1.117 0 0 1-1.115 1.116H3.282a1.117 1.117 0 0 1-1.115-1.116Zm26 6.265a.964.964 0 0 1-.962.963H5.17a.964.964 0 0 1-.962-.963v-1.791a.963.963 0 0 1 .962-.962h22.035a.963.963 0 0 1 .962.962Z"
              data-name="Path 3916"
            />
          </g>
        </g>
      </g>
      <g data-name="Group 2770">
        <g data-name="Group 2769">
          <g data-name="Group 2768">
            <path
              fill="#075985"
              d="M20.347 7.5a.732.732 0 1 0-.732-.732.733.733 0 0 0 .732.732Z"
              data-name="Path 3917"
            />
          </g>
        </g>
      </g>
      <g data-name="Group 2773">
        <g data-name="Group 2772">
          <g data-name="Group 2771" transform="translate(-52 -208)">
            <circle
              cx={0.732}
              cy={0.732}
              r={0.732}
              fill="#075985"
              data-name="Ellipse 10"
              transform="translate(67.267 212.574)"
            />
          </g>
        </g>
      </g>
      <g data-name="Group 2776">
        <g data-name="Group 2775">
          <g data-name="Group 2774" transform="translate(-52 -208)">
            <circle
              cx={0.732}
              cy={0.732}
              r={0.732}
              fill="#075985"
              data-name="Ellipse 11"
              transform="translate(75.465 217.14)"
            />
          </g>
        </g>
      </g>
      <g data-name="Group 2779">
        <g data-name="Group 2778">
          <g data-name="Group 2777">
            <path
              fill="#075985"
              d="M11.844 7.5a.732.732 0 1 0-.732-.732.733.733 0 0 0 .732.732Z"
              data-name="Path 3918"
            />
          </g>
        </g>
      </g>
      <g data-name="Group 2782">
        <g data-name="Group 2781">
          <g data-name="Group 2780">
            <path
              fill="#075985"
              d="M16.192 7.238a.732.732 0 1 0 .732.733.733.733 0 0 0-.732-.733Z"
              data-name="Path 3919"
            />
          </g>
        </g>
      </g>
      <g data-name="Group 2785">
        <g data-name="Group 2784">
          <g data-name="Group 2783" transform="translate(-52 -208)">
            <circle
              cx={0.732}
              cy={0.732}
              r={0.732}
              fill="#075985"
              data-name="Ellipse 12"
              transform="translate(63.112 217.14)"
            />
          </g>
        </g>
      </g>
      <g data-name="Group 2788">
        <g data-name="Group 2787">
          <g data-name="Group 2786" transform="translate(-52 -208)">
            <circle
              cx={0.732}
              cy={0.732}
              r={0.732}
              fill="#075985"
              data-name="Ellipse 13"
              transform="translate(71.615 217.14)"
            />
          </g>
        </g>
      </g>
      <g data-name="Group 2791">
        <g data-name="Group 2790">
          <g data-name="Group 2789" transform="translate(-52 -208)">
            <circle
              cx={0.732}
              cy={0.732}
              r={0.732}
              fill="#075985"
              data-name="Ellipse 14"
              transform="translate(59.261 217.14)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
              </button>
            </a>
          </div>

          <Likes />
        </div>
      <div className="flex-col items-center justify-center text-sm text-sky-900 hover:text-sky-700 py-2">
        <a
          className=""
          href="https://www.viistorrr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.viistorrr.com
        </a>
      </div>
      <Toast />
    </main>
  );
}
