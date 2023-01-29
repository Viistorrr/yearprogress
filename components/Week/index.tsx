const Week = ({weekDay}:any) => {

 
  return (
    <div className="flex flex-wrap items-center py-2">
        <div className={`px-6 ${weekDay === 7 ? 'font-bold bg-emerald-200 rounded-full border-2 border-emerald-500':''}`}>
         Domingo
        </div>
        <div className={`px-6 ${weekDay === 1 ? 'font-bold bg-emerald-200 rounded-full border-2 border-emerald-400':''}`}>
            Lunes
        </div>
        <div className={`px-6 ${weekDay === 2 ? 'font-bold bg-emerald-200 rounded-full border-2 border-emerald-400':''}`}>
            Martes
        </div>
        <div className={`px-6 ${weekDay === 3 ? 'font-bold bg-emerald-200 rounded-full border-2 border-emerald-400':''}`}>
            Miércoles
        </div>
        <div className={`px-6 ${weekDay === 4 ? 'font-bold bg-emerald-200 rounded-full border-2 border-emerald-400':''}`}>
            Jueves
        </div>
        <div className={`px-6 ${weekDay === 5 ? 'font-bold bg-emerald-200 rounded-full border-2 border-emerald-400':''}`}>
            Viernes
        </div>
        <div className={`px-6 ${weekDay === 6 ? 'font-bold bg-emerald-200 rounded-full border-2 border-emerald-400':''}`}>
            Sábado
        </div>
    </div>
  )
}

export default Week