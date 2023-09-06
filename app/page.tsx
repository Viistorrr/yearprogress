import { WeekInfo } from "@components/WeekInfo";
import { MonthInfo } from "@components/MonthInfo";
import { YearInfo } from "@components/YearInfo";
import { Clock } from "@components/Clock";
import { Footer } from "@components/Footer";
import { Toast } from "@components/Toast";

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center h-screen bg-white text-slate-700">
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 items-center justify-center">
        <Clock />
        <div className="w-full pr-8 pb-8 pl-8">
          <WeekInfo />
          <MonthInfo />
          <YearInfo />
        </div>
        <b><i>Disclaimer:</i></b> Los datos están ok, Estoy Refactorizando y debo arreglar CSS pero ya quedó para mañana
      </div>
    <Footer />
    <Toast />
    </main>
  );
}