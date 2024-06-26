export const Years = () => {
  let currentYear = new Date().getFullYear();
  const getYears = (currentYear: number) => {
  let years: number[] = [];
    for (let i = 2022; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
    }

  return (
    <div className='flex items-center mb-4'>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <nav className="flex space-x-2 rounded-md shadow-sm" aria-label="Pagination">
          <span>...</span>
          {getYears(currentYear).map((year) => 
            <>
              {
                currentYear === year
                ?  <span className="font-bold"> {year}</span>
                : <span className="font-light"> {year} |</span>
              }
            </>
          )}
          <span>...</span>
        </nav>
      </div>
    </div>
  );
};
