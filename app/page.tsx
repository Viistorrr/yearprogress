import { WeekInfo } from "@components/WeekInfo";
import { MonthInfo } from "@components/MonthInfo";
import { YearInfo } from "@components/YearInfo";
import { Years } from "@components/Years";
import { Clock } from "@components/Clock";
import { Footer } from "@components/Footer";
import { Toast } from "@components/Toast";

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center h-screen bg-white text-slate-700">
      <div className="flex w-full items-center justify-center">
        <iframe src="https://giphy.com/embed/7Z8QOXkz3USMDb9NZH" width="60" height="80" className="giphy-embed rounded-lg mb-4" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/poop-toilet-poo-7Z8QOXkz3USMDb9NZH"></a></p>
        <div className="flex flex-col w-2/12">
          <span className="font-bold my-12 gap-3 ml-4">esta semana</span>
          <span className="font-bold my-12 gap-3 ml-4">este mes</span>
          <span className="font-bold my-12 gap-3 ml-4">este año</span>
        </div>
        <div className="w-10/12 pb-8">
          <WeekInfo />
          <MonthInfo />
          <YearInfo />
        </div>
      </div>
      <Years />
      <Footer />
      <Toast />
    </main>
  );
}