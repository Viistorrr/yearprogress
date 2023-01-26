const Week = ({weekDay}:any) => {

 
  return (
    <div className="flex flex-wrap items-center py-4">
        <div className={`px-6 rounded-md border-2 border-gray-800 ${weekDay === 7 ? 'font-bold':''}`}>
         Domingo
        </div>
        <div className={`px-6 rounded-md border-2 border-gray-800 ${weekDay === 1 ? 'font-bold':''}`}>
            Lunes
        </div>
        <div className={`px-6 rounded-md border-2 border-gray-800 ${weekDay === 2 ? 'font-bold':''}`}>
            Martes
        </div>
        <div className={`px-6 rounded-md border-2 border-gray-800 ${weekDay === 3 ? 'font-bold':''}`}>
            Miércoles
        </div>
        <div className={`px-6 rounded-md border-2 border-gray-800 ${weekDay === 4 ? 'font-bold':''}`}>
            Jueves
        </div>
        <div className={`px-6 rounded-md border-2 border-gray-800 ${weekDay === 5 ? 'font-bold':''}`}>
            Viernes
        </div>
        <div className={`px-6 rounded-md border-2 border-gray-800 ${weekDay === 6 ? 'font-bold':''}`}>
            Sábado
        </div>
    </div>
  )
}

export default Week