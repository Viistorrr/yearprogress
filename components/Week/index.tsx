const Week = ({day}:any) => {
console.log(day);
const getDay = () =>{
   
    if(day === "Domingo"){
        return "text-red-500"
    }else if(day === "Lunes"){
        return "text-yellow-500"
    }else if(day === "Martes"){
        return "text-green-500"
    }else if(day === "Miércoles"){
        return "font-bold text-red-500"
    }else if(day === "Jueves"){
        return "text-indigo-500"
    }else if(day === "Viernes"){
        return "text-purple-500"
    }else if(day === "Sábado"){
        return "text-pink-500"
    }
}
console.log(getDay())
  return (
    <div className="flex items-center">
        <div className={`px-6 ${getDay()}`}>
         Domingo
        </div>
        <div className={`px-6 ${getDay()}`}>
            Lunes
        </div>
        <div className={`px-6 ${getDay()}`}>
            Martes
        </div>
        <div className={`px-6 ${getDay()}`}>
            Miércoles
        </div>
        <div className={`px-6 ${getDay()}`}>
            Jueves
        </div>
        <div className={`px-6 ${getDay()}`}>
            Viernes
        </div>
        <div className={`px-6 ${getDay()}`}>
            Sábado
        </div>
    </div>
  )
}

export default Week